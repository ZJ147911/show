const originalConsole = {
	log: null,
	info: null,
	warn: null,
	error: null,
	debug: null
};

function wrapConsole(callback) {
	for (let method in originalConsole) {
		const original = console[method];
		console[method] = (...args) => {
			if (callback && typeof callback === 'function') {
				callback.call(null, method, ...args);
			}
			return original.apply(console, args);
		};
		originalConsole[method] = original;
	}
}


wrapConsole((type, ...args) => {
	if (args && args[0] && /^(--)|(🚀)/.test(args[0])) {
		uni.request({
			url: 'http://192.168.0.101:3000/ideConsole/' + type,
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			dataType: 'json',
			data: {
				params: args,
				options: type
			},
			success: function (res) {
				console.log(res);
			}
		});
	}
});

