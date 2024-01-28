import config from '../config';

const BASE_CONFIG = {
    baseURL: config.url,
    headers: {
        'Content-type': 'application/json'
    }
};
// 简单的http请求封装，不封装任何加密相关、loading等配置，唯一配置的是mock数据
const httpAxios = {
    post(api, params = {}, options = {}) {
        console.log("🚀 ~ file: httpAxios.js:12 ~ post ~ options", options);
        return new Promise((resolve, reject) => {
            my.request({
                url: (options.specialDomain ? config[options.specialDomain] : BASE_CONFIG.baseURL) + api,
                method: 'POST',
                data: {
                    ...params
                },
                headers: {
                    'content-type': options.specialContentType ? options.specialContentType : BASE_CONFIG.headers['Content-type'],
                },
                dataType: 'json',
                success: function (res) {
                    resolve(res)
                },
                fail: function (res) {
                    reject(res)
                },
                complete: function (res) {
                }
            });
        })
    },
    get(api, params) {
        return new Promise((resolve, reject) => {
            my.request({
                url: (options.specialDomain ? config[options.specialDomain] : BASE_CONFIG.baseURL) + api,
                method: 'GET',
                data: {
                    ...params
                },
                headers: {
                    'content-type': options.specialContentType ? options.specialContentType : BASE_CONFIG.headers['Content-type'],
                },
                dataType: 'json',
                success: function (res) {
                    resolve(res)
                },
                fail: function (res) {
                    reject(res)
                },
                complete: function (res) {
                },
            });
        })
    }
};

export {
    httpAxios
};
