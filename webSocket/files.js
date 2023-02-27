/**
 * @Author       :赵军
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-02-27 21:39:08
 * @Description  :st
 * @FilePath     :\项目展示\webSocket\files.js
 * @LastEditors  :赵军
 * @LastEditTime :2023-02-28 00:38:01
 */
const fs = require('fs')
const filesPath = 'D:/Users/Git/项目展示/result.js'
let result = {}

const childrenType = (resType, isShow) => {

  let res = JSON.parse(JSON.stringify(resType)), obj = isShow ? isShow : {}
  Object.keys(res).forEach((item) => {
    if (!obj[item]) {
      obj[item] = {
        type:[]
      }
    }
    switch (typeof res[item]) {
      case 'string':
        if (!obj[item].type.includes('string')) {
          obj[item].type.push('string')
        }
        break
      case 'number':
        if (!obj[item].type.includes('number')) {
          obj[item].type.push('number')
        }
        break
      case 'boolean':
        if (!obj[item].type.includes('boolean')) {
          obj[item].type.push('boolean')
        }
        break
      case 'object':
        if (res[item].length) {
          if (!obj[item].type.includes('array')) {
            obj[item].type.push('array')
          }
          obj[item].children = childrenType(res[item])
        } else {
          if (!obj[item].type.includes('object')) {
            obj[item].type.push('object')
          }
          obj[item].children = childrenType(res[item])
        }
        break
      case 'undefined':
        if (!obj[item].type.includes('undefined')) {
          obj[item].type.push('undefined')
        }
        break
    }
    if (isShow) {
      obj[item].reviseTime = Date.now()
    } else {
      obj[item].createdTime = Date.now()
    }
  }
  )
  return obj
}

const resultAdd = (option, res) => {
  // exports.resultAdd = (option, res) => {
  result = JSON.parse(fs.readFileSync(filesPath, {
    encoding: 'utf-8'
  }))
  if (result[option.operationType]) {
    result[option.operationType] = childrenType(res, result[option.operationType])
  } else {
    result[option.operationType] = childrenType(res)
  }
  fs.writeFileSync(filesPath, JSON.stringify(result))
}
resultAdd({
  "operationType": "com.bestpay.handyservice.marketing.api.live.ILiveActivityService.carouselBannerQuery",
  "apiExplain": "绿色能量配置轮播图配置查询",
  "apiFoxID": "",
  "mock": false
}, {
    "params": true,
    "options": {
        "operationType": "com.bestpay.handyservice.marketing.api.live.ILiveActivityService.queryMarktingActivity",
        "apiExplain": "查询营销活动接口",
        "url": "/gapi/handyservice/live/queryMarktingActivity",
        "autoLogin": true,
        "gapiStr": "handyserviceAgreeId",
        "hideTipOnError": true,
        "isSharebillService": false,
        "mock": false,
        "specialDomain": "url2"
    }
})




// {
//     type: "obj",
//       children: {
//       "params": { type: 'string' },
//       "options": { type: 'string' }

//     }
// }



