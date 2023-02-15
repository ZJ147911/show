// 端外H5使用
const h5ConfigTest = {
  baseURL: 'https://mgs.test.bestpay.net/mgw.htm',
  appid: '9D9DC82291830',
  workspaceid: 'TEST',
  signType: 'md5',
  secretKey: 'c99e56f0862f4e9b8ac192316ab79b65',
  encryptType: 2,
  publicKey:
    `
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoEcz1UBgi0DQgAEhYXsxs453JtwhnUbksd1oNu0ujvM
+gRo1+HiRg4ZSr0GMjDf5cMToOyNQPALyhs9Hc+OIt0SirlE/efpl3NhfQ==
-----END PUBLIC KEY-----
`,
  extraHttpConfig: {},
  extraHeaderInfos: {}
}

const h5ConfigProd = {
  baseURL: 'https://mgs.test.bestpay.net/mgw.htm',
  appid: '25BA167271848',
  workspaceid: 'TEST',
  signType: 'md5',
  secretKey: '6fe4b366bba14cbd25ced78bc75b6ecd',
  encryptType: 2,
  publicKey:
    `
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoEcz1UBgi0DQgAEleqGzvxA8u8fdkyFUq9VhqadaxTP
zQXbGkPysvu5zqDWIHdgYBSwyr18mtyuuiljyXmbLAL91no/t/7uiwSckQ==
-----END PUBLIC KEY-----
`,
  extraHttpConfig: {},
  extraHeaderInfos: {}
}

let config = h5ConfigTest

const mgsCallH5 = (params, options = {}) => {
  // console.log('mgsCallH5')
  const { method = 'post', operationType } = options
  if (!operationType) {
    console.warn('operationType undefined')
    return
  }
  if (!MP || !MP.MGS) {
    console.warn('MGS sdk init fail')
    return
  }

  let requestData = params
  return new Promise((resolve, reject) => {
    MP.MGS.call('rpc', {
      ...config,
      method,
      operationType,
      data: requestData,
    }, function (response) {
      console.log("🚀 ~ file: config.js:60 ~ returnnewPromise ~ response", response);
      const { status, data } = response
      if (status >= 200 && status < 300) {
        let ret = data
        if (typeof data === 'string') {
          try {
            ret = JSON.parse(data)
          } catch (e) { }
        }
        console.log(status, ret)
        return resolve(ret)
      }
      reject(response)
    })
  })
}

function onBridgeReady(callback) {
  if (window.AlipayJSBridge) {
    callback && callback()
  } else {
    document.addEventListener('AlipayJSBridgeReady', callback, false)
  }
}

const mgsCallNa = (params, options = {}) => {
  // console.log('mgsCallNa')
  const { method = 'post', operationType } = options
  if (!operationType) {
    console.warn('operationType undefined')
    return
  }
  if (typeof params != 'object') {
    console.warn('params should be object')
  }
  let requestData = [params]
  return new Promise((resolve, reject) => {
    onBridgeReady(() => {
      AlipayJSBridge.call('rpc', {
        operationType: operationType,
        requestData: requestData,
        headers: {},
        getResponse: true
      },
        function (result) {
          console.log("🚀 ~ file: config.js:107 ~ onBridgeReady ~ result", result);
          if (result.resData && result.resData.success) {
            console.log('111111');
            resolve(result)
          } else {
            console.log('222222');
            reject(result)
          }
        })
    })
  })
}

function checkIsmPaasClient() {
  return !!(
    "undefined" != typeof window &&
    window.navigator &&
    window.navigator.userAgent &&
    -1 < window.navigator.userAgent.indexOf("mPaaSClient")
  )
}

let request = checkIsmPaasClient() ? mgsCallNa : mgsCallH5


window.request = request