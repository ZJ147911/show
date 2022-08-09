/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unmodified-loop-condition */
/**
 * depend: [ 'Encrypt.min.js', 'jsencrypt.js']
 */

let http = null
let keyPrefix = '' // 缓存的信息
let expireTime = 0 // 缓存时间*分钟
const dataStore = {}
let isSending = false
const reqList = []
let retryOptions = null

// 业务接口集合
const APIS = {
    getPublicKeyFromServer: 'mapi/auth/getPublicKey',
    getAesKeyFromServer: '/mapi/auth/getAesKey'
}

// 存储
const storage = {
    setValueInCache(key, val) {
        const startTime = new Date().getTime()
        sessionStorage.setItem(
            key,
            JSON.stringify({ data: val, st: startTime })
        )
    },
    getValueFromCache(key) {
        const parse = JSON.parse(sessionStorage.getItem(keyPrefix) || '{}')
        if (new Date().getTime() - parse.st >= expireTime) {
            sessionStorage.removeItem(keyPrefix)
            return undefined
        }
        if (parse.data && parse.data[key]) {
            return parse.data[key] || undefined
        }
        return undefined
    }
}

// 工具函数集合
const utils = {
    generateRandomValue() {
        const timestamp = new Date().getTime()
        const randomNum = parseInt(Math.random() * 100000, 10)
        return `${timestamp}-${randomNum}`
    },
    reqFnWithRetry(url, params, resolve, reject) {
        let curRetryTimes = 0
        function reqFn(url, params, resolve, reject) {
            http.post(url, params).then(
                res => {
                    const data = res.data
                    if (data.success) {
                        resolve(data.result)
                        return
                    }
                    if (curRetryTimes < retryOptions.getKeyError) {
                        curRetryTimes += 1
                        reqFn(url, params, resolve, reject)
                        return
                    }
                    reject(`${url}--${data.errorCode}--${data.errorMsg}`)
                },
                err => {
                    reject(err)
                }
            )
        }
        reqFn(url, params, resolve, reject)
    }
}

// 处理传进来的配置项
function _handleOptions(options) {
    if (!(options && options.http)) {
        throw Error('请传入相关options选项')
    }
    keyPrefix = options.key || 'h5-encrypt-decrypt-cache'
    retryOptions = options.retryOptions || {}
    http = options.http
    expireTime = Number(options.expireTime || 0) * 1000
}

// 通过接口申请服务端的publickey
function _getPublicKeyFromServer() {
    return new Promise((resolve, reject) => {
        if (storage.getValueFromCache('serverPublicKey')) {
            resolve(storage.getValueFromCache('serverPublicKey'))
            return
        }
        const params = {}
        const url = APIS.getPublicKeyFromServer
        utils.reqFnWithRetry(url, params, resolve, reject)
    })
}

// 通过接口申请AES KEY
function _getAesKeyFromServer(openId, serverPublicKey, clientRsaKey) {
    return new Promise((resolve, reject) => {
        if (storage.getValueFromCache('encryptedAesKey')) {
            resolve(storage.getValueFromCache('encryptedAesKey'))
            return
        }
        const params = {
            openId,
            clientRsaPublicKey: clientRsaKey.clientRsaPublicKey
        }
        const RSAUtils = new JSEncrypt()
        RSAUtils.setPublicKey(serverPublicKey)
        let encData = RSAUtils.encrypt(JSON.stringify(params))
        let dataErrRetryCount = 0
        while (
            /==$/.test(encData) &&
            dataErrRetryCount < (retryOptions.signError || 0)
        ) {
            encData = RSAUtils.encrypt(JSON.stringify(params))
            dataErrRetryCount += 1
        }
        const url = APIS.getAesKeyFromServer
        utils.reqFnWithRetry(url, { encData }, resolve, reject)
    })
}

// 客户端key(公钥私钥对)的生成
function _generateClientRsaKey() {
    if (storage.getValueFromCache('clientRsaKey')) {
        return storage.getValueFromCache('clientRsaKey')
    }
    const clientKey = {}
    const RSAUtils = new JSEncrypt()
    clientKey.clientRsaPrivateKey = RSAUtils.getPrivateKeyB64()
    clientKey.clientRsaPublicKey = RSAUtils.getPublicKeyB64()
    return clientKey
}

// 生成openId
function _generateOpenId() {
    if (storage.getValueFromCache('openId')) {
        return storage.getValueFromCache('openId')
    }
    const randomNum = utils.generateRandomValue()
    const openId = `REDBAG-${randomNum}`
    return openId
}

// 解密aeskey接口返回的结果
function decryptAesKeyResult(RSAUtils, clientKey, encryptedAesKey) {
    RSAUtils.setPrivateKey(clientKey.clientRsaPrivateKey)
    const data = JSON.parse(RSAUtils.decryptLong(encryptedAesKey))
    return data
}

// 对客户端的公钥进行验签
function vertifyClientPublicKeySign(
    clientRsaPublicKeySign,
    RSAUtils,
    serverPublicKey,
    clientRsaKey
) {
    RSAUtils.setPublicKey(serverPublicKey)
    const verified = RSAUtils.verify(
        clientRsaKey.clientRsaPublicKey,
        clientRsaPublicKeySign,
        CryptoJS.SHA512
    )
    return verified
}

