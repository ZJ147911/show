const fs = require("fs");
const path = require("path");

/**
 * 递归删除指定目录下的所有 node_modules 文件夹
 * @param {string} dir 当前处理的目录路径
 */
function removeNodeModules(dir) {
	const files = fs.readdirSync(dir);
	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stats = fs.statSync(filePath);
		if (stats.isDirectory()) {
			// 如果是目录
			if (file === "node_modules") {
				// 如果是 node_modules 目录则删除
				fs.rmSync(filePath, { recursive: true, force: true });
			} else if (file !== ".git") {
				// 否则递归进入下一级目录
				removeNodeModules(filePath);
			}
		}
	});
}

// 调用函数，从指定目录开始
removeNodeModules("D://Users//worktrees//learnhub.worktrees");
