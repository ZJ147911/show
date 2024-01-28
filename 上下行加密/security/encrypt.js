import securityUtil from './util'

const generateMixedForCA = () => {
    // let num = '';
    // for (let i = 0; i < 16; i++) {
    //     let id = Math.floor(Math.random() * 10);
    //     num += id;
    // }
    // return num;
    console.error(
        '[ Deprecated ] generateMixedForCA() was deprecated and can use securityUtil.randomString16() intead'
    )
    return securityUtil.randomString16()
}

// 用公钥对私钥RSA加密
function h5CommonRsa(publicKey, randomKey) {
    // let RSAUtils = new JSEncrypt();
    // RSAUtils.setPublicKey(publicKey);
    // let ekey = RSAUtils.encrypt(randomKey);
    // return ekey;
    console.error(
        '[ Deprecated ] h5CommonRsa() was deprecated and can use securityUtil.rsaEncryptByJSEncrypt() intead'
    )
    return securityUtil.rsaEncryptByJSEncrypt(publicKey, randomKey)
}

// AES加密
// eslint-disable-next-line camelcase
const AES_Encode = (plainText, key) => {
    // GibberishAES.size(256);
    // let edata = GibberishAES.aesEncrypt(plainText, key);
    // return edata;
    console.error(
        '[ Deprecated ] AES_Encode() was deprecated and can use securityUtil.aesEncrypt256() intead'
    )
    return securityUtil.aesEncrypt256(plainText, key)
}

// AES加密
// eslint-disable-next-line camelcase
const AES_EncodeForCA = (plainText, key) => {
    // GibberishAES.size(128);
    // let edata = GibberishAES.aesEncrypt(plainText, key);
    // return edata;
    console.error(
        '[ Deprecated ] AES_EncodeForCA() was deprecated and can use securityUtil.aesEncrypt128() intead'
    )
    return securityUtil.aesEncrypt128(plainText, key)
}

// MD5加密
const h5MD5 = plainText => {
    // let sign = CryptoJS.MD5(plainText).toString().toUpperCase();
    // return sign;
    console.error(
        '[ Deprecated ] h5MD5() was deprecated and can use securityUtil.md5ByCryptoJS() intead'
    )
    return securityUtil.md5ByCryptoJS(plainText)
}

export default {
    generateMixedForCA,
    h5CommonRsa,
    AES_Encode,
    AES_EncodeForCA,
    h5MD5
}
