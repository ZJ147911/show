const { H5API } = require('./h5api');
const { mPaaSApi } = require('./mPaaSApi');
console.log('🚀 ~ file: 生活.js ~ line 3 ~ mPaaSApi', mPaaSApi)
const fs = require('fs');
let api = [];
let mApi = [];

H5API.forEach((item) => {
	if (item.isSharebillService) {
		if (item.noApi) {
			item.url = item.urlSuffix;
		} else {
			item.url = `/mapi/sharebills-service/api/${item.urlSuffix}`;
			api.push({
				name: item.name,
				url: item.url,
				apiExplain: item.apiExplain || ''
			});
		}
	} else {
		if (item.gapiStr) {
			item.url = `/gapi/${item.urlSuffix}`;
			api.push({
				name: item.name,
				url: item.url,
				apiExplain: item.apiExplain || ''
			});
		} else {
			item.url = `/mapi/${item.urlSuffix}`;
			api.push({
				name: item.name,
				url: item.url,
				apiExplain: item.apiExplain || ''
			});
		}
	}
});

mPaaSApi.forEach((item) => {
	mApi.push({
		name: item.name,
		url: item.url,
		apiExplain: item.apiExplain || ''
	});
});

fs.writeFileSync('./api.json', JSON.stringify(api));
fs.writeFileSync('./mapi.json', JSON.stringify(api));
