/**
 * @Author       : 赵军
 * @Date         : 2022-07-26 15:18:11
 * @LastEditors  : 赵军
 * @LastEditTime : 2022-07-26 17:50:31
 * @FilePath     : \项目展示\pinyin\index.js
 * @Description  :
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 */
const { config } = require("./config")
const { pinyin } = require("pinyin-pro")
const fs = require("fs-extra")
let data = []
config.forEach((item) => {
	const pin1 = pinyin(item.cityName, { pattern: "first", toneType: "none" })
	const pin2 = pinyin(item.cityName, { toneType: "none" })
	item.cityNameEn = `${pin1}|${pin2}`.toUpperCase().replace(/ /g, "")
	data.push(item)
})
console.log(data)
fs.writeJson(
	"data.json",
	data,
	{
		encoding: "utf-8",
	},
	(err) => {
		if (err) throw err
		console.log("The file has been saved!")
	}
)
