/**
isSharebillService: false,              使用的是mapi 还是gapi 如果使用gapi必须设置 gapiStr 以及对应的agreeid属性名
gapiStr: 'bannerAgreeId',
isRisk                                  是否过风控
encrypt                                 upLink - 上行加密  upDownLink - 上下行加密
 */
let mockService = {
    queryUnPay: {
        // 查询待交党费,
        url: '/partyfee/queryUnPay',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        encrypt: 'upDownLink',
        isMock: false,
        mockUrl: '/static/mockdata/queryUnPay.json'
    },
    queryPayedHistory: {
        // 查询已交纳的党费历史记录,
        url: '/partyfee/queryPayedHistory',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        encrypt: 'upDownLink',
        isMock: false,
        mockUrl: '/static/mockdata/queryPayedHistory.json'
    },
    createPayOrder: {
        // 创建党费订单,
        url: '/partyfee/createPayOrder',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        encrypt: 'upDownLink',
        isMock: false,
        mockUrl: '/static/mockdata/createPayOrder.json'
    },
    queryPayedDetail: {
        // 查询支付完成的结果明细,
        url: '/partyfee/queryPayedDetail',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        encrypt: 'upDownLink',
        isMock: false,
        mockUrl: '/static/mockdata/queryPayedDetail.json'
    },
    queryHelpPayHistory: {
        // 查询历史代交记录,
        url: '/partyfee/queryHelpPayHistory',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        encrypt: 'upDownLink',
        isMock: false,
        mockUrl: '/static/mockdata/queryHelpPayHistory.json'
    },
    delHelpPayHistory: {
        // 删除历史代交记录,
        url: '/partyfee/delHelpPayHistory',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        isMock: false,
        mockUrl: '/static/mockdata/delHelpPayHistory.json'
    },
    queryArticle: {
        // 获取文章接口,
        url: '/partyfeequeryArticle',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        isMock: false,
        mockUrl: '/static/mockdata/queryArticle.json'
    },
    queryTokenUrl: {
        // 获取党费申请书地址，一分钟内有效,
        url: '/partyfee/queryTokenUrl',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        encrypt: 'upLink',
        isMock: false,
        mockUrl: '/static/mockdata/queryTokenUrl.json'
    },

    getVideoArticleInfoForH5: {
        // 查询视频group-id,
        url: '/growth/byteDance/getVideoArticleInfoForH5',
        method: 'POST',
        isSharebillService: true,
        isMock: false,
        mockUrl: '/static/mockdata/getVideoArticleInfoForH5.json'
    },
    getBDVideoInfoForH5: {
        // 查询视频播放地址,
        url: '/growth/byteDance/getBDVideoInfoForH5',
        method: 'POST',
        isSharebillService: true,
        isMock: false,
        mockUrl: '/static/mockdata/getBDVideoInfoForH5.json'
    },
    buildAutoLoginRequest: {
        // 兑吧登录,
        url: '/redbag/duiba/buildAutoLoginRequest',
        method: 'POST',
        isSharebillService: false,
        isMock: false,
        mockUrl: '/static/mockdata/buildAutoLoginRequest.json'
    },
    queryHomePop: {
        // 获取首页弹框接口,
        url: '/partyfee/queryHomePop',
        method: 'POST',
        isSharebillService: false,
        isMock: false,
        mockUrl: '/static/mockdata/queryHomePop.json'
    },
    queryBanner: {
        // 获取banner模块接口,
        url: '/partyfee/queryBanner',
        method: 'POST',
        isSharebillService: false,
        gapiStr: 'bannerAgreeId',
        isMock: false,
        mockUrl: '/static/mockdata/queryBanner.json'
    }
  }
  export default mockService

  // getVideoArticleInfoForH5
  // getBDVideoInfoForH5
  // buildAutoLoginRequest
  // queryHomePop
  // queryBanner

  // queryUnPay
  // queryPayedHistory
  // createPayOrder
  // queryPayedDetail
  // queryHelpPayHistory
  // delHelpPayHistory
  // queryArticle
  // queryTokenUrl

  // queryDonationOrder
  // createDonationOrder

  // billSync
  // billModify
  // billQuery
