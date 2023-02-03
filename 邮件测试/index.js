/**
 * @Author       :赵军
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-01-26 12:50:32
 * @Description  :
 * @FilePath     :\项目展示\邮件测试\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2023-01-27 21:05:54
 */
const nodemailer = require('./app')
const text = {
  a: '4342343242343242343',
  b:'个电饭锅电饭锅电饭锅的'
}
// nodemailer.send('zhaojun-szgx@bestpay.com.cn','878787')
nodemailer.send('18852198228@163.com',text.a)
// nodemailer.send('1839259237@qq.com',text.b)