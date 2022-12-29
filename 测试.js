/**
 * @Author       :赵军
 * @Copyright (c) 2022 by 赵军/公司名, All Rights Reserved.
 * @Date         :2022-12-07 22:53:51
 * @Description  :
 * @FilePath     :\documentse:\Users\Gitee\项目展示\测试.js
 * @LastEditors  :赵军
 * @LastEditTime :2022-12-22 10:48:37
 */

// let a = {
//   "thirdCode": "sgcc",
//   "billOrgCode": "2100002112002002",
//   "address": "调兵山市调兵山街道晨光社区绿景******4-203",
//   "pageExtraProperties": "{}",
//   "billOrgName": "国网辽宁省铁岭市电力公司",
//   "billBarCode": "0092982042",
//   "extraProperties": "{\"queryBillTime\":\"20221207224946\",\"bank_acct_date\":\"20221207\"}",
//   "isAutoPayment": "true",
//   "autopaymentStatus": "autoPayment",
//   "isPrestore": "true",
//   "customerName": "绿景1****4二左",
//   "billsType": "0",
//   "querySeqNo": "eababc810ee844748e306287570ad59c",
//   "billAmount": "0",
//   "balance": "0",
//   "utoken": "613661c0b0917e030db13b02ff4d5e48",
//   "isOpenBw": "N",
//   "isComboPay": "false",
//   "businessType": "electric",
//   "billNo": "0092982042"
// }
// let  balance  = a.balance
// balance = 'adfssad'
// console.log(a,balance);

const { data } = require('./a')
let mData = []


data.forEach((item) => {
  if (!mData.some((items) => { return item.barCode == items.barCode })) {
    mData.push({
      barCode: item.barCode || '',
      businessType: item.businessType,
      cityCode: item.cityCode,
      billOrgName: item.billOrgName,
    })
  }
})
console.table(mData)




