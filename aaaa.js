
const getParam = (name, str) => {
	const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');

	const r = str || window.location.search.substr(1).match(reg) || window.location.href.substr(1).match(reg);
	if (r != null) {
		try {
			return decodeURIComponent(r[2]);
		} catch (e) {
			return unescape(r[2]);
		}
	}
	return null;
};



// 拼接 url 字符串 从 ?开始拼接
const composeParam = (obj) => Object.keys(obj).reduce((t, v, i, arr) => ((t += i !== arr.length - 1 ? `${v}=${obj[v]}&` : `${v}=${obj[v]}`), t), '?');

// 获取 url 路径中的参数值
function useGetQuery(url) {
	const hash_value = url;
	// 从 URL 查询字符串中匹配出所有的参数名和对应的值
	const reg = /[?&]([^=#]+)=([^&#]*)/g;
	const params = {};
	let match;

	// 通过循环遍历匹配到的参数，将其存储到 params 对象中
	while ((match = reg.exec(hash_value))) {
		params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
	}
	return params;
}

let url = "https://h5.bestpay.com.cn/subapps/couponCenter/index.html?name=king&age=12#/detail?name=test&sex=male"


	console.log('🚀 :', useGetQuery(url))
	console.log('🚀 :', composeParam(useGetQuery(url)))