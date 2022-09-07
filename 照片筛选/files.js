const { log } = require("console")
let fs = require("fs")
let path = require("path")
let myUrl = "D:/Users/Tian/utilitiesapp3.0/src"
let imgUrl = "D:/Users/Tian/utilitiesapp3.0/src/static"
let imgs = [],
	wen = [],
	imgSize = []

let read = (MyUrl, item) => {
	fs.readdir(MyUrl, (err, files) => {
		if (err) throw err
		files.forEach((file) => {
			//拼接获取绝对路径，fs.stat(绝对路径,回调函数)
			let fPath = path.join(MyUrl, file)
			fs.stat(fPath, (err, stat) => {
				//stat 状态中有两个函数一个是stat中有isFile ,isisDirectory等函数进行判断是文件还是文件夹
				if (stat.isFile()) {
					if (item === 1) {
						imgs.push(fPath.replace(/\\/g, "/").replace("D:/Users/Tian/utilitiesapp3.0/src/", ""))
					} else if (item === 2) {
						wen.push(fPath)
					}
				} else {
					read(fPath, item)
				}
				// 筛选大于40kb的图片
				if (stat.size > 40000) {
					imgSize.push(fPath)
				}
			})
		})
		fs.writeFileSync("./wen.js", `exports.wen=${JSON.stringify(wen)}`)
		fs.writeFileSync("./imgs.js", `exports.imgs=${JSON.stringify(imgs)}`)
		fs.writeFileSync("./imgSize.js", JSON.stringify(imgSize))
	})
}
read(imgUrl, 1)
read(myUrl, 2)
