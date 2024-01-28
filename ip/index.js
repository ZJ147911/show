import { publicIp, publicIpv4, publicIpv6 } from 'public-ip'


const fn = () => {
  publicIpv4().then((ip) => {
    console.log("🚀 ~ file: index.js:11 ~ publicIpv4 ~ ip", ip)
  }).catch((err) => {
    console.log("🚀 ~ file: index.js:15 ~ publicIpv4 ~ err", err)
  })
}

setInterval(()=>{fn()}, 1000)