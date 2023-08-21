exports.API = [
	{
		name: 'queryUnPay',
		apiExplain: '查询待交党费',
		url: '/partyfee/queryUnPay',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		encryptAll: true,
		isMock: false,
		mockUrl: '/static/mockdata/queryUnPay.json'
	},
	{
		name: 'queryPayedHistory',
		apiExplain: '查询已交纳的党费历史记录',
		url: '/partyfee/queryPayedHistory',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		encryptAll: true,
		isMock: false,
		mockUrl: '/static/mockdata/queryPayedHistory.json'
	},
	{
		name: 'createPayOrder',
		apiExplain: '创建党费订单',
		url: '/partyfee/createPayOrder',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		encryptAll: true,
		isMock: false,
		mockUrl: '/static/mockdata/createPayOrder.json'
	},
	{
		name: 'queryPayedDetail',
		apiExplain: '查询支付完成的结果明细',
		url: '/partyfee/queryPayedDetail',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		encryptAll: true,
		isMock: false,
		mockUrl: '/static/mockdata/queryPayedDetail.json'
	},
	{
		name: 'queryHelpPayHistory',
		apiExplain: '查询历史代交记录',
		url: '/partyfee/queryHelpPayHistory',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		encryptAll: true,
		isMock: false,
		mockUrl: '/static/mockdata/queryHelpPayHistory.json'
	},
	{
		name: 'delHelpPayHistory',
		apiExplain: '删除历史代交记录',
		url: '/partyfee/delHelpPayHistory',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		isMock: false,
		mockUrl: '/static/mockdata/delHelpPayHistory.json'
	},
	{
		name: 'queryArticle',
		apiExplain: '获取文章接口',
		url: '/partyfee/queryArticle',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		isMock: false,
		mockUrl: '/static/mockdata/queryArticle.json'
	},
	{
		name: 'queryTokenUrl',
		apiExplain: '获取党费申请书地址，一分钟内有效',
		url: '/partyfee/queryTokenUrl',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		encryptTech: true,
		isMock: false,
		mockUrl: '/static/mockdata/queryTokenUrl.json'
	},

	{
		name: 'adList',
		apiExplain: 'banner轮播',
		url: '/adList',
		method: 'post',
		isSharebillService: true,
		isMock: false,
		mockUrl: '/static/mockdata/adList.json'
	},
	{
		name: 'getVideoArticleInfoForH5',
		apiExplain: '查询视频group-id',
		url: '/growth/byteDance/getVideoArticleInfoForH5',
		method: 'post',
		isSharebillService: true,
		isMock: false,
		mockUrl: '/static/mockdata/getVideoArticleInfoForH5.json'
	},
	{
		name: 'getBDVideoInfoForH5',
		apiExplain: '查询视频播放地址',
		url: '/growth/byteDance/getBDVideoInfoForH5',
		method: 'post',
		isSharebillService: true,
		isMock: false,
		mockUrl: '/static/mockdata/getBDVideoInfoForH5.json'
	},
	{
		name: 'buildAutoLoginRequest',
		apiExplain: '兑吧登录',
		url: '/redbag/duiba/buildAutoLoginRequest',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'agreeId',
		isMock: false,
		mockUrl: '/static/mockdata/buildAutoLoginRequest.json'
	},
	{
		name: 'queryHomePop',
		apiExplain: '获取首页弹框接口',
		url: '/partyfee/queryHomePop',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		isMock: false,
		mockUrl: '/static/mockdata/queryHomePop.json'
	},
	{
		name: 'queryBanner',
		apiExplain: '获取banner模块接口',
		url: '/partyfee/queryBanner',
		method: 'post',
		isSharebillService: false,
		gapiStr: 'bannerAgreeId',
		isMock: false,
		mockUrl: '/static/mockdata/queryBanner.json'
	}
];
