
function onBridgeReady(callback) {
	if (window.AlipayJSBridge) {
		callback && callback();
	} else {
		document.addEventListener('AlipayJSBridgeReady', callback, false);
	}
}


function jsbCall(params, options) {
  const {module, method} = options;
  let api =  `${module}.${method}`;
  return new Promise((resolve, reject) => {
    onBridgeReady(function() {
        AlipayJSBridge.call(api, params, function(result) {
            if (typeof result !== 'object') {
                console.warn(`[AlipayJSBridge] call result is not object`)
                return
            }
            console.log(result);
            if (result) {
              resolve(result)
            } else {
              reject(result)
            }
        })
    })
  })
}