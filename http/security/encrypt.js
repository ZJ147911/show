import Encrypts from './jsEncrypt'
const { GibberishAES, JSEncrypt, Base64 } = Encrypts;
import CryptoJS from './cryptoJS.js'


const Encrypt = {
  keyList: ['YHYY', 'TCRZ', 'QYYB', 'JSB', 'DZQD', 'MTDP', 'DXSZ'],
  generateMixedForCA: () => {
    let num = ''
    for (let i = 0; i < 32; i += 1) {
      const id = Math.floor(Math.random() * 10)
      num += id
    }
    return num
  },
  generateMixed: () => {
    let num = ''
    for (let i = 0; i < 16; i += 1) {
      const id = Math.floor(Math.random() * 10)
      num += id
    }
    return num
  },
  AES_Encode: (text, key) => { // 编码
    GibberishAES.size(256)
    const edata = GibberishAES.aesEncrypt(text, key)
    return edata
  },
  AES_Decode: (text, key) => { // 解码
    try {
      GibberishAES.size(256);
      const desRes = GibberishAES.aesDecrypt(text, key);
      return desRes;
    } catch (e) {
      return null;
    }
  },
  AES_EncodeForCA: (text, key) => {
    GibberishAES.size(128)
    const edata = GibberishAES.aesEncrypt(text, key)
    return edata
  },
  BASE_64: (text) => {
    console.log('============', encrypt);
    const encode = GibberishAES.Base64.encode(text)
    return encode
  },
  h5CommonRsa: (publicKey, randomKey) => {
    const RSAUtils = new JSEncrypt()
    RSAUtils.setPublicKey(publicKey)
    const ekey = RSAUtils.encrypt(randomKey)
    return ekey
  },
  h5MD5: (text) => {
    const sign = CryptoJS.MD5(text).toString().toUpperCase()
    return sign
  },
  generateKey: (text) => {
    let key = '*$BAS784@!jk9';
    // Encrypt.keyList.indexOf(text) > -1
    if (text) {
      key = text + key;
      return Encrypt.h5MD5(key);
    } else {
      return null;
    }
  },
  seek: (text) => {
    const keys = []
    for (let i = 0; i < text.length; i++) {
      keys.push(Math.floor(Math.random() * 10))
    }
    // const keys = ['6','8','0','5','4','3','1','7','9','2'];
    // const keys = ['A','S','D','F','G','H','Y','U','K','Q'];
    const textList = text.split('').reverse();
    for (let i = 0; i < keys.length; i++) {
      textList.splice(2 * i, 0, keys[i]);
    }
    return textList.join('');
  },
  seekKey: (text) => {
    if (typeof (text) !== 'string') {
      return console.error('参数类型错误');
    }
    const list = text.split('');
    for (let i = 0; i < text.length / 2; i++) {
      list.splice(i, 1);
    }
    return list.reverse().join('');
  },
  GibberishAES, JSEncrypt, CryptoJS, Base64
}
export default Encrypt
