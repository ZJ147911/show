/**
 * @Author       :醉人心
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-07-18 21:41:02
 * @Description  :
 * @FilePath     :\show\encryption\crypto\index.js
 * @LastEditors  :醉人心
 * @LastEditTime :2023-07-18 22:16:53
 */
var cryptoJs = require('crypto-js');
// console.log(cryptoJs.SHA256('Message'));
// console.log(cryptoJs.HmacSHA1('Message', 'Key'));

var key = cryptoJs.enc.Utf8.parse('8NONwyJtHesysWpM');
var plaintText = 'ABCDEFGHYABNKGSX'; // 明文
var encryptedData = cryptoJs.AES.encrypt(plaintText, key, {
	mode: cryptoJs.mode.ECB,
	padding: cryptoJs.pad.Pkcs7
});
console.log('加密前：' + plaintText);
console.log('加密后：' + encryptedData);
encryptedData = encryptedData.ciphertext.toString();
var encryptedHexStr = cryptoJs.enc.Hex.parse(encryptedData);
var encryptedBase64Str = cryptoJs.enc.Base64.stringify(encryptedHexStr);
var decryptedData = cryptoJs.AES.decrypt(encryptedBase64Str, key, {
	mode: cryptoJs.mode.ECB,
	padding: cryptoJs.pad.Pkcs7
});
var decryptedStr = decryptedData.toString(cryptoJs.enc.Utf8);
console.log('解密后:' + decryptedStr);


// 加密
function encrypt(word, keyStr, ivStr) {
  keyStr = keyStr ? keyStr : "12345678";
  ivStr = ivStr ? ivStr : "123456789";
  let key = cryptoJs.enc.Utf8.parse(keyStr);
  let iv = cryptoJs.enc.Utf8.parse(ivStr);
  let src = cryptoJs.enc.Utf8.parse(word);
  let encrypted = cryptoJs.AES.encrypt(src, key, {
    iv,
    mode: cryptoJs.mode.CBC,
    padding: cryptoJs.pad.ZeroPadding
  });
  return encrypted.toString();
}
// 解密
function decrypt(word, keyStr, ivStr){
  keyStr = keyStr ? keyStr : "12345678";
  ivStr = ivStr ? ivStr : "123456789";
  var key = cryptoJs.enc.Utf8.parse(keyStr);
  let iv = cryptoJs.enc.Utf8.parse(ivStr);
  let base64 = cryptoJs.enc.Base64.parse(word);
  let src = cryptoJs.enc.Base64.stringify(base64);
  var decrypt = cryptoJs.AES.decrypt(src, key, {
    iv,
    mode: cryptoJs.mode.CBC,
    padding: cryptoJs.pad.ZeroPadding
  });
  return decrypt.toString(cryptoJs.enc.Utf8);
}
console.log('🚀 ~ file: index.js:63 :', encrypt(plaintText))
console.log('🚀 ~ file: index.js:64 :', decrypt(encrypt(plaintText)))
// // Encrypt
// var ciphered = cryptoJs.AES.encrypt('my message', 'secret key 123').toString();

// // Decrypt
// var bytes = cryptoJs.AES.decrypt(ciphered, 'secret key 123');
// var originalText = bytes.toString(cryptoJs.enc.Utf8);

// console.log(originalText); // 'my message'

// var data = [{ id: 1 }, { id: 2 }];

// // Encrypt
// var hypertext = cryptoJs.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

// // Decrypt
// var bytes1 = cryptoJs.AES.decrypt(hypertext, 'secret key 123');
// var decryptedData = JSON.parse(bytes1.toString(cryptoJs.enc.Utf8));

// console.log(decryptedData); // [{id: 1}, {id: 2}]
