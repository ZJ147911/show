const express = require("express")
const router = express.Router()
const shell = require('shelljs')
const path = require('path')
const fs = require('fs')

const execGo = (command, options) => {
  const { code, stdout, stderr } = shell.exec(command, { silent: true, ...options })
  if (code === 0) {
    return stdout
  } else {
    console.log(stderr)
    shell.exit
  }
}

const changeConfig = (filePath, isProd) => {
  const objPath = path.join(filePath, './mini.project.json')
  const project = fs.readFileSync(objPath, {
    encoding: 'utf-8'
  })
  let obj
  if (isProd) {
    obj = project.replace(/test/g, 'prod')
  } else {
    obj = project.replace(/prod/g, 'test')
  }
  fs.writeFileSync(objPath, obj)
}
// 新增数据
router.post("/", function (request, response) {
  const { action, userInfo, config, req, res } = request.body
  console.log("🚀 ~ file: mgsApis.js:32 ~ request.body", request.body)
  const objConfig = {
    2022001200010001: 'D:\\Users\\Tian\\utilitiesapp3.0',
    2022001200010002: 'D:\\Users\\Tian\\payassistantMPaaS',
  }
  const user = {
    prod: 'lujiarui@bestpay.com.cn',
    dev: 'tongchangsheng@bestpay.com.cn'
  }
  // action     STRING API名
  // 枚举值 {
  // "getAppListByApi", // 拉取小程序列表
  // "getPackageInfoByApi", // 获取指定ID的小程序信息
  // "uploadPackageByApi", // 上传小程序包至mds，包含预览、调试、发布
  // "login" // 登录小程序IDE
  // }
  // userInfo // OBJECT 用户信息（登录接口返回什么就显示什么，可以用来做鉴权）
  // config // OBJECT 对应的配置文件
  // req // OBJECT 此API执行时的入参
  // res // OBJECT 此API执行后返回的结果
  if (action === 'uploadPackageByApi') {
    if (objConfig[req.appInfo.h5Id] && userInfo.loginName == user.prod) {
      execGo(`git tag v${req.h5Version}`, { cwd: path.join(objConfig[req.appInfo.h5Id]) })
      execGo(`git push origin v${req.h5Version}`, { cwd: path.join(objConfig[req.appInfo.h5Id]) })
    } else {
      execGo(`git tag dev${req.h5Version}`, { cwd: path.join(objConfig[req.appInfo.h5Id]) })
    }
  }
  if (action === 'getPackageInfoByApi') {
    if (userInfo.loginName == user.prod) {
      changeConfig(objConfig[req.h5Id], true)
    } else {
      changeConfig(objConfig[req.h5Id], false)
    }
  }


  response.send({
    message: "插入成功！",
    success: 200,
  })
})


module.exports = router
