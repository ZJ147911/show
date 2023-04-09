/**
 * @Author       :赵军
 * @Copyright (c) 2023 by 赵军/公司名, All Rights Reserved.
 * @Date         :2023-03-11 10:55:56
 * @Description  :
 * @FilePath     :\项目展示\enquirer\index.js
 * @LastEditors  :赵军
 * @LastEditTime :2023-03-11 21:08:10
 */
let fs = require("fs")
let path = require("path")

let read = (MyUrl) => {
  fs.readdir(MyUrl, (err, files) => {
    if (!files.includes( '.git' )) {
    console.log("🚀 ~ file: index.js:15 ~ fs.readdir ~ files:", MyUrl, files)
      if (err) throw err
      files.map((file) => {
        //拼接获取绝对路径，fs.stat(绝对路径,回调函数)
        let fPath = path.join(MyUrl, file)
        // console.log("🚀 ~ file: index.js:20 ~ files.map ~ fPath:", fPath);
        fs.stat(fPath, (err, stat) => {
          //stat 状态中有两个函数一个是stat中有isFile ,isisDirectory等函数进行判断是文件还是文件夹
          // console.log("🚀 ~ file: index.js:22 ~ fs.stat ~ stat.isFile():", stat.isFile());
          if (stat.isFile()) {

          } else {
            read(fPath)
          }
        })
      })
    }
  })
}
read('D:/Users/Tian')