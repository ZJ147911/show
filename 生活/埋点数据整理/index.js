

let a = []
const homePageClick = (sign, name) => {
  a.push({
    track_sign: sign,
    track_all_name: `生活缴费子应用-生活缴费首页面-${name}_点击`,
  })
}

homePageClick('ashjfzyy.b17226.c17289.d17291_23113.click', '城市业务未开通弹窗-开通业务开通提醒')
homePageClick('ashjfzyy.b17226.c17289.d17290_23112.click', '城市业务未开通弹窗-知道当前业务未开通')
homePageClick('ashjfzyy.b17226.d17230_23031.click', '我的缴费')
homePageClick('ashjfzyy.b17226.d17275_23089.click', '户号管理')
homePageClick('ashjfzyy.b17226.d17229_23030.click', '展开户号')
homePageClick('ashjfzyy.b17226.d17231_23032.click', '新增缴费')
homePageClick('ashjfzyy.b17226.d17232_23033.click', '切换城市')

homePageClick('ashjfzyy.b17226.c17258.d17271_23084.click', '生活缴费首页弹窗-立即领取优惠券')
homePageClick('ashjfzyy.b17226.c17258.d17260_23067.click', '生活缴费首页弹窗-关闭弹窗')
homePageClick('ashjfzyy.b17226.c17258.d17270_23083.click', '生活缴费首页弹窗-查看弹窗详情')
homePageClick('ashjfzyy.b17226.c17258.d17272_23085.click', '生活缴费首页弹窗-去使用优惠券')
homePageClick('ashjfzyy.b17226.d17288_23110.click', '点击新增缴费拉起底部缴费栏')
homePageClick('ashjfzyy.b17226.d17274_23088.click', '新增缴费按钮')
homePageClick('ashjfzyy.b17226.d17228_23029.click', '缴费记录')
homePageClick('ashjfzyy.b17226.d17234_23035.click', '自动缴费首页入口')
homePageClick('ashjfzyy.b17226.d17236_23037.click', '余额提醒首页入口')
homePageClick('ashjfzyy.b17226.d17238_23039.click', '使用帮助入口')
console.log('🚀 ~ file: index.js:4 ~ a:', a)