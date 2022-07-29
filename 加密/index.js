/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-07-29 14:29:42
 * @Description  :
 * @FilePath     :\utilitiesappd:\Users\Gitee\项目展示\加密\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-07-29 14:49:52
 */
// import JSEncrypt from 'jsencrypt'
// import "./static/jsencrypt"
// import "./static/sm4"
const  { Sm4utils } = require("./static/sm4Util") 

function testSm4() {
	const sm4Obj = new Sm4utils("qawsedrftgyhujik")
	const sm4TextEnc = sm4Obj.encryptData_ECB("李玲梅")
	console.log("密文：", sm4TextEnc)
	const sm4ObjDec = new SM4Util("qawsedrftgyhujik")
	const sm4Text = sm4ObjDec.decryptData_ECB(sm4TextEnc)
	console.log("明文：", sm4Text)
}
testSm4()
