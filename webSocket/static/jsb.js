
function onBridgeReady(callback) {
	if (window.AlipayJSBridge) {
		callback && callback()
	} else {
		document.addEventListener('AlipayJSBridgeReady', callback, false)
	}
}


function jsbCall(params, options) {
	const { module, method } = options
	let api = `${module}_${method}`
	return new Promise((resolve) => {
		onBridgeReady(function () {
			AlipayJSBridge.call(api, params, (result) => {
				if (typeof result !== 'object') {
					console.warn(`[AlipayJSBridge] call result is not object`)
					return
				}
				console.log("🚀 ~ file: jsb.js:17 ~ AlipayJSBridge.call ~ result", result)
				if (result) {
					resolve(result)
				} else {
					reject(result)
				}
			})
		})
	})
}


const jsbH5Call = (params = {}, options) => {
	const { module, method } = options
	return new Promise((resolve, reject) => {
		BestpayHtml5[module][method](
			params,
			(val) => {
				resolve({
					type: 'success',
					data:val
				})
			},
			(err) => {
				reject({
					type: 'fail',
					data: err
				})
			},
			(cancelErr) => {
				reject({
					type: 'cancel',
					data: cancelErr
				})
			}
		)
	})
}