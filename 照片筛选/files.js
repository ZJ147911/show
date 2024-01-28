let fs = require("fs")
let path = require("path")
let myUrl = "D:/Users/Tian/utilitiesapp3.0/src"
let imgUrl = "D:/Users/Tian/utilitiesapp3.0/src/assets/images"
let imgs = [],
	wen = [],
	imgSize1 = [],
	imgSize2 = [],
	imgSize3 = []

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
						// 筛选大于40kb的图片
						imgSize3.push(stat.size)
						if (stat.size > 40000) {
							imgSize1.push(fPath.replace(/\\/g, "/").replace("D:/Users/Tian/utilitiesapp3.0/src", "@"))
						} else {
							imgSize2.push(fPath)
						}
						imgs.push(fPath.replace(/\\/g, "/").replace("D:/Users/Tian/utilitiesapp3.0/", "@/assets/"))
					}
					if (item === 2) {
						wen.push(fPath.replace(/\\/g, "/"))
					}
				} else {
					read(fPath, item)
				}
			})
		})
		const A1 = [...new Set(wen)]
		const A2 = [...new Set(imgs)]
		const A3 = [...new Set(imgSize1)]
		const A4 = [...new Set(imgSize2)]
		const A5 = [...new Set(imgSize3)]
		fs.writeFileSync("./wen.js", `exports.wen=${JSON.stringify(A1)}`)
		fs.writeFileSync("./imgs.js", `exports.imgs=${JSON.stringify(A2)}`)
		fs.writeFileSync("./imgSize1.js", `exports.imgSize=${JSON.stringify(A3)}`)
		fs.writeFileSync("./imgSize2.js", `exports.imgSize=${JSON.stringify(A4)}`)
		fs.writeFileSync("./imgSize3.js", `exports.imgSize=${JSON.stringify(A5)}`)
	})
}
read(imgUrl, 1)
read(myUrl, 2)
