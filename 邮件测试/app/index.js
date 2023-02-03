const nodemailer = require('nodemailer')
const {mailOption}=require('./message')

const obj = {
  transporter: nodemailer.createTransport({
    host: 'smtp.qq.com', // 默认是这个
    port: 465,
    auth: {
      user: '1479119670@qq.com',
      pass: 'xwuksfufrtrojhjb'
    }
  }),

  send: function(mail, content) {
    const mailOptions = {
      // 发送方的邮箱地址
      from: '1479119670@qq.com',
      to: mail, // 对方邮箱
      // cc         : ''  //抄送 用于多人邮件
      // bcc      : ''    //密送
      subject: '激活验证',
      text: mailOption.text.replace('####',content),
    }
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
    })
  }
}

// 抛出对象以接收

module.exports = obj
