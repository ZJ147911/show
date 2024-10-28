/**
 * @Author       :赵军
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-12-26 17:48:50
 * @Description  :
 * @FilePath     :\show\filter\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2024-01-07 15:38:19
 */

/**
 * @description:生成随机字符串
 * @return      {string}
 */
const randomString = () => Math.random().toString(36).slice(2);
console.log("🚀 ~ file: index.js:17 ~  :", randomString()) // gi1qtdego0b

/**
 * @description:单词首字母大写
 * @param       {type} str
 * @param       {type} param2
 * @return      {type}
 */
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
console.log("🚀 ~ file: index.js:34 ~ :", uppercaseWords("hello world")); // 'Hello World'
/**
 * @description:将字符串转换为小驼峰
 * @param       {type} str
 * @param       {type} param2
 * @return      {type}
 */
const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
console.log("🚀 ~ file: index.js:41 ~ :", toCamelCase("background-color")); // backgroundColor
/**
 * @description:删除数组中的重复值
 * @return      {type}
 */
const removeDuplicates = (arr) => [...new Set(arr)];
console.log("🚀 ~ file: index.js:47 ~ :", removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]

/**
 * @description:铺平一个数组
 * @param       {type} arr
 * @return      {type}
 */
const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);
console.log("🚀 ~ file: index.js:55 ~ :", flat(["cat", ["lion", "tiger"]])); // ['cat', 'lion', 'tiger']

/**
 * @description:移除数组中的假值
 * @param       {type} arr
 * @return      {type}
 */
const removeFalsy = (arr) => arr.filter(Boolean);
console.log("🚀 ~ file: index.js:64 ~ :", removeFalsy([0, "a string", "", NaN, true, 5, undefined, "another string", false]));
// ['a string', true, 5, 'another string']

/**
 * @description:确认一个数字是奇数还是偶数
 * @return      {type}
 */
const isEven = (num) => num % 2 === 0;
console.log("🚀 ~ file: index.js:72 ~ :", isEven(2)); // true

/**
 * @description: 获取两个数字之间的随机数;
 * @param       {type} min
 * @param       {type} max
 * @return      {type}
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log("🚀 ~ file: index.js:80 ~:", random(1, 50));

/**
 * @description:计算平均值;
 * @param       {array} args
 * @return      {type}
 */
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
console.log("🚀 ~ file: index.js:82 ~ :", average(1, 2, 3, 4, 5));


/**
 * 将数字四舍五入到指定的小数位数
 *
 * @param n 要四舍五入的数字
 * @param d 小数位数，即要四舍五入到的小数点后的位数
 * @returns 四舍五入后的数字
 */
const round = (n: number, d: number): number => {
  // 计算小数位的因子，用于四舍五入计算
  const factor = Math.pow(10, d);
  // 将数字乘以因子，四舍五入后除以因子，以达到指定小数位数的四舍五入效果
  return Math.round(n * factor) / factor;
};
round(1.005, 2); //1.01
round(1.555, 2); //1.56

/**
 * @description: 计算两个日期之间天数;
 * @param       {type} date
 * @param       {type} otherDate
 * @return      {type}
 */
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
console.log("🚀 ~ file: index.js:89 ~ :", diffDays(new Date("2021-11-3"), new Date("2022-2-1")));

/**
 * @description: 从日期中获取是一年中的哪一天;
 * @param       {Date} date - 输入的日期对象
 * @return      {number} - 返回一年中的第几天
 */
const dayOfYear = (date: Date) => Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
console.log("🚀 ~ file: index.js:92 ~ :", dayOfYear(new Date()));

/**
 * @description: 获取一个随机的颜色值;
 * @return      {type}
 */
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;
console.log("🚀 ~ file: index.js:123 ~ :", randomColor());

/**
 * @description:将RGB颜色转换为十六进制颜色值;
 * @param       {number} r
 * @param       {number} g
 * @param       {number} b
 * @return      {string}
 */
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
console.log("🚀 ~ file: index.js:133 ~ :", rgbToHex(255, 255, 255));

/**
 * @description:清除所有的cookie;
 * @return      {type}
 */
const clearCookies = () => document.cookie.split(";").forEach((c) => (document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));

/**
 * @description:检测黑暗模式;
 * @return      {type}
 */
// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

/**
 * @description: 暂停一会
 * @param       {number} time
 * @return      {type}
 */
const pause = (time) => new Promise((resolve) => setTimeout(resolve, time));

// 身份证号校验
// 身份证号是中国公民身份的重要标识，其结构和校验规则相对复杂。一个有效的18位身份证号码由以下部分组成：
// 前6位：地址码，表示公民的常住户口所在地的行政区划代码。
// 第7至14位：出生日期码，表示公民的出生年月日，格式为YYYYMMDD。
// 第15至17位：顺序码，表示在同一地址码所标识的区域范围内，对同年、同月、同日出生的人编定的顺序号，奇数分配给男性，偶数分配给女性。
// 第18位：校验码，通过前17位数字计算得出，用于验证整个身份证号码的有效性。
// 校验规则
// 地址码校验：前6位数字应为有效的行政区划代码。
// 出生日期校验：第7至14位应为有效的日期格式，即年份在合理范围内（如1900-2099），月份在1-12之间，日期在1-31之间，并且符合各个月份的实际天数。
// 校验码计算：
// 将前17位数字分别乘以不同的系数，系数从左到右依次为：7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2。
// 将上述乘积相加，得到一个总和。
// 将总和除以11，取余数。
// 根据余数查找对应的校验码，余数与校验码的对应关系如下：
// 0 -> 1
// 1 -> 0
// 2 -> X
// 3 -> 9
// 4 -> 8
// 5 -> 7
// 6 -> 6
// 7 -> 5
// 8 -> 4
// 9 -> 3
// 10 -> 2
// TypeScript 实现
function isValidIdCard(idCard: string): boolean {
	if (idCard.length !== 18) return false;

	const weightFactors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	const checkCodes = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];

	// 地址码校验（这里假设所有地址码都是有效的）
	const addressCode = idCard.substring(0, 6);
	if (!/^\d{6}$/.test(addressCode)) return false;

	// 出生日期校验
	const birthDate = idCard.substring(6, 14);
	const year = parseInt(birthDate.substring(0, 4), 10);
	const month = parseInt(birthDate.substring(4, 6), 10);
	const day = parseInt(birthDate.substring(6, 8), 10);

	if (year < 1900 || year > 2099) return false;
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;

	// 校验日期是否有效
	const date = new Date(year, month - 1, day);
	if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) return false;

	// 计算校验码
	let sum = 0;
	for (let i = 0; i < 17; i++) {
		sum += parseInt(idCard[i], 10) * weightFactors[i];
	}
	const checkCodeIndex = sum % 11;
	const calculatedCheckCode = checkCodes[checkCodeIndex];

	// 比较计算出的校验码和实际的校验码
	return calculatedCheckCode === idCard[17].toUpperCase();
}

// 测试
console.log(isValidIdCard("152201199805241025")); // true
// console.log(isValidIdCard("110105194912310020")); // false
