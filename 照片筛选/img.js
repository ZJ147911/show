let fs = require("fs")
let path = require("path")
let removeImgs1 = []
let removeImgs2 = []
const { imgs } = require("../imgs")
const { wen } = require("../wen")
let a = 0
imgs.forEach((item, index) => {
	// let imgName = `${path.basename(item)}`
	let imgName = item
	removeImgs1.push(imgName)
	// console.log(imgName)

	let reg = new RegExp(imgName, "i")
	// console.log(JSON.stringify(reg))
	wen.forEach((item) => {
		// console.log("🚀", item)
		let project = fs.readFileSync(item, {
			encoding: "utf-8",
		})
		let versionBefore = reg.test(JSON.stringify(project))
		if (versionBefore) {
			removeImgs2.push(imgName)
			a++
			// console.log("🚀", a)
		} else {
			// console.log("2")
		}
	})
    if (index == 385) {
        fs.writeFileSync("./removeImgs1.js", JSON.stringify(removeImgs1))
        fs.writeFileSync("./removeImgs2.js", JSON.stringify(removeImgs2))
	}
})
