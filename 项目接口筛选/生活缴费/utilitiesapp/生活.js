const { H5API } = require('./h5api');
console.log("🚀 ~ file: 生活.js:2 ~ H5API:", H5API);
// const { mPaaSApi } = require('./mPaaSApi');
// console.log('🚀 ~ file: 生活.js ~ line 3 ~ mPaaSApi', mPaaSApi)
const fs = require('fs');
let api = {};
// let mApi = [];
const list=Object.keys(H5API)
list.forEach((it) => {
	let item=H5API[it]
	if (item.isSharebillService) {
		if (item.noApi) {
			item.url = item.urlSuffix;
		} else {
			item.url = `/mapi/sharebills-service/api/${item.urlSuffix}`;
			// api.push({
			// 	name: item.name,
			// 	url: item.url,
			// 	apiExplain: item.apiExplain || ''
			// });
		}
	} else {
		if (item.gapiStr) {
			item.url = `/gapi/${item.urlSuffix}`;
			// api.push({
			// 	name: item.name,
			// 	url: item.url,
			// 	apiExplain: item.apiExplain || ''
			// });
		} else {
			item.url = `/mapi/${item.urlSuffix}`;
			// api.push({
			// 	name: item.name,
			// 	url: item.url,
			// 	apiExplain: item.apiExplain || ''
			// });
		}
	}
	api[it]=item;
});

	console.log("🚀 ~ file: 生活.js:40 ~ list.forEach ~ api:", api);
// mPaaSApi.forEach((item) => {
// 	mApi.push({
// 		name: item.name,
// 		url: item.url,
// 		apiExplain: item.apiExplain || ''
// 	});
// });

fs.writeFileSync('./api.json', JSON.stringify(api));
// fs.writeFileSync('./mapi.json', JSON.stringify(api));
