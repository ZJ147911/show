import { httpAxios } from './axios';
import Encrypt from './security/encrypt';
const encyTypeEnum = {
	encrypt: 'C005',
	aesEncrypt: 'C006'
};

const { GibberishAES, CryptoJS, JSEncrypt } = Encrypt;

/**
 * @desc: 设置loading的open和close函数
 * @param {open} Function - loading打开的函数
 * @param {close} Function - loading关闭的函数
 */
const Loading = {
	open() {
		uni.showLoading({
			mask: true
		});
	},
	close() {
		uni.hideLoading(); // Loading 关闭
	}
};

const keyPrefix = 'h5-encrypt-decrypt-cache'; // 上下行加密接口缓存的密钥信息
const upKeyPrefix = 'h5-encrypt-cache'; // 全报文接口缓存的nonce
const clearCacheCode = ['A99999', 'A11003', 'A11004']; // 业务api报错清除storage的错误码
const reqErrorRetry = 1; // 加密因子失效重新请求次数
let encryptingIng = false;
let reqList = [];
const traceLogId = function (n = 18) {
	// 生成日志号
	let randomNum = [];
	for (let i = 0; i < n - 13; i++) {
		randomNum.push(Math.floor(Math.random() * 10));
	}
	return new Date().getTime() + randomNum.join('');
};
// 生成openId
function generateOpenId() {
	let keyData = storage.getValueFromCache(keyPrefix, 'openId');
	if (keyData) {
		return keyData;
	}
	const randomNum = `${new Date().getTime()}-${parseInt(Math.random() * 100000, 10)}`;
	const openId = `REDBAG-${randomNum}`;
	return openId;
}
const Http = {
	server(api, params, requestConfig = {}, resolve, reject, callback) {
		let type = (requestConfig.hasOwnProperty('method') ? requestConfig.method : 'post').toLowerCase();
		if (!httpAxios[type]) {
			if (requestConfig.showLoading) {
				Loading.close();
			}
			reject('请求方法名称写错了');
			return;
		}
		httpAxios[type](api, params, requestConfig).then(
			(res) => {
				if (requestConfig.showLoading) {
					Loading.close();
				}
				if (!res.data.success && clearCacheCode.indexOf(res.data.errorCode) > -1) {
					if (requestConfig.apiCurRetryCount < reqErrorRetry) {
						requestConfig.apiCurRetryCount += 1;
						Http.server(api, params, requestConfig, resolve, reject, callback);
						return;
					}
				}
				if (requestConfig.autoLogin && callback && ['100003', '100008'].includes(res.data.errorCode)) {
					callback(params, res, resolve, reject);
					return;
				}
				if (requestConfig.isEncrypt) {
					if (!res.data.success && clearCacheCode.indexOf(res.data.errorCode) > -1) {
						uni.removeStorageSync(upKeyPrefix);
					}
				}
				if (requestConfig.isAesEncrypt) {
					if (!res.data.success) {
						if (clearCacheCode.indexOf(res.data.errorCode) > -1) {
							uni.removeStorageSync(keyPrefix);
						}
						resolve(res);
					} else {
						EncryptFnc.getEncryptRes(res.data.result).then((decryptRes) => {
							let _decryptRes = {
								status: 200,
								data: {
									result: JSON.parse(decryptRes),
									errorCode: null,
									errorMsg: null,
									success: true
								}
							};
							resolve(_decryptRes);
						});
					}
					return;
				}
				resolve(res);
			},
			(err) => {
				if (requestConfig.showLoading) {
					Loading.close();
				}
				reject(err);
			}
		);
	},
	/**
	 * @description:	请求方法，封装全报文加密(H5、App渠道)、loading配置、mock数据配置、拦截函数，增加公共参数
	 * @param {String} api							接口请求url地址 例如：/mapi/detail/return
	 * @param {Object} params						接口请求参数 例如：{productNo: '12345678'}
	 * @param {Object} requestConfig		接口请求配置参数 (具体字段如下：)
	 * @param {String} requestConfig.method 		(默认值POST) - 接口请求方式，为post、get方式
	 * @param {String} requestConfig.gapiStr		划分不同平台的agreeId,用于gapi接口 (传了gapiStr即视为需要agreeId和encyType)
	 * @param {String} requestConfig.phoneNo		手机号
	 * @param {String} requestConfig.specialDomain				字符串为utils/config中所配置请求域名的key 不传为公司内默认请求域名
	 * @param {String} requestConfig.specialContentType		字符串为请求头内的content-type值 不传默认为'application/json'
	 * @param {Boolean} requestConfig.showLoading					(默认值false) 是否显示loading
	 * @param {Boolean} requestConfig.autoLogin						(默认值false) 是否需要调用重新登录
	 * @param {Boolean} requestConfig.isEncrypt						(默认值false) 是否需要全报文加密
	 * @param {Boolean} requestConfig.isAesEncrypt				(默认值false) 是否需要上下行加密
	 * requestConfig.isAesEncrypt		注: isEncrypt、isAesEncrypt不可同时为true 同时为true时只取isEncrypt
	 * @param {Boolean} requestConfig.isMock：						(默认值false) 是否取用本地作为mock数据，只有在本地开发环境才有用
	 * requestConfig.isMock					注: (使用前提条件：设置mock数据的mockUrl)
	 * @param {Function} callback
	 */
	run(api, params = {}, requestConfig = {}, callback) {
		return new Promise((resolve, reject) => {
			if (!api) {
				return;
			}
			if (requestConfig.showLoading) {
				Loading.open();
			}
			requestConfig.apiCurRetryCount = 0;
			// 公有参数
			params.traceLogId = traceLogId();
			params.requestSystem = 'common-wxplugin';

			if (requestConfig.isAesEncrypt) {
				// 上下行加密
				reqList.push(Object.assign({}, { api, params, requestConfig, callback, resolve, reject }));
				function encryptAndReq() {
					encryptingIng = true;
					let { api, params, requestConfig, callback, resolve, reject } = reqList.shift();
					EncryptFnc.buildAesEncryptParams(JSON.stringify(params))
						.then((encryptRes) => {
							if (!encryptRes.success) {
								if (requestConfig.showLoading) {
									Loading.close();
								}
								resolve({
									success: false,
									errorMsg: '安全加密失败，请稍后再试'
								});
							} else {
								if (requestConfig.hasOwnProperty('gapiStr')) encryptRes.result.encyType = encyTypeEnum.aesEncrypt;
								Http.server(api, encryptRes.result, requestConfig, resolve, reject, callback);
							}
							encryptingIng = false;
							if (reqList && reqList.length > 0) {
								encryptAndReq();
							}
						})
						.catch((err) => {
							encryptingIng = false;
							if (reqList && reqList.length > 0) {
								encryptAndReq();
							}
						});
				}
				if (!encryptingIng) {
					encryptAndReq();
				}
				return;
			}
			// 上行加密
			if (requestConfig.isEncrypt) {
				EncryptFnc.asyncBuildCAParams(params).then((res) => {
					if (requestConfig.hasOwnProperty('gapiStr')) res.encyType = encyTypeEnum.encrypt;
					Http.server(api, res, requestConfig, resolve, reject, callback);
				});
				return;
			}
			Http.server(api, params, requestConfig, resolve, reject, callback);
		});
	}
};
export default Http;

