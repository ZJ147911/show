/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-08-09 23:18:04
 * @Description  :
 * @FilePath     :\documentsd:\Users\Gitee\项目展示\工具\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-08-09 23:25:42
 */
const isCardID = (sId) => {
	if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
		console.log("你输入的身份证长度或格式错误")
		return false
	}
	//身份证城市
	var aCity = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外",
	}
	if (!aCity[parseInt(sId.substr(0, 2))]) {
		console.log("你的身份证地区非法")
		return false
	}

	// 出生日期验证
	var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(
			/-/g,
			"/"
		),
		d = new Date(sBirthday)
	if (sBirthday != d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()) {
		console.log("身份证上的出生日期非法")
		return false
	}

	// 身份证号码校验
	var sum = 0,
		weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
		codes = "10X98765432"
	for (var i = 0; i < sId.length - 1; i++) {
		sum += sId[i] * weights[i]
	}
	var last = codes[sum % 11] //计算出来的最后一位身份证号码
	if (sId[sId.length - 1] != last) {
		console.log("你输入的身份证号非法")
		return false
	}

	return true
}

if (isCardID("110101199603076257")) {
	console.log("身份证号")
}
