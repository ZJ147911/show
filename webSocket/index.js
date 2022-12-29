/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-12-15 12:56:37
 * @Description  :
 * @FilePath     :\项目展示\webSocket\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-12-29 22:08:36
 */
const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

const os = require('os')
function getNetworkIp() {
  let needHost = '' // 打开的host
  try {
    // 获得网络接口列表
    let network = os.networkInterfaces()
    let iface = network['本地连接* 10']
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        needHost = alias.address
      }
    }
  } catch (e) {
    needHost = 'localhost'
  }
  return needHost
}
const ip = getNetworkIp()


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'))
})

let cbStore = {} // callbackStore
var callbackIndex = 0

function mgsRequest(params, options) {
  var callbackId = ++callbackIndex
  options.callbackId = callbackId
  return new Promise((resolve) => {
    io.emit('mgs-req', params, options)
    cbStore[callbackId] = (result) => {
      return resolve(result)
    }
  })
}
app.post('/mgs/*', async (req, res, next) => {
  // console.log(req.body);
  const { params, options } = req.body

  const result = await mgsRequest(params, options)
  console.log(result)
  res.header('Access-Control-Allow-Origin', '*')
  res.json(result)
})

function jsbRequest(params, options) {
  var callbackId = ++callbackIndex
  options.callbackId = callbackId
  return new Promise((resolve) => {
    io.emit('jsb-req', params, options)
    cbStore[callbackId] = (result) => {
      return resolve(result)
    }
  })
}

app.post('/jsb/*', async (req, res, next) => {
  // console.log(req.body);
  const { params, options } = req.body

  const result = await jsbRequest(params, options)
  console.log(result)
  res.json(result)
})
function jsbH5Request(params, options) {
  var callbackId = ++callbackIndex
  options.callbackId = callbackId
  return new Promise((resolve) => {
    io.emit('jsbH5-req', params, options)
    cbStore[callbackId] = (result) => {
      return resolve(result)
    }
  })
}

app.post('/jsbH5/*', async (req, res, next) => {
  // console.log(req.body);
  const { params, options } = req.body

  const result = await jsbH5Request(params, options)
  console.log(result)
  res.json(result)
})

function invokeCallbackHandler(callbackId, params) {
  var callback = cbStore[callbackId]
  delete cbStore[callbackId]
  if ("function" == typeof callback) {
    callback(params)
  }
}
io.on('connection', (socket) => {
  socket.on('mgs-res', msg => {
    // console.log(msg)
    var { callbackId } = msg
    delete msg.callbackId
    invokeCallbackHandler(callbackId, msg)
  })
  socket.on('jsb-res', msg => {
    // console.log(msg)
    var { callbackId } = msg
    delete msg.callbackId
    invokeCallbackHandler(callbackId, msg)
  })
  socket.on('jsbH5-res', msg => {
    // console.log(msg)
    var { callbackId } = msg
    delete msg.callbackId
    invokeCallbackHandler(callbackId, msg)
  })
})

server.listen(3000, () => {
  console.log(`listening on  http://${ip}:3000`)
})