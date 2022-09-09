let fs = require("fs")
let path = require("path")
const { imgs } = require("../imgs")
const { wen } = require("../wen")
let removeImgs1 = [],// 全部图片
	removeImgs2 = [], // 有用图片
	removeImgs3 = []// 需删除
let images = [".svg", ".jpg", ".png", ".gif"]

imgs.forEach((it) => {
	// let imgName = `${path.basename(it)}`
	let imgName = it
	removeImgs1.push(imgName)

	let reg = new RegExp(imgName, "i")
	wen.forEach((item) => {
		if (!images.includes(path.basename(item))) {
			let project = fs.readFileSync(item, {
				encoding: "utf-8",
			})
			let versionBefore = reg.test(JSON.stringify(project))
			if (versionBefore) {
				removeImgs2.push(imgName)
			}
		}
	})
})
let a1 = new Set(removeImgs1)
let a2 = new Set(removeImgs2)
a1.forEach((item) => {
	if (!a2.has(item)) {
		removeImgs3.push(item)
	}
})

fs.writeFileSync("./allPicture.js", JSON.stringify(removeImgs1))
fs.writeFileSync("./use.js", JSON.stringify(removeImgs2))
fs.writeFileSync("./delete.js", JSON.stringify(removeImgs3))

removeImgs3.forEach((item) => {
	fs.rmSync(`D:/Users/Tian/utilitiesapp3.0/src/${item}`)
})
