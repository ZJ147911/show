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
		fetch('http://192.168.0.101:3000/ideConsole/' + type, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				params: args,
				options: type
			})
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	}
});