// 加密请求参数
function enceyptReqParams(RSAUtils, reqParams, openId, aesKey, clientRsaKey) {
    GibberishAES.size(256)
    const encData = GibberishAES.aesEncrypt(JSON.stringify(reqParams), aesKey)
    RSAUtils.setPrivateKey(clientRsaKey.clientRsaPrivateKey)
    const aesKeySign = RSAUtils.sign(aesKey, CryptoJS.SHA512, 'sha512')
    const enceyptedParams = {
        openId,
        aesKeySign,
        encData,
        encyType: 'C006'
    }
    return enceyptedParams
}

// 业务api请求
function apiReq(reqObj) {
    const { api, enceyptedParams, options } = reqObj
    delete options.encryptUp
    delete options.encryptAll
    return new Promise((resolve, reject) => {
        http.post(api, enceyptedParams, options).then(
            response => {
                // console.log('[encryptUpAndDecryptDown.js/177]: ', response);
                const data = (response && response.data) || {}
                if (!data.success) {
                    if (
                        (retryOptions.clearStorage || []).indexOf(
                            data.errorCode
                        ) > -1
                    ) {
                        // window.localStorage.removeItem(keyPrefix);
                        window.sessionStorage.removeItem(keyPrefix)
                    }
                }
                resolve(response)
            },
            err => {
                reject(err)
            }
        )
    })
}

// 从并发的请求中取一个单独请求
function oneReqFromReqList(req) {
    const oneReq = reqList.shift()
    if (oneReq) {
        req(oneReq)
    }
}

// 上行加密主体
function encryptUp(api, reqParams, options) {
    return new Promise(async (resolve, reject) => {
        if (isSending) {
            const reqParamsWithResol = Object.assign(
                {},
                { api, reqParams, options, resolve, reject }
            )
            reqList.push(reqParamsWithResol)
            return
        }
        _handleOptions(options)
        let serverPublicKey
        let signErrorCurRetryCount = 0
        let apiCurRetryCount = 0
        isSending = true
        try {
            serverPublicKey = await _getPublicKeyFromServer()
        } catch (err) {
            isSending = false
            reject(err)
            return
        }
        async function sendReqWithEncrypt(reqObj) {
            // 客户端生成一对客户端公私钥
            const clientRsaKey = _generateClientRsaKey()
            const openId = _generateOpenId()
            let encryptedAesKey = ''
            try {
                encryptedAesKey = await _getAesKeyFromServer(
                    openId,
                    serverPublicKey,
                    clientRsaKey
                )
            } catch (err) {
                reject(err)
                return
            } finally {
                isSending = false
            }
            const RSAUtils = new HB_JSEncrypt()
            const { aesKey, clientRsaPublicKeySign } = decryptAesKeyResult(
                RSAUtils,
                clientRsaKey,
                encryptedAesKey
            )
            const isPassVertifySign = vertifyClientPublicKeySign(
                clientRsaPublicKeySign,
                RSAUtils,
                serverPublicKey,
                clientRsaKey
            )
            if (isPassVertifySign) {
                dataStore.aesKey = aesKey
                const enceyptedParams = enceyptReqParams(
                    RSAUtils,
                    reqObj.reqParams,
                    openId,
                    aesKey,
                    clientRsaKey
                )
                if (
                    /==$/.test(enceyptedParams.aesKeySign) &&
                    signErrorCurRetryCount < retryOptions.signError
                ) {
                    signErrorCurRetryCount += 1
                    sendReqWithEncrypt(reqObj)
                    return
                }
                const encryKey = {
                    encryptedAesKey,
                    serverPublicKey,
                    clientRsaKey,
                    openId
                }
                if (!window.sessionStorage.getItem(keyPrefix)) {
                    storage.setValueInCache(keyPrefix, encryKey)
                }
                const obj = Object.assign({}, { enceyptedParams }, reqObj)
                try {
                    const response = await apiReq(obj)
                    // console.log('[encryptUpAndDecryptDown.js/255]: ', response);
                    const data = (response && response.data) || {}
                    if (
                        !data.success &&
                        (retryOptions.clearStorage || []).indexOf(
                            data.errorCode
                        ) > -1
                    ) {
                        if (apiCurRetryCount < retryOptions.apiError) {
                            apiCurRetryCount += 1
                            sendReqWithEncrypt(reqObj)
                            return
                        }
                    }
                    obj.resolve(response)
                } catch (err) {
                    obj.reject(err)
                }
                while (reqList && reqList.length > 0) {
                    oneReqFromReqList(sendReqWithEncrypt)
                }
            } else {
                oneReqFromReqList(sendReqWithEncrypt)
                reject('验签失败')
            }
        }
        sendReqWithEncrypt({ api, reqParams, options, resolve, reject })
    })
}

// 对返回参数下行解密
function decryptDown(res) {
    if (res && res.data && res.data.success && res.data.result) {
        GibberishAES.size(256)
        const data = GibberishAES.aesDecrypt(res.data.result, dataStore.aesKey)
        res.data.result = JSON.parse(data)
    }
    return res
}

export default {
    encryptUp,
    decryptDown
}
