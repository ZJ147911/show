/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-08-16 11:14:20
 * @Description  :
 * @FilePath     :\documentsd:\Users\Gitee\项目展示\项目接口筛选\生活缴费\utilities\生活.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-08-16 11:26:01
 */
const { API } = require("./api")
const fs = require("fs")
let api = []
API.forEach((item) => {
	if (item.gapiStr) {
		item.url = `/gapi/${item.urlSuffix}`
	} else {
		item.url = `/mapi/ILivelihoodPublicService/${item.urlSuffix}`
	}
	api.push(item)
})

fs.writeFileSync("./utilities.json", JSON.stringify(api))