const state = {
	serverRsaPublicKey: '',
	clientKey: '',
	aesKey: ''
};
const EncryptFnc = {
	// 全报文加密（非借助客户端交互进行加密）- 准备入参
	asyncBuildCAParams(params) {
		let paramStr = JSON.stringify(params);
		return new Promise((resolve, reject) => {
			EncryptFnc.getNonce({
				productNo: params.productNo,
				requestType: 'H5'
			})
				.then((res) => {
					if (res.data.success) {
						if (!uni.getStorageSync(upKeyPrefix)) {
							storage.setValueInCache(upKeyPrefix, res.data.result);
						}
						const rk = Encrypt.generateMixed();
						const publicKey = res.data.result.nonce;
						const key = Encrypt.h5CommonRsa(publicKey, rk);
						const data = Encrypt.AES_EncodeForCA(paramStr, rk).replace(/\n/g, '');
						const sign = Encrypt.h5MD5(paramStr);
						const finalParam = { data, key, sign, productNo: params.productNo };
						// console.log(finalParam);
						resolve(finalParam);
						return;
					}
					Loading.close();
				})
				.catch((e) => {
					Loading.close();
					reject(e);
				});
		});
	},
	// 上下行加密（非借助客户端交互进行加密）- 准备入参
	buildAesEncryptParams(text) {
		return new Promise((resolve, reject) => {
			EncryptFnc.getPublicKey()
				.then(
					(res) => {
						if (!res.data.success) {
							resolve(res.data);
							return;
						}

						state.serverRsaPublicKey = res.data.result;
						state.clientKey = EncryptFnc.generateClientKey();
						let openId = generateOpenId();
						let params = {
							openId: openId,
							clientRsaPublicKey: state.clientKey.clientRsaPublicKey
						};
						let RSAUtils = new JSEncrypt();
						RSAUtils.setPublicKey(res.data.result);
						let encData = RSAUtils.encrypt(JSON.stringify(params));
						EncryptFnc.getAesKey({ encData: encData })
							.then(
								(aesRes) => {
									if (aesRes.data.success) {
										RSAUtils.setPrivateKey(state.clientKey.clientRsaPrivateKey);
										let rsaDecrypt = RSAUtils.decryptLong(aesRes.data.result);
										let data = JSON.parse(rsaDecrypt);
										RSAUtils.setPublicKey(state.serverRsaPublicKey);
										let verified = RSAUtils.verify(state.clientKey.clientRsaPublicKey, data.clientRsaPublicKeySign, CryptoJS.SHA512);
										if (verified) {
											state.aesKey = data.aesKey;
											GibberishAES.size(256);
											let encData = GibberishAES.aesEncrypt(text, state.aesKey);
											RSAUtils.setPrivateKey(state.clientKey.clientRsaPrivateKey);
											let aesKeySign = RSAUtils.sign(state.aesKey, CryptoJS.SHA512, 'sha512');
											const entryKey = {
												encryptedAesKey: aesRes.data.result,
												serverPublicKey: res.data.result,
												clientRsaKey: state.clientKey,
												openId: openId
											};
											if (!uni.getStorageSync(keyPrefix)) {
												storage.setValueInCache(keyPrefix, entryKey);
											}
											resolve({
												result: {
													openId: openId,
													aesKeySign: aesKeySign,
													encData: encData
												},
												success: true
											});
										}
									} else {
										resolve(aesRes.data);
									}
								},
								(err) => {
									reject(err);
								}
							)
							.catch((err) => {
								reject(err);
							});
					},
					(err) => {
						reject(err);
					}
				)
				.catch((err) => {
					reject(err);
				});
		});
	},
	// 上下行加密（非借助客户端交互进行加密）- 拿到解密结果
	getEncryptRes(text) {
		return new Promise((resolve, reject) => {
			GibberishAES.size(256);
			let decData = GibberishAES.aesDecrypt(text, state.aesKey);
			resolve(decData);
		});
	},
	getNonce(params) {
		let upKeyData = storage.getValueFromCache(upKeyPrefix, 'nonce');
		if (upKeyData) {
			return new Promise((resolve, reject) => {
				resolve({
					// 包装统一格式
					data: {
						success: true,
						result: {
							nonce: upKeyData
						}
					}
				});
			});
		}
		return httpAxios.post('/gapi/mapi-gateway/applyLoginFactor', params);
	},
	getPublicKey() {
		let keyData = storage.getValueFromCache(keyPrefix, 'serverPublicKey');
		if (keyData) {
			return new Promise((resolve, reject) => {
				resolve({
					// 包装统一格式
					data: {
						success: true,
						result: keyData
					}
				});
			});
		}
		return httpAxios.post('/gapi/mapi-gateway/auth/getPublicKey');
	},
	getAesKey(params) {
		let keyData = storage.getValueFromCache(keyPrefix, 'encryptedAesKey');
		if (keyData) {
			return new Promise((resolve, reject) => {
				resolve({
					// 包装统一格式
					data: {
						success: true,
						result: keyData
					}
				});
			});
		}
		return httpAxios.post('/gapi/mapi-gateway/auth/getAesKey', params);
	},
	generateClientKey() {
		let keyData = storage.getValueFromCache(keyPrefix, 'clientRsaKey');
		if (keyData) {
			return keyData;
		}
		const clientKey = {};
		const RSAUtils = new JSEncrypt();
		clientKey.clientRsaPrivateKey = RSAUtils.getPrivateKeyB64();
		clientKey.clientRsaPublicKey = RSAUtils.getPublicKeyB64();
		return clientKey;
	}
};

// 存储
const storage = {
	npsScene: {},
	prefix: 'npsScene_',
	expireTime: 3 * 60 * 1000, // 缓存时间 ms
	setValueInCache(key, val) {
		if (npsScene[`${prefix}${key}`] && npsScene[`${prefix}${key}`].st) {
			return npsScene[`${prefix}${key}`].data;
		} else {
			npsScene[`${prefix}${key}`] = uni.getStorageSync(`${prefix}${key}`);
			return npsScene[`${prefix}${key}`]?.data;
		}

		let startTime = Date.now();
		npsScene[`${prefix}${key}`] = { data: val, st: startTime };
		uni.setStorageSync(`${prefix}${key}`, JSON.stringify(npsScene[`${prefix}${key}`]));
	},
	getValueFromCache(name, key) {
		const parse = JSON.parse(uni.getStorageSync(name) || '{}');
		if (new Date().getTime() - parse.st >= storage.expireTime) {
			uni.removeStorageSync(name);
			return undefined;
		}
		if (parse.data && parse.data[key]) {
			return parse.data[key] || undefined;
		}
		return undefined;
	}
};
