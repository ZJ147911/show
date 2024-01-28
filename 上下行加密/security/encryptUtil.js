/* eslint-disable arrow-body-style */
/* eslint indent: "off" */
/* eslint semi: "off" */
/* eslint no-undef: "off" */
/* eslint no-else-return: "off" */
import securityUtil from '@/util/security/util/index';

const Encrypt = {
  keyList: ['YHYY', 'QYYB'],
  AES_Encode: (text, key) => {
    // GibberishAES.size(256)
    // const edata = GibberishAES.aesEncrypt(text, key)
    // return edata
    console.error('[ Deprecated ] AES_Encode() was deprecated and can use securityUtil.aesEncrypt256() intead');
    return securityUtil.aesEncrypt256(text, key);
  },
  AES_Decode: (text, key) => {
    console.error('[ Deprecated ] AES_Decode() was deprecated and can use securityUtil.aesDecrypt256() intead');
    return securityUtil.aesDecrypt256(text, key);
  },
  AES_EncodeForCA: (text, key) => {
    // GibberishAES.size(128)
    // const edata = GibberishAES.aesEncrypt(text, key)
    // return edata
    console.error('[ Deprecated ] AES_EncodeForCA() was deprecated and can use securityUtil.aesEncrypt128() intead');
    return securityUtil.aesEncrypt128(text, key);
  },
  h5CommonRsa: (publicKey, randomKey) => {
    // const RSAUtils = new JSEncrypt()
    // RSAUtils.setPublicKey(publicKey)
    // const ekey = RSAUtils.encrypt(randomKey)
    // return ekey
    console.error('[ Deprecated ] h5CommonRsa() was deprecated and can use securityUtil.rsaEncryptByJSEncrypt() intead');
    return securityUtil.rsaEncryptByJSEncrypt(publicKey, randomKey);
  },
  h5MD5: (text) => {
    // const sign = CryptoJS.MD5(text).toString().toUpperCase()
    // return sign
    console.error('[ Deprecated ] h5MD5() was deprecated and can use securityUtil.md5ByCryptoJS() intead');
    return securityUtil.md5ByCryptoJS(text);
  },
  generateKey: (text) => {
    console.error('[ Deprecated ] generateKey() was deprecated and can use securityUtil.bpGenerateKey() intead');
    return securityUtil.bpGenerateKey(text);
  }
}

export default {
    generateKey: Encrypt.generateKey,
    AES_Decode: Encrypt.AES_Decode,
    AES_Encode: Encrypt.AES_Encode
};
