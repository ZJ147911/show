const os = require('os')
function getNetworkIp() {
  let needHost = []// 打开的host
  try {
    // 获得网络接口列表
    let network = os.networkInterfaces()
    console.log("🚀 ~ file: a.js:17 ~ getNetworkIp ~ network", network)
    Object.keys(network).forEach((item) => {
      network[item].forEach((it) => {
        if (it.family === 'IPv4' && it.address !== '127.0.0.1' && !it.internal) {
          needHost.push({
            name: item,
            address: it.address
          })
        }
      })
    })
  } catch (e) {
    needHost.push({
      name: 'localhost',
      address: 'localhost'
    })
  }
  return needHost
}
const ip = getNetworkIp()
console.log("🚀 ~ file: a.js:36 ~ ip", ip)


let b = {
  teleCode: "398",
  mobileHCode: "1572903",
  phoneNo: "15729039465",
  provTelecode: "371"
}
let a = {
  "areaCode": "0398",
}