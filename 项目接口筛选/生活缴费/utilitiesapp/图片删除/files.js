
function fsPathSys(path) { //遍历路径
	let stat = fs.statSync(path)
	if(stat.isDirectory()) {
		fs.readdir(path, isDirectory) //读文件夹
		function isDirectory(err, files) {
			if(err) {
				return err
			} else {
				files.forEach((item, index) => {
					let nowPath = `${path}/${item}`
					let stat = fs.statSync(nowPath)
					if(!stat.isDirectory()) {
						...somthing going on
					} else {
						fsPathSys(nowPath)
					}
				})
			}
		}
	}

}
