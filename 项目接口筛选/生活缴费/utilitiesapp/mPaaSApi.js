/*
apiFox:true,								是否开启ApiFox去mock数据
apiFoxYun: true 							是否开启apiFox云端mock
apiFoxID:'/11324507',						ApiFox数据mock路径

apiExplain:									接口说明
url:										接口路径
method: 'POST,	 							方法
mock: false,								是否mock数据
isSharebillService: false,					使用的是mapi 还是gapi 如果使用gapi必须设置 gapiStr 以及对应的agreeId属性名
hideTipOnError: true,
gapiStr: 'sharebillsAgreeId',
hasResultWrap: true 						2.0是否配置了透传（即开放接口返回的result里是真正接口返回的内容，包success、result...）
isRisk  									是否过风控
isEncrypt									上行加密
isAesEncrypt								上下行加密
noApi										baseUrl不同
 */
exports.mPaaSApi = [
	{
		name: 'adList',
		url: '/mapi/adList',
		autoLogin: true,
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'appBankLogoQuery',
		apiExplain: '查询银行图标',
		url: '/gapi/electacc/product/appBankLogoQuery',
		autoLogin: true,
		gapiStr: 'bankqueryAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'checkInviteCode',
		apiExplain: '邀请码验证接口',
		url: '/mapi/billcenter/checkInviteCode',
		autoLogin: true,
		isSharebillService: false,
		mock: false,
		showLoading: true
	},
	{
		name: 'closeAutoPayment',
		apiExplain: '关闭自动代缴',
		url: '/mapi/billcenter/closeAutoPayment',
		autoLogin: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'closeBalWarn',
		apiExplain: '关闭余额提醒',
		url: '/mapi/billcenter/closeBalWarn',
		autoLogin: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'deleteBill',
		url: '/mapi/sharebills-service/api/deleteBillAcctNo/V1',
		autoLogin: true,
		isSharebillService: true,
		mock: false
	},
	{
		name: 'equityOrder',
		apiExplain: '生活+权益代扣接口',
		url: '/gapi/handyservice/marketing/liveequity/order',
		autoLogin: true,
		isEncrypt: true,
		gapiStr: 'handyserviceAgreeId',
		isSharebillService: false,
		mock: false
	},
	{
		name: 'festivalShow',
		apiExplain: '春节红包展示查询接口',
		url: '/gapi/handyservice/marketing/festivalShow',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'getActivities',
		url: '/gapi/livelihood/product/getActivities',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'getBusitype',
		apiExplain: '用于查询定位城市所支持的业务类型',
		url: '/gapi/livelihood/product/getBusitype/v2',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'getNotice',
		url: '/gapi/livelihood/product/getNotice',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'getReward',
		apiExplain: '红包-领取奖励接口',
		url: '/mapi/redbag/missionOutput/getReward',
		autoLogin: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'getVoucherList',
		apiExplain: '获取家庭专区商城券列表',
		url: '/gapi/growth/family/getVoucherList',
		autoLogin: true,
		gapiStr: 'familyAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'grantTalentRewards',
		apiExplain: '惠星发放接口',
		url: '/gapi/handyservice/marketing/grantTalentRewards',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'history',
		apiExplain: '根据用户订单号查询缴费记录',
		url: '/mapi/sharebills-service/api/queryBillTxnInfo/V1',
		autoLogin: true,
		isSharebillService: true,
		mock: false,
		showLoading: true
	},
	{
		name: 'isAllow',
		apiExplain: '生活+权益判断是否允许用户购买',
		url: '/gapi/handyservice/marketing/isAllow',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'modifyAutoPayment',
		apiExplain: '修改定时代缴服务',
		url: '/mapi/billcenter/modifyAutoPayment',
		autoLogin: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'notBillOrgRecord',
		apiExplain: '无交费单位用户反馈新增记录',
		url: '/gapi/minsheng/livelihood/notBillOrgRecord',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		isSharebillService: false,
		method: 'POST'
	},
	{
		name: 'obtainPopupPrize',
		apiExplain: '弹窗奖励领取接口',
		url: '/mapi/handyservice/marketing/obtainPopupPrize',
		autoLogin: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'openAutoPayment',
		apiExplain: '定时代缴开通',
		url: '/mapi/billcenter/openAutoPayment',
		autoLogin: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'openBalWarn',
		apiExplain: '开通余额提醒',
		url: '/mapi/billcenter/openBalWarn',
		isSharebillService: false,
		mock: false,
		autoLogin: true,
		showLoading: true
	},
	{
		name: 'queryAll',
		url: '/gapi/livelihood/product/queryAll',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryArea',
		apiExplain: '查询省市接口',
		url: '/mapi/sharebills-service/api/getBusiCities/V1',
		isSharebillService: true,
		mock: false,
		autoLogin: true
	},
	{
		name: 'queryAutoPaymentDetail',
		apiExplain: '定时代缴已开通用户信息查询',
		url: '/mapi/billcenter/queryAutoPaymentDetail',
		isSharebillService: false,
		mock: false,
		autoLogin: true
	},
	{
		name: 'queryBill',
		apiExplain: '用户查询账单查询',
		url: '/gapi/livelihood/product/queryOwnBill',
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		isSharebillService: false,
		mock: false,
		autoLogin: true
	},
	{
		name: 'queryBillInfo',
		apiExplain: '订单号查询缴费记录',
		url: '/mapi/sharebills-service/api/queryBillTxnInfoByOrderNo',
		autoLogin: true,
		hideTipOnError: true,
		isSharebillService: true,
		mock: false
	},
	{
		name: 'queryFavorable',
		apiExplain: '查询优惠接口',
		url: 'payassistant-client?method=queryTradeInternalOrder',
		autoLogin: true,
		isSharebillService: true,
		noApi: true
	},
	{
		name: 'queryFunds',
		apiExplain: '查询资金源',
		url: '/gapi/handyservice/marketing/liveequity/queryFunds',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		isAesEncrypt: true,
		isSharebillService: false,
		mock: false,
		showLoading: true
	},
	{
		name: 'queryHistoryBill',
		apiExplain: '查询所有的历史户号',
		url: '/gapi/livelihood/product/queryBillAcctNo',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryLiveActivity',
		apiExplain: '查询本地配置活动接口',
		url: '/gapi/handyservice/live/queryLiveActivity',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryMarketScore',
		apiExplain: '惠星查询接口',
		url: '/gapi/redbag/scoremarket/queryMarketScore',
		autoLogin: true,
		isEncrypt: true,
		gapiStr: 'starNoAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryMarktingActivity',
		apiExplain: '查询营销活动接口',
		url: '/gapi/handyservice/live/queryMarktingActivity',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryMinusEquityRights',
		apiExplain: '查询理财优惠券',
		url: '/gapi/handyservice/marketing/queryMinusEquityRights',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryMobileH',
		apiExplain: '查询运营商归属地接口',
		url: '/gapi/queryMobileH',
		autoLogin: true,
		gapiStr: 'queryMobilId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryOrder',
		apiExplain: '用户下单',
		url: '/gapi/livelihood/product/order',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		isSharebillService: false,
		mock: false,
		showLoading: true
	},
	{
		name: 'queryOrg',
		apiExplain: '查询缴费单位详细信息',
		url: '/mapi/sharebills-service/api/getOrgByOrgCode/V1',
		autoLogin: true,
		isSharebillService: true,
		mock: false
	},
	{
		name: 'queryOrgList',
		apiExplain: '根据业务类型查询缴费单位列表',
		url: '/gapi/livelihood/product/getOrgsByBusiType',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		isRisk: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryOutPutMarketProduct',
		apiExplain: '惠星兑换列表',
		url: '/gapi/redbag/scoremarket/queryOutPutMarketProduct',
		autoLogin: true,
		isEncrypt: true,
		gapiStr: 'starAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryOwnBill4Url',
		url: '/gapi/livelihood/product/queryOwnBill4Url',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'sharebillsAgreeId',
		hasResultWrap: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryPopupInfo',
		apiExplain: '弹窗查询接口',
		url: '/gapi/handyservice/marketing/queryPopupInfo',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryRedisSwitch',
		apiExplain: '查询redis接口',
		url: '/gapi/handyservice/live/queryRedisSwitch',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'querySMS',
		apiExplain: '获取短信通知接口是开通短信通知',
		url: '/mapi/sharebills-service/api/queryAlertsSMS/V1',
		autoLogin: true,
		isSharebillService: true,
		mock: false
	},
	{
		name: 'queryTheMonthTaskListForLifePay',
		apiExplain: '任务制获取任务列表接口',
		url: '/gapi/redbag/missionOutput/queryTheMonthTaskListForLifePay',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'redBagAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'queryVoucher',
		apiExplain: '户号查询页优惠券信息',
		url: '/gapi/handyservice/marketing/queryVoucher',
		autoLogin: true,
		isAesEncrypt: true,
		gapiStr: 'handyserviceAgreeId',
		method: 'POST'
	},
	{
		name: 'sgccBindAcctNO',
		apiExplain: '用于未在天津电订阅的用户去订阅',
		url: '/mapi/sharebills-service/api/sgccBindAcctNO',
		autoLogin: true,
		isSharebillService: true,
		mock: false
	},
	{
		name: 'sgccPreQuery',
		apiExplain: '北京国电下单前先进行预查询',
		url: '/mapi/sharebills-service/api/sgccPreQuery',
		autoLogin: true,
		isSharebillService: true,
		mock: false
	},
	{
		name: 'talentShow',
		apiExplain: '翼达人活动展示查询接口',
		url: '/gapi/handyservice/marketing/talentShow',
		autoLogin: true,
		gapiStr: 'handyserviceAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'tradeOrderClose',
		apiExplain: '取消支付，关闭交易',
		url: '/gapi/sharebills-service/api/tradeOrderClose',
		autoLogin: true,
		gapiStr: 'sharebillsAgreeId',
		hideTipOnError: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'updateBalWarn',
		apiExplain: '修改余额提醒配置',
		url: '/mapi/billcenter/updateBalWarn',
		autoLogin: true,
		isSharebillService: false,
		mock: false
	},
	{
		name: 'updateMarkAndDate',
		url: '/mapi/sharebills-service/api/updateBillAcctNo/V1',
		autoLogin: true,
		isSharebillService: true,
		mock: false
	},
	{
		name: 'queryResultsPageBanner',
		apiExplain: '查询标准收银台结果页banner',
		url: '/gapi/appclient/queryResultsPageBanner',
		gapiStr: 'starNoAgreeId',
		isEncrypt: true
	},
	{
		name: 'starReceiveQuery',
		apiExplain: '结果页查询惠星',
		url: '/gapi/handyservice/marketing/starReceiveQuery',
		timeout: 600,
		gapiStr: 'handyserviceAgreeId',
		isEncrypt: true
	},
	{
		name: 'pasStarReceive',
		apiExplain: '结果页领取惠星',
		url: '/gapi/handyservice/marketing/pasStarReceive',
		gapiStr: 'handyserviceAgreeId',
		isEncrypt: true
	},
	{
		name: 'queryForGetVoucher',
		apiExplain: '领券接口',
		url: '/gapi/appClient/receiveCoupon',
		gapiStr: 'coupon_agreeId',
		isEncrypt: true
	},
	{
		name: 'queryCouponsStatus',
		apiExplain: '查券接口',
		url: '/gapi/redbag/collectCoupons/queryCouponsStatus',
		gapiStr: 'redBagAgreeId',
		isEncrypt: true
	}
];
