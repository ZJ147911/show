/**
 * @Author       :赵军
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-08-11 10:00:33
 * @Description  :
 * @FilePath     :\show\接口文件处理\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2023-08-14 13:44:13
 */
const { apiList } = require('./json');

const apiEmit = (apiList) => {
	console.log('🚀', apiList.length);
	// let api = [];
	// apiList.forEach((item) => {
	// 	// const res = mPaaSApi.find((it) => {
	// 	// 	return it.name == item.name;
	// 	// });
	// 	api.push({
	// 		name: item.name,
	// 		apiExplain: item.apiExplain,
	// 		url: item.url || item.urlSuffix || '',
	// 		mgs: item.operationType || ''
	// 		// mgs: item.operationType ||res.operationType|| ''
	// 	});
	// });
	// console.log('🚀 ~ file: 生活.js:48 ~ apiEmit ~ api:', api);

  let api = {

  }
  apiList.forEach(item => {
    console.log('🚀 ~ file: index.js:33 ~ apiEmit ~ item:', item.cnName)
    api[item.name]=item.type
  });
  console.log('🚀 ~ file: index.js:30 ~ apiEmit ~ api:', api)
}

// apiEmit(apiList)

const insert=(newValue)=> {
			const value = newValue;
			let date = new Date();
			let mon = date.getMonth() + 1;
			mon = mon < 10 ? `0${mon}` : mon;
			date = `${date.getFullYear()}-${mon}`;
			const resultDate = newValue.createDate;
			const weekDate = new Date(resultDate.substr(0, 4), resultDate.substr(5, 2) - 1, resultDate.substr(8, 2));
			const WEEKDATE_MAP = {
				0: '周日',
				1: '周一',
				2: '周二',
				3: '周三',
				4: '周四',
				5: '周五',
				6: '周六'
			};
			value.weekDate = WEEKDATE_MAP[weekDate.getDay()] || '周一';

			const flag = value.createDate.substr(0, 7);
			if (this.lastSign !== flag) {
				this.lastSign = flag;
				if (date === flag) {
					console.log('1111');
					value.sign = '本';
				} else {
					// const yearDate = new Date();
					// let signYearMon = `${weekDate.getFullYear()}年${mon}月`;
					// if (yearDate.getFullYear() === weekDate.getFullYear()) {
					//     signYearMon = `${mon}月`;
					//     console.log(9999999999999, signYearMon);
					// }
					// value.sign = signYearMon;
					const last = this.lastSign.substr(0, 4);
					const now = flag.substr(0, 4);
					if (last === now) {
						value.sign = flag.substr(5);
					} else {
						value.sign = flag.substr(0, 7);
					}
				}
			}
			this.lastSign = flag;

			if (value.payFeeDesc === '国网运城供电公司') {
				value.isGD = true;
			} else {
				value.isGD = value.payFeeDesc.indexOf('国网山西省') > -1;
			}

			console.log('🚀 ~ file: index.js:92 ~ insert ~ value:', value)
			// return value;
}
	insert({
    "createDate": "2023-08-10 00:02:57",
    "updateDate": "2023-08-10 00:03:21",
    "paymentType": "0",
    "billOrgName": "卢氏县电业局",
    "orderAmount": 10,
    "payFeeDesc": "卢氏县电业局",
    "payStatus": "S0S",
    "actualPayAmt": 10,
    "bpbpOrderNo": "20230810000257865494",
    "bizStatus": "S0C",
    "billNo": "7610146109",
    "discountAmt": 0,
    "bizType": "2",
    "prePaymentMark": "true",
    "orderStatus": "S0C"
})