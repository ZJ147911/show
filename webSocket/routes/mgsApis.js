const express = require("express")
const router = express.Router()
const shell = require('shelljs')
const path = require('path')
const fs = require('fs')
let projectConfig
try {
  projectConfig = require(path.join(process.cwd(), "config.json"))
} catch (error) {
  projectConfig = {
    "projectPath": {
      "2022001200010001": "D:/Users/Tian/utilitiesapp3.0",
      "2022001200010002": "D:/Users/Tian/payassistantMPaaS"
    },
    "user": {
      "prod": "lujiarui@bestpay.com.cn",
      "dev": "tongchangsheng@bestpay.com.cn"
    },
    "ide": false
  }
  console.log("config.json:默认配置", projectConfig)
  console.error(process.cwd(), "请在此目录下配置config.json文件")

}

// 项目
const execGo = (command, options) => {
  const { code, stdout, stderr } = shell.exec(command, { silent: true, ...options })
  if (code === 0) {
    return stdout
  } else {
    console.log(stderr)
    shell.exit
  }
}

const changeConfig = (filePath, isProd = true) => {
  const objPath = path.join(filePath, 'mini.project.json')
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
const dateNow = () => {
  const time = new Date()
  return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}
const ideConfig = (val) => {
  if (projectConfig.ide) {
    const objPath = path.join(process.cwd(), 'ide.txt')
    // 新内容
    const newContent = `${val.action}-${dateNow()}:${JSON.stringify(val)}\n`
    // 追加新内容到文件末尾
    fs.appendFileSync(objPath, newContent)
  }
}

// 新增数据
router.post("/", function (request, response) {
  const { action, userInfo, config, req, res } = request.body
  ideConfig(request.body)
  // console.log("🚀 ~ file: mgsApis.js:32 ~ request.body", request.body)
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
  if (action === 'uploadPackageByApi' && projectConfig.projectPath[req.appInfo.h5Id]) {
    let list = req.h5Version.split('.')
    if (list[3] != 0) return
    const version = req.h5Version.slice(0, -2)
    if (projectConfig.user.prod.includes(userInfo.loginName)) {
      execGo(`git tag v${version}`, { cwd: path.join(projectConfig.projectPath[req.appInfo.h5Id]) })
      execGo(`git push origin v${version}`, { cwd: path.join(projectConfig.projectPath[req.appInfo.h5Id]) })
    } else {
      execGo(`git tag test${version}`, { cwd: path.join(projectConfig.projectPath[req.appInfo.h5Id]) })
    }
  }
  if (action === 'getPackageInfoByApi') {
    if (projectConfig.user.prod.includes(userInfo.loginName)) {
      changeConfig(projectConfig.projectPath[req.h5Id])
    } else {
      changeConfig(projectConfig.projectPath[req.h5Id], false)
    }
  }


  response.send({
    message: "插入成功！",
    success: 200,
  })
})


module.exports = router
