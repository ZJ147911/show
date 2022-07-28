/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-07-28 13:42:26
 * @Description  :
 * @FilePath     :\utilitiesappd:\Users\Gitee\项目展示\对象匹配\a.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-07-28 14:42:05
 */

const province_list = [
	{ cityName: "北京", code: "11", val: "811" },
	{ cityName: "天津", code: "12", val: "812" },
	{ cityName: "河北", code: "13", val: "813" },
	{ cityName: "山西", code: "14", val: "814" },
	{ cityName: "内蒙古", code: "15", val: "815" },
	{ cityName: "辽宁", code: "21", val: "821" },
	{ cityName: "吉林", code: "22", val: "822" },
	{ cityName: "黑龙江", code: "23", val: "823" },
	{ cityName: "上海", code: "31", val: "831" },
	{ cityName: "江苏", code: "32", val: "832" },
	{ cityName: "浙江", code: "33", val: "833" },
	{ cityName: "安徽", code: "34", val: "834" },
	{ cityName: "福建", code: "35", val: "835" },
	{ cityName: "江西", code: "36", val: "836" },
	{ cityName: "山东", code: "37", val: "837" },
	{ cityName: "河南", code: "41", val: "841" },
	{ cityName: "湖北", code: "42", val: "842" },
	{ cityName: "湖南", code: "43", val: "843" },
	{ cityName: "广东", code: "44", val: "844" },
	{ cityName: "广西", code: "45", val: "845" },
	{ cityName: "海南", code: "46", val: "846" },
	{ cityName: "重庆", code: "50", val: "850" },
	{ cityName: "四川", code: "51", val: "851" },
	{ cityName: "贵州", code: "52", val: "852" },
	{ cityName: "云南", code: "53", val: "853" },
	{ cityName: "西藏", code: "54", val: "854" },
	{ cityName: "陕西", code: "61", val: "861" },
	{ cityName: "甘肃", code: "62", val: "862" },
	{ cityName: "青海", code: "63", val: "863" },
	{ cityName: "宁夏", code: "64", val: "864" },
	{ cityName: "新疆", code: "65", val: "865" },
]
// const getVal = (code) => {
// 	return province_list.find((item) => {
// 		return item.code == code
// 	}).val
// }
// console.log(getVal(54))

const dateNow = () => {
	const time = new Date()
	return `${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}
console.log(dateNow())
