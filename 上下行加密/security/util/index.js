/* replace ../encrypt.js */

/**
 * [ 生成16位的随机数 ]
 */
const randomString16 = () => {
    let num = ''
    for (let i = 0; i < 16; i++) {
        let id = Math.floor(Math.random() * 10)
        num += id
    }
    return num
}

/**
 * [ 公钥对数据进行加密 ]
 * 用途：用公钥对私钥RSA加密
 *
 * @param {String} rsaPublicKey
 * @param {String} value
 */
const rsaEncryptByJSEncrypt = (rsaPublicKey, value) => {
    let RSAUtils = new JSEncrypt()
    RSAUtils.setPublicKey(rsaPublicKey)
    let ekey = RSAUtils.encrypt(value)
    return ekey
}

/**
 * [ aes加密，长度为256 ]
 * @param {String} plainText
 * @param {String} key
 */
const aesEncrypt256 = (plainText, key) => {
    GibberishAES.size(256)
    let edata = GibberishAES.aesEncrypt(plainText, key)
    return edata
}

/**
 * [ aes解密，长度为256 ]
 * @param {String} plainText
 * @param {String} key
 */
const aesDecrypt256 = (plainText, key) => {
    GibberishAES.size(256)
    return GibberishAES.aesDecrypt(plainText, key)
}

/**
 * [ aes加密，长度为128 ]
 *
 * @param {String} plainText
 * @param {String} key
 */
const aesEncrypt128 = (plainText, key) => {
    GibberishAES.size(128)
    let edata = GibberishAES.aesEncrypt(plainText, key)
    return edata
}

/**
 * [ aes解密，长度为128 ]
 *
 * @param {String} plainText
 * @param {String} key
 */
const aesDecrypt128 = (plainText, key) => {
    GibberishAES.size(128)
    let edata = GibberishAES.aesDecrypt(plainText, key)
    return edata
}

/**
 * [ 生成文本的md5 ]
 * @description 调用CryptoJS的md5方法，全大写
 * @param {String} plainText
 */
const md5ByCryptoJS = plainText => {
    let sign = CryptoJS.MD5(plainText)
        .toString()
        .toUpperCase()
    return sign
}

/**
 * [ 生成翼支付独有的key ]
 *
 * 建议从公共方法中剥离，放在业务方法中
 *
 * @param {String} text
 * @param {Array<String>} rangeList
 */
const bpGenerateKey = (text, rangeList = ['YHYY', 'QYYB', 'WGCZ']) => {
    let key = '*$BAS784@!jk9'
    if (rangeList.indexOf(text) > -1) {
        key = text + key
        return md5ByCryptoJS(key)
    }
    return null
}

export default {
    randomString16,
    rsaEncryptByJSEncrypt,
    aesEncrypt256,
    aesDecrypt256,
    aesEncrypt128,
    aesDecrypt128,
    md5ByCryptoJS,
    bpGenerateKey
}
