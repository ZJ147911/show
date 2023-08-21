exports.utilitiesApi = [
	{
		name: 'queryArea',
		apiExplain: '查询城市',
		urlSuffix: 'gapi/ILivelihoodPublicService/getBusiCities/v2',
		gapiStr: 'sharebillsAgreeId',
		encryptTech: true,
		isMock: false,
		mockUrl: 'mockdata/queryArea.json'
	},
	{
		name: 'queryOrgList',
		apiExplain: '根据业务类型查询缴费单位列表',
		urlSuffix: 'gapi/ILivelihoodPublicService/getOrgsByBusiType/v2',
		isMock: false,
		gapiStr: 'sharebillsAgreeId',
		encryptTech: true,
		mockUrl: 'mockdata/queryOrgList.json'
	},

	{
		name: 'queryOrg',
		apiExplain: '查询缴费单位详细信息',
		urlSuffix: 'gapi/ILivelihoodPublicService/getOrgByOrgCode/v2',
		isMock: false,
		gapiStr: 'sharebillsAgreeId',
		encryptTech: true,
		mockUrl: 'mockdata/queryOrg.json'
	},
	{
		name: 'queryBill',
		apiExplain: '用户查询账单查询',
		urlSuffix: 'gapi/livelihood/public/queryOwnBill',
		isMock: false,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true,
		toastOpen: true
	},
	{
		name: 'queryOrder',
		apiExplain: '用户下单',
		urlSuffix: 'gapi/livelihood/public/order',
		isMock: false,
		mockUrl: 'mockdata/order.json',
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true,
		toastOpen: true
	},
	{
		name: 'queryPayType',
		apiExplain: '查询redis接口',
		operationType: 'com.bestpay.handyservice.marketing.api.live.ILiveGdActivityService.queryRedisSwitch',
		isMgs: true,
		urlSuffix: 'gapi/handyservice/live/queryRedisSwitch/v2',
		encryptAll: true,
		isMock: false,
		mockUrl: 'mockdata/order.json',
		gapiStr: 'newPayAgreeId'
	},
	// 微信聚合支付
	{
		name: 'aggregationRechargeOrderForMall',
		apiExplain: '微信聚合支付',
		operationType: 'com.bestpay.livelihood.product.api.ILivelihoodPublicService.aggregationRechargeOrderForMall',
		isMgs: true,
		isMock: false,
		mockUrl: 'mockdata/order.json',
		gapiStr: 'newPayAgreeId'
	},
	{
		name: 'queryBanner',
		apiExplain: '查询本地配置活动接口',
		urlSuffix: 'gapi/handyservice/live/queryLiveActivity/v2',
		encryptAll: true,
		isMock: false,
		mockUrl: 'mockdata/order.json',
		gapiStr: 'newPayAgreeId'
	},
	{
		name: 'newPayReq',
		apiExplain: '水电煤聚合支付下单接口(外放)',
		urlSuffix: 'gapi/livelihood/public/aggregationRechargeOrder',
		isMock: false,
		mockUrl: 'mockdata/order.json',
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'queryHistoryBill',
		apiExplain: '查询所有的历史户号',
		operationType: 'com.bestpay.livelihood.product.api.ILivelihoodProdService2Client.queryBillAcctNo',
		isMgs: true,
		urlSuffix: 'gapi/ILivelihoodPublicService/queryBillAcctNo/v2',
		isMock: false,
		gapiStr: 'sharebillsAgreeId',
		encryptTech: true,
		toastOpen: true,
		toastMax: 1,
		mockUrl: 'mockdata/queryBillAcctNo.json'
	},
	{
		name: 'history',
		apiExplain: '根据用户订单号查询缴费记录',
		urlSuffix: 'gapi/ILivelihoodPublicService/queryBillTxnInfo/v2',
		isMock: false,
		gapiStr: 'sharebillsAgreeId',
		encryptTech: true,
		mockUrl: 'mockdata/payhistory.json'
	},
	{ name: 'sgccPreQuery', apiExplain: '北京国电下单前先进行预查询', urlSuffix: 'mapi/ILivelihoodPublicService/sgccPreQuery', isMock: false },
	{
		name: 'queryRealNameStatus',
		apiExplain: ' 查询实名状态',
		urlSuffix: 'roulette/externalservice/queryRealNameStatus',
		isMock: false,
		gapiStr: 'queryRealAgreeId'
	},
	{
		name: 'sendVerifyCode',
		operationType: 'com.bestpay.livelihood.product.api.ILivelihoodProdService2Client.sendVerifyCode',
		isMgs: true,
		apiExplain: '发送短信验证码',
		isMock: false
	},
	{
		name: 'authVerifyCode',
		operationType: 'com.bestpay.livelihood.product.api.ILivelihoodProdService2Client.authVerifyCode',
		isMgs: true,
		apiExplain: '校验短信验证码',
		isMock: false
	},
	{
		name: 'queryMobileH',
		apiExplain: '查询运营商归属地接口',
		encryptTech: true,
		gapiStr: 'queryMobilId',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		method: 'POST',
		operationType: 'com.bestpay.handyservice.communication.product.service.api.basic.IBasicService.queryPhoneAttribution',
		urlSuffix: 'gapi/handyservice/communication/queryPhoneAttribution'
	},
	{
		name: 'queryPopupInfo',
		operationType: 'com.bestpay.handyservice.marketing.api.popup.IPopupActivityService.queryPopupInfo',
		isMgs: true,
		urlSuffix: 'gapi/handyservice/marketing/queryPopupInfo',
		apiExplain: '弹窗查询接口',
		gapiStr: 'newPayAgreeId',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		method: 'POST'
	},
	{
		name: 'obtainPopupPrize',
		apiExplain: '弹窗奖励领取接口',
		isMock: false,
		isSharebillService: false,
		method: 'POST',
		urlSuffix: 'mapi/handyservice/marketing/obtainPopupPrize'
	}
];
