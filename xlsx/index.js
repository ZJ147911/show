/**
 * @Author       :赵军
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-04-05 11:55:27
 * @Description  :
 * @FilePath     :\项目展示\xlsx\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2023-04-07 23:11:35
 */
// import XLSX from "xlsx"
import fetch from 'node-fetch'
// const data =await XLSX.readFile('./微信支付账单.xlsx')
// const aa=await JSON.stringify({
//   "params":data,
//     "options":'log'
// })
// console.log("🚀 ~ file: index.js:12 ~ data:", data);


// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  console.count('123')
  return response.json() // parses JSON response into native JavaScript objects
}

setInterval(() => {
  postData("http://localhost:3000/jsbH5/User/getProductNo", {
    "params": {
      "noAutoLogin": true
    },
    "options": {
      "module": "User",
      "method": "getProductNo"
    }
  }).then((res) => {
    console.log("🚀 ~ file: index.js:34 ~ res:", res)
  }).catch((err) => {
    console.log("🚀 ~ file: index.js:29 ~ err:", err)
  })
}, 100)
