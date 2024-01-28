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
console.log('🚀 ~ file: index.js:17 ~  :', randomString()); // gi1qtdego0b
/**
 * @description:转义HTML特殊字符
 * @param       {type} str
 * @return      {type}
 */
const escape = (str) => str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
console.log('🚀 ~ file: index.js:25 ~ :', escape('<div class="medium">Hi Medium.</div>'));
// &lt;div class=&quot;medium&quot;&gt;Hi Medium.&lt;/div&gt
/**
 * @description:单词首字母大写
 * @param       {type} str
 * @param       {type} param2
 * @return      {type}
 */
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
console.log('🚀 ~ file: index.js:34 ~ :', uppercaseWords('hello world')); // 'Hello World'
/**
 * @description:将字符串转换为小驼峰
 * @param       {type} str
 * @param       {type} param2
 * @return      {type}
 */
const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
console.log('🚀 ~ file: index.js:41 ~ :', toCamelCase('background-color')); // backgroundColor
/**
 * @description:删除数组中的重复值
 * @return      {type}
 */
const removeDuplicates = (arr) => [...new Set(arr)];
console.log('🚀 ~ file: index.js:47 ~ :', removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]

/**
 * @description:铺平一个数组
 * @param       {type} arr
 * @return      {type}
 */
const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);
console.log('🚀 ~ file: index.js:55 ~ :', flat(['cat', ['lion', 'tiger']])); // ['cat', 'lion', 'tiger']

/**
 * @description:移除数组中的假值
 * @param       {type} arr
 * @return      {type}
 */
const removeFalsy = (arr) => arr.filter(Boolean);
console.log('🚀 ~ file: index.js:64 ~ :', removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]));
// ['a string', true, 5, 'another string']

/**
 * @description:确认一个数字是奇数还是偶数
 * @return      {type}
 */
const isEven = (num) => num % 2 === 0;
console.log('🚀 ~ file: index.js:72 ~ :', isEven(2)); // true

/**
 * @description: 获取两个数字之间的随机数;
 * @param       {type} min
 * @param       {type} max
 * @return      {type}
 */
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log('🚀 ~ file: index.js:80 ~:', random(1, 50))

/**
 * @description:计算平均值;
 * @param       {array} args
 * @return      {type}
 */
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
console.log('🚀 ~ file: index.js:82 ~ :', average(1, 2, 3, 4, 5))


/**
 * @description: 将数字截断到固定的小数点;
 * @param       {type} n
 * @param       {type} d
 * @return      {type}
 */
const round = (n, d) => Number(Math.round(n + 'e' + d) + 'e-' + d);
round(1.005, 2); //1.01
round(1.555, 2); //1.56

/**
 * @description: 计算两个日期之间天数;
 * @param       {type} date
 * @param       {type} otherDate
 * @return      {type}
 */
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
console.log('🚀 ~ file: index.js:89 ~ :', diffDays(new Date('2021-11-3'), new Date('2022-2-1')))

/**
 * @description: 从日期中获取是一年中的哪一天;
 * @param       {type} date
 * @return      {type}
 */
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
console.log('🚀 ~ file: index.js:92 ~ :', dayOfYear(new Date()))

/**
 * @description: 获取一个随机的颜色值;
 * @return      {type}
 */
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
console.log('🚀 ~ file: index.js:123 ~ :', randomColor())

/**
 * @description:将RGB颜色转换为十六进制颜色值;
 * @param       {number} r
 * @param       {number} g
 * @param       {number} b
 * @return      {string}
 */
const rgbToHex = (r, g, b) => '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
console.log('🚀 ~ file: index.js:133 ~ :', rgbToHex(255, 255, 255))


/**
 * @description:清除所有的cookie;
 * @return      {type}
 */
const clearCookies = () =>
	document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));


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
const fn = async () => {
	await pause(1000);
	console.log('fatfish'); // 1s later
};
fn();
