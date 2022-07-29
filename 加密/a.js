/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-07-29 18:07:35
 * @Description  :
 * @FilePath     :\utilitiesappd:\Users\Gitee\项目展示\加密\a.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-07-29 18:07:37
 */
let IdentityKey = 1,
	productNoKey = 2,
	key
const diffKey = (val) => {
	if (val == "IdentityKey") {
		key = IdentityKey
	} else if (val == "productNoKey") {
		key = productNoKey
	}
}
diffKey("IdentityKey")
console.log(key)
