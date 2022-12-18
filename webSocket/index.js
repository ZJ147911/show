/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-12-15 12:56:37
 * @Description  :
 * @FilePath     :\webSocket\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-12-16 12:22:58
 */
const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

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
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", '3.2.1')
  res.header('Access-Control-Allow-Origin', '*')
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
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})