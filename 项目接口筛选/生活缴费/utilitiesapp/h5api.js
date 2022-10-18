exports.H5API = [
	{
		name: 'queryArea',
		apiExplain: '查询省市接口',
		urlSuffix: 'livelihood/product/getBusiCities',
		method: 'POST',
		isMock: false,
		cache: false,
		isSharebillService: false,
		encryptTech: true,
		gapiStr: 'sharebillsAgreeId',
		mockUrl: 'mockdata/queryArea.json'
	},
	{
		name: 'queryOrg',
		apiExplain: '查询缴费单位详细信息',
		urlSuffix: 'livelihood/product/getOrgByOrgCode',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		encryptTech: true,
		gapiStr: 'sharebillsAgreeId',
		mockUrl: 'mockdata/queryOrg.json'
	},
	{
		name: 'updateMarkAndDate',
		apiExplain: '修改备注名',
		urlSuffix: 'updateBillAcctNo/V1',
		method: 'POST',
		isMock: false,
		isSharebillService: true,
		mockUrl: 'mockdata/ubillNo.json'
	},
	{
		name: 'deleteBill',
		apiExplain: '删除单条历史账单',
		urlSuffix: 'deleteBillAcctNo/V1',
		method: 'POST',
		isMock: false,
		isSharebillService: true,
		mockUrl: 'mockdata/dbillNo.json'
	},
	{
		name: 'adList',
		urlSuffix: 'adList',
		method: 'POST',
		isSharebillService: false,
		isMock: false,
		hideTipOnError: true,
		mockUrl: 'mockdata/adList.json'
	},
	{
		name: 'history',
		apiExplain: '根据用户订单号查询缴费记录',
		urlSuffix: 'livelihood/product/queryBillTxnInfo',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		encryptTech: true,
		gapiStr: 'sharebillsAgreeId',
		mockUrl: 'mockdata/payhistory.json'
	},
	{
		name: 'querySMS',
		apiExplain: '获取短信通知接口是开通短信通知',
		urlSuffix: 'queryAlertsSMS/V1',
		method: 'POST',
		isMock: false,
		isSharebillService: true,
		mockUrl: 'mockdata/querySMS.json'
	},
	{
		name: 'queryBillInfo',
		apiExplain: '订单号查询缴费记录',
		urlSuffix: 'livelihood/product/queryBillTxnInfoByOrderNo',
		method: 'POST',
		isMock: false,
		hideTipOnError: true,
		isSharebillService: false,
		encryptTech: true,
		gapiStr: 'sharebillsAgreeId'
	},
	{
		name: 'sgccPreQuery',
		apiExplain: '北京国电下单前先进行预查询',
		urlSuffix: 'sgccPreQuery',
		method: 'POST',
		isMock: false,
		isSharebillService: true
	},
	{
		name: 'sgccBindAcctNO',
		apiExplain: '用于未在天津电订阅的用户去订阅',
		urlSuffix: 'sgccBindAcctNO',
		method: 'POST',
		isMock: false,
		isSharebillService: true
	},
	{
		name: 'openAutoPayment',
		apiExplain: '定时代缴开通',
		urlSuffix: 'billcenter/openAutoPayment',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'closeAutoPayment',
		apiExplain: '关闭自动代缴',
		urlSuffix: 'billcenter/closeAutoPayment',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'modifyAutoPayment',
		apiExplain: '修改定时代缴服务',
		urlSuffix: 'billcenter/modifyAutoPayment',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'queryAutoPaymentDetail',
		apiExplain: '定时代缴已开通用户信息查询',
		urlSuffix: 'billcenter/queryAutoPaymentDetail',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'checkInviteCode',
		apiExplain: '邀请码验证接口',
		urlSuffix: 'billcenter/checkInviteCode',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'queryMobileH',
		apiExplain: '查询运营商归属地接口',
		urlSuffix: 'queryMobileH',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'queryMobilId'
	},
	{
		name: 'queryPopupInfo',
		apiExplain: '弹窗查询接口',
		urlSuffix: 'handyservice/marketing/queryPopupInfo',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'obtainPopupPrize',
		apiExplain: '弹窗奖励领取接口',
		urlSuffix: 'handyservice/marketing/obtainPopupPrize',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'getReward',
		apiExplain: '红包-领取奖励接口',
		urlSuffix: 'redbag/missionOutput/getReward',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'queryLiveActivity',
		apiExplain: '查询本地配置活动接口',
		urlSuffix: 'handyservice/live/queryLiveActivity',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'queryMarktingActivity',
		apiExplain: '查询营销活动接口',
		urlSuffix: 'handyservice/live/queryMarktingActivity',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'queryRedisSwitch',
		apiExplain: '查询redis接口',
		urlSuffix: 'handyservice/live/queryRedisSwitch',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'openBalWarn',
		apiExplain: '开通余额提醒',
		urlSuffix: 'billcenter/openBalWarn',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'updateBalWarn',
		apiExplain: '修改余额提醒配置',
		urlSuffix: 'billcenter/updateBalWarn',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'closeBalWarn',
		apiExplain: '关闭余额提醒',
		urlSuffix: 'billcenter/closeBalWarn',
		method: 'POST',
		isMock: false,
		isSharebillService: false
	},
	{
		name: 'tradeOrderClose',
		apiExplain: '取消支付，关闭交易',
		urlSuffix: 'sharebills-service/api/tradeOrderClose',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'sharebillsAgreeId'
	},
	{
		name: 'festivalShow',
		apiExplain: '春节红包展示查询接口',
		urlSuffix: 'handyservice/marketing/festivalShow',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'getVoucherList',
		apiExplain: '获取家庭专区商城券列表',
		urlSuffix: 'growth/family/getVoucherList',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'familyAgreeId'
	},
	{
		name: 'queryFunds',
		apiExplain: '查询资金源',
		urlSuffix: 'handyservice/marketing/liveequity/queryFunds',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'queryMinusEquityRights',
		apiExplain: '查询理财优惠券',
		urlSuffix: 'handyservice/marketing/queryMinusEquityRights',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'queryFavorable',
		apiExplain: '查询优惠接口',
		urlSuffix: 'payassistant-client?method=queryTradeInternalOrder',
		method: 'POST',
		isSharebillService: true,
		noApi: true
	},
	{
		name: '	queryOrgList',
		apiExplain: '根据业务类型查询缴费单位列表',
		urlSuffix: 'livelihood/product/getOrgsByBusiType',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true,
		isRisk: true
	},
	{
		name: 'queryMarketScore',
		apiExplain: '惠星查询接口',
		urlSuffix: 'redbag/scoremarket/queryMarketScore',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'starNoAgreeId',
		encryptTech: true
	},
	{
		name: 'queryOutPutMarketProduct',
		apiExplain: '惠星兑换列表',
		urlSuffix: 'redbag/scoremarket/queryOutPutMarketProduct',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'starAgreeId',
		encryptTech: true
	},
	{
		name: 'equityOrder',
		apiExplain: '生活+权益代扣接口',
		urlSuffix: 'handyservice/marketing/liveequity/order',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		gapiStr: 'handyserviceAgreeId',
		encryptTech: true
	},
	{
		name: 'getActivities',
		urlSuffix: 'livelihood/product/getActivities',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		hideTipOnError: true,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'getBusitype',
		apiExplain: '用于查询定位城市所支持的业务类型',
		urlSuffix: 'livelihood/product/getBusitype/v2',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		hideTipOnError: true,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'queryBill',
		apiExplain: '用户查询账单查询',
		urlSuffix: 'livelihood/product/queryOwnBill',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		mockUrl: 'mockdata/queryBill.json',
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'queryOrder',
		apiExplain: '用户下单',
		urlSuffix: 'livelihood/product/order',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		mockUrl: 'mockdata/order.json',
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'queryHistoryBill',
		apiExplain: '查询所有的历史户号',
		urlSuffix: 'livelihood/product/queryBillAcctNo',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		hideTipOnError: true,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'queryOwnBill4Url',
		urlSuffix: 'livelihood/product/queryOwnBill4Url',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'getNotice',
		urlSuffix: 'livelihood/product/getNotice',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		hideTipOnError: true,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'queryAll',
		urlSuffix: 'livelihood/product/queryAll',
		method: 'POST',
		isMock: false,
		isSharebillService: false,
		hideTipOnError: true,
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		hasResultWrap: true
	},
	{
		name: 'queryTheMonthTaskListForLifePay',
		apiExplain: '任务制获取任务列表接口',
		urlSuffix: 'redbag/missionOutput/queryTheMonthTaskListForLifePay',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		gapiStr: 'redBagAgreeId',
		encryptAll: true
	},
	{
		name: 'isAllow',
		apiExplain: '生活+权益判断是否允许用户购买',
		urlSuffix: 'handyservice/marketing/isAllow',
		method: 'POST',
		hideTipOnError: true,
		isMock: false,
		isSharebillService: false,
		encryptAll: true,
		gapiStr: 'handyserviceAgreeId'
	},
	{
		name: 'notBillOrgRecord',
		apiExplain: '无交费单位用户反馈新增记录',
		urlSuffix: 'minsheng/livelihood/notBillOrgRecord',
		method: 'POST',
		gapiStr: 'sharebillsAgreeId',
		encryptAll: true,
		isSharebillService: false
	},
	{
		name: 'queryVoucher',
		apiExplain: '户号查询页优惠券信息',
		urlSuffix: 'handyservice/marketing/queryVoucher',
		method: 'POST',
		encryptAll: true,
		gapiStr: 'handyserviceAgreeId'
	}
];
