// ==UserScript==
// @name         定时刷新
// @namespace    http://tampermonkey.net/
// @updateURL    https://gitee.com/zj147/show/raw/zj/tampermonkey/timeRefresh.js
// @downloadURL  https://gitee.com/zj147/show/raw/zj/tampermonkey/timeRefresh.js
// @version      0.0.1
// @description  定时刷新脚本
// @author       zj
// @match        https://h5performance.tool.bestpay.net/mpaas/*
// @match        https://*.baidu.com/*
// @match        https://yops.tool.bestpay.net/*
// @match        https://sso.tool.bestpay.net//*
// @match        https://*.bestpay.com.cn/*
// @match        https://h5.test.bestpay.net/*
// @grant        none
// @compatible   chrome
// @license      GPL-3.0
// ==/UserScript==

(function () {
	'use strict';
	const dateNow = () => {
		const time = new Date();
		return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
	};
	// const time = 1000;
	const time = 1000 * 60 * 10;
	const reload = () => {
		console.log('🚀 ~ file: 定时刷新.js:21 ~ time:', dateNow(), time);
		setTimeout(function () {
			location.reload();
		}, time);
	};
	reload();
})();
