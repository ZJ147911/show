exports.H5API = {
	"adList": {
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"mockUrl": "mockdata/adList.json",
		"urlSuffix": "adList"
	},
	"checkInviteCode": {
		"apiExplain": "邀请码验证接口",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/checkInviteCode"
	},
	"closeAutoPayment": {
		"apiExplain": "关闭自动代缴",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/closeAutoPayment"
	},
	"closeBalWarn": {
		"apiExplain": "关闭余额提醒",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/closeBalWarn"
	},
	"deleteBill": {
		"apiExplain": "删除单条历史账单",
		"isMock": false,
		"isSharebillService": true,
		"method": "POST",
		"mockUrl": "mockdata/dbillNo.json",
		"urlSuffix": "deleteBillAcctNo/V1"
	},
	"equityOrder": {
		"apiExplain": "生活+权益代扣接口",
		"encryptTech": true,
		"gapiStr": "handyserviceAgreeId",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/marketing/liveequity/order"
	},
	"festivalShow": {
		"apiExplain": "春节红包展示查询接口",
		"gapiStr": "handyserviceAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/marketing/festivalShow"
	},
	"getActivities": {
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/getActivities"
	},
	"getBusitype": {
		"apiExplain": "用于查询定位城市所支持的业务类型",
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/getBusitype/v2"
	},
	"getNotice": {
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/getNotice"
	},
	"getReward": {
		"apiExplain": "红包-领取奖励接口",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "redbag/missionOutput/getReward"
	},
	"getVoucherList": {
		"apiExplain": "获取家庭专区商城券列表",
		"gapiStr": "familyAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "growth/family/getVoucherList"
	},
	"history": {
		"apiExplain": "根据用户订单号查询缴费记录",
		"encryptTech": true,
		"gapiStr": "sharebillsAgreeId",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"mockUrl": "mockdata/payhistory.json",
		"urlSuffix": "livelihood/product/queryBillTxnInfo"
	},
	"isAllow": {
		"apiExplain": "生活+权益判断是否允许用户购买",
		"apiFoxID": "/20043992",
		"apiFoxYun": true,
		"encryptAll": true,
		"gapiStr": "handyserviceAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/marketing/isAllow"
	},
	"modifyAutoPayment": {
		"apiExplain": "修改定时代缴服务",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/modifyAutoPayment"
	},
	"notBillOrgRecord": {
		"apiExplain": "无交费单位用户反馈新增记录",
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "minsheng/livelihood/notBillOrgRecord"
	},
	"obtainPopupPrize": {
		"apiExplain": "弹窗奖励领取接口",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/marketing/obtainPopupPrize"
	},
	"openAutoPayment": {
		"apiExplain": "定时代缴开通",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/openAutoPayment"
	},
	"openBalWarn": {
		"apiExplain": "开通余额提醒",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/openBalWarn"
	},
	"queryAll": {
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/queryAll"
	},
	"queryArea": {
		"apiExplain": "查询省市接口",
		"cache": false,
		"encryptTech": true,
		"gapiStr": "sharebillsAgreeId",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"mockUrl": "mockdata/queryArea.json",
		"urlSuffix": "livelihood/product/getBusiCities"
	},
	"queryAutoPaymentDetail": {
		"apiExplain": "定时代缴已开通用户信息查询",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/queryAutoPaymentDetail"
	},
	"queryBill": {
		"apiExplain": "用户查询账单查询",
		"apiFoxYun": false,
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"mockUrl": "mockdata/queryBill.json",
		"staticMockUrl": "queryBill",
		"urlSuffix": "livelihood/product/queryOwnBill"
	},
	"queryBillInfo": {
		"apiExplain": "订单号查询缴费记录",
		"encryptTech": true,
		"gapiStr": "sharebillsAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/queryBillTxnInfoByOrderNo"
	},
	"queryFavorable": {
		"apiExplain": "查询优惠接口",
		"isSharebillService": true,
		"method": "POST",
		"noApi": true,
		"urlSuffix": "payassistant-client?method=queryTradeInternalOrder"
	},
	"queryFunds": {
		"apiExplain": "查询资金源",
		"gapiStr": "handyserviceAgreeId",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/marketing/liveequity/queryFunds"
	},
	"queryHistoryBill": {
		"apiExplain": "查询所有的历史户号",
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/queryBillAcctNo"
	},
	"queryLiveActivity": {
		"apiExplain": "查询本地配置活动接口",
		"gapiStr": "handyserviceAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/live/queryLiveActivity"
	},
	"queryMarktingActivity": {
		"apiExplain": "查询营销活动接口",
		"gapiStr": "handyserviceAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/live/queryMarktingActivity"
	},
	"queryMinusEquityRights": {
		"apiExplain": "查询理财优惠券",
		"gapiStr": "handyserviceAgreeId",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/marketing/queryMinusEquityRights"
	},
	"queryMobileH": {
		"apiExplain": "查询运营商归属地接口",
		"encryptTech": true,
		"gapiStr": "queryMobilId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"operationType": "com.bestpay.handyservice.communication.product.service.api.basic.IBasicService.queryPhoneAttribution",
		"urlSuffix": "handyservice/communication/queryPhoneAttribution"
	},
	"queryOrder": {
		"apiExplain": "用户下单",
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"mockUrl": "mockdata/order.json",
		"urlSuffix": "livelihood/product/order"
	},
	"queryOrg": {
		"apiExplain": "查询缴费单位详细信息",
		"encryptTech": true,
		"gapiStr": "sharebillsAgreeId",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"mockUrl": "mockdata/queryOrg.json",
		"urlSuffix": "livelihood/product/getOrgByOrgCode"
	},
	"queryOrgList": {
		"apiExplain": "根据业务类型查询缴费单位列表",
		"apiFoxID": "/37467858",
		"apiFoxYun": true,
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"isMock": false,
		"isRisk": true,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/getOrgsByBusiType"
	},
	"queryOwnBill4Url": {
		"encryptAll": true,
		"gapiStr": "sharebillsAgreeId",
		"hasResultWrap": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "livelihood/product/queryOwnBill4Url"
	},
	"queryPopupInfo": {
		"apiExplain": "弹窗查询接口",
		"gapiStr": "handyserviceAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/marketing/queryPopupInfo"
	},
	"queryRedisSwitch": {
		"apiExplain": "查询redis接口",
		"gapiStr": "handyserviceAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "handyservice/live/queryRedisSwitch"
	},
	"querySMS": {
		"apiExplain": "获取短信通知接口是开通短信通知 标记mpass",
		"isMock": false,
		"isSharebillService": true,
		"method": "POST",
		"mockUrl": "mockdata/querySMS.json",
		"urlSuffix": "queryAlertsSMS/V1"
	},
	"queryVoucher": {
		"apiExplain": "户号查询页优惠券信息",
		"apiFoxID": "/29361298",
		"apiFoxYun": true,
		"encryptAll": true,
		"gapiStr": "handyserviceAgreeId",
		"method": "POST",
		"urlSuffix": "handyservice/marketing/queryVoucher"
	},
	"sgccPreQuery": {
		"apiExplain": "北京国电下单前先进行预查询",
		"isMock": false,
		"isSharebillService": true,
		"method": "POST",
		"urlSuffix": "sgccPreQuery"
	},
	"tradeOrderClose": {
		"apiExplain": "取消支付，关闭交易",
		"gapiStr": "sharebillsAgreeId",
		"hideTipOnError": true,
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "sharebills-service/api/tradeOrderClose"
	},
	"updateBalWarn": {
		"apiExplain": "修改余额提醒配置",
		"isMock": false,
		"isSharebillService": false,
		"method": "POST",
		"urlSuffix": "billcenter/updateBalWarn"
	},
	"updateMarkAndDate": {
		"apiExplain": "修改备注名",
		"isMock": false,
		"isSharebillService": true,
		"method": "POST",
		"mockUrl": "mockdata/ubillNo.json",
		"urlSuffix": "updateBillAcctNo/V1"
	}
}