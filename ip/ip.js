// 获取本机ip地址
const os = require('os')
function getNetworkIp() {
  let needHost = '' // 打开的host
  try {
    // 获得网络接口列表
    let wlan, host
    let network = os.networkInterfaces()
    for (let item in network) {
      network[item].forEach((it) => {
        if (item === 'WLAN' && it.family === 'IPv4' && it.address !== '127.0.0.1' && !it.internal) {
          wlan = it.address
        }
        if (item === '以太网' && it.family === 'IPv4' && it.address !== '127.0.0.1' && !it.internal) {
          host = it.address
        }
      })
    }
    needHost = wlan || host
  } catch (e) {
    needHost = 'localhost'
  }
  return needHost
}
process.env.VUE_APP_IP = getNetworkIp()
console.log('🚀 ~ file: vue.config.js:32 ~ process.env.VUE_APP_IP :', process.env.VUE_APP_IP);

