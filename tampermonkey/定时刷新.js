// ==UserScript==
// @name         定时刷新
// @namespace    http://tampermonkey.net/
// @resource 			D:\Users\Git\show\tampermonkey\定时刷新.js
// @version      0.0.2
// @description  定时刷新脚本
// @author       zj
// @match        https://h5performance.tool.bestpay.net/mpaas/*
// @match        https://*.baidu.com/*
// @grant        none
// @compatible   chrome
// @license      GPL-3.0
// ==/UserScript==

(function () {
	'use strict';
	const time = 1000;
	// const time = 1000 * 60 * 10;
	setTimeout(function () {
		location.reload();
	}, time);
	console.log('🚀 ~ file: 定时刷新.js:22 ~ time:', time)
	console.log('🚀 ~ file: 定时刷新.js:22 ~ time:', time)
	console.log('🚀 ~ file: 定时刷新.js:30 ~ time:', time);

	console.log('🚀 ~ file: App.vue:13 ~ setTimeout:');
})();
