/**
 * @
 * @   ┏┓　　　┏┓
 * @ ┏┛┻━━━┛┻┓
 * @ ┃　　　　　　　┃
 * @ ┃　　　━　　　┃
 * @ ┃　＞　　　＜　┃
 * @ ┃　　　　　　　┃
 * @ ┃...　⌒　...　┃
 * @ ┃　　　　　　　┃
 * @ ┗━┓　　　┏━┛
 * @     ┃　　　┃
 * @     ┃　　　┃
 * @     ┃　　　┃
 * @     ┃　　　┃  神兽保佑
 * @     ┃　　　┃  代码无bug
 * @     ┃　　　┃
 * @     ┃　　　┗━━━┓
 * @     ┃　　　　　　　┣┓
 * @     ┃　　　　　　　┏┛
 * @     ┗┓┓┏━┳┓┏┛
 * @       ┃┫┫　┃┫┫
 * @       ┗┻┛　┗┻┛
 * @
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-09-09 11:13:09
 * @Description  : 筛选大于40KB的背景图
 * @FilePath     :\documentsd:\Users\Gitee\项目展示\照片筛选\img40.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-09-09 12:55:29
 */

let fs = require("fs")
const { imgSize } = require("../imgSize1")
const { wen } = require("../wen")
let image = [] // 全部图片
let versionBefore
imgSize.forEach((it) => {
	wen.forEach((item) => {
		let project = fs.readFileSync(item, {
			encoding: "utf-8",
		})
		versionBefore = JSON.stringify(project).includes(`url('${it}')`)
		if (versionBefore) {
			image.push(it)
		}
	})
})
fs.writeFileSync("./allPicture.js", JSON.stringify(image))
