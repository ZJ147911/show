/**
 * @Author       :醉人心
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-07-08 14:42:06
 * @Description  :
 * @FilePath     :\项目展示\vConsole\mPaaS.js
 * @LastEditors  :醉人心
 * @LastEditTime :2023-07-08 14:42:06
 */
const originalConsole = {
	log: null,
	info: null,
	warn: null,
	error: null,
	debug: null
};

function wrapConsole(callback) {
	for (let method in console) {
		const original = console[method];
		console[method] = (...args) => {
			if (callback && typeof callback === 'function') {
				callback.call(null, method, ...args);
			}
			return original.apply(console, args);
		};
		originalConsole[method] = original;
	}
}

function debounce(fn, wait, prefn) {
	var timeout;
	return function () {
		var ctx = this,
			args = arguments;
		clearTimeout(timeout);
		if (typeof prefn === 'function') {
			prefn.apply(ctx, args);
		}
		timeout = setTimeout(function () {
			fn.apply(ctx, args);
		}, wait);
	};
}

let callback = debounce(
	() => {},
	1000,
	(type, ...args) => {
		if (args && args[0] && /^(--)|(🚀)/.test(args[0])) {
			let tmpstr = args.map((item) => JSON.stringify(item)).join('\n');
			console.log('🚀 ~ file: a.js:87 ~ created ~ tmpstr:', tmpstr);
			axios.post(
				args[0],
				{
					params: tmpstr,
					options: args[0]
				},
				{
					baseURL: `http://${process.env.VUE_APP_IP}:3000/ideConsole/`
				}
			);
		}
	}
);