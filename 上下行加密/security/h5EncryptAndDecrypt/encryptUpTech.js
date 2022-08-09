/* eslint-disable no-underscore-dangle */
import config from '@/util/config';
import shareData from '@/util/shareData';
// import encrypt from '@/util/security/encrypt';
import securityUtil from '@/util/security/util/index';

// basic设置
const EXPIRETIME = 50 * 1000;
// const PREFIX = 'OPEN_PUBLIC_KEY';

const PREFIXEnum = {
    PREFIX_true: 'OPEN_PUBLIC_KEY_5G',
    PREFIX_http2: 'OPEN_PUBLIC_KEY2_5G'
};

const getFactorUrlEnum = {
    PREFIX_true: '/mapi/get/api/applyLoginFactor',
    PREFIX_http2: '/gapi/mapi-gateway/applyLoginFactor'
};

let http = null;
let publicKeyStore = {};

// 设置key缓存
const setPublicKeyInCache = (keyInSession, val, time = 0) => {
    const currentTime = new Date().getTime();
    publicKeyStore = publicKeyStore || {};
    const data = {
        data: val,
        timeout: currentTime + time
    };
    publicKeyStore[keyInSession] = data;
    shareData.sessionSet(keyInSession, data);
};

// 获取key缓存
const getPublicKeyFromCache = (keyInSession) => {
    publicKeyStore = publicKeyStore || {};
    const val = publicKeyStore[keyInSession] || shareData.sessionGet(keyInSession);
    const currentTime = new Date().getTime();
    if (val && val.data && (currentTime < val.timeout)) {
        return val.data;
    }
    return undefined;
};

function _encryptParam(originParams = {}, publicKey) {
    /* eslint new-cap: "off" */
    /* eslint no-undef: "off" */
    const stringifyParams = JSON.stringify(originParams);
    const rk = securityUtil.randomString16();
    const erk = securityUtil.rsaEncryptByJSEncrypt(publicKey, rk);
    const sign = securityUtil.md5ByCryptoJS(stringifyParams);
    const cdata = securityUtil.aesEncrypt128(stringifyParams, rk).replace(/\n/g, '');
    const finalData = {
        data: cdata,
        key: erk,
        sign,
        encyType: 'C005'
    };
    console.log(`[ activity ] originParams: ${JSON.stringify(originParams)}`);
    console.log(`[ activity ] finalData: ${JSON.stringify(finalData)}`);
    return finalData;
}

// 获取public可以
function _getPublicKey(productNo, options) {
    return new Promise((resolve, reject) => {
        if (!productNo) {
            console.log('[ encryptUpTech ] getPublicKey');
            reject(new Error('productNo cannot be null'));
            return;
        }

        const prefixKey = `PREFIX_${options.encryptTech.toString()}`;
        const keyName = `${PREFIXEnum[prefixKey]}_${productNo}`;

        // 获取缓存中的publicKey
        const publicKey = getPublicKeyFromCache(keyName);
        if (publicKey) {
            resolve({
                key: publicKey
            });
            return;
        }

        const url = getFactorUrlEnum[prefixKey];
        const param = {
            productNo,
            requestType: 'H5'
        };

        if (options.encryptTech === 'http2') {
            param.agreeId = config.agreeId || undefined;
        }
        http.post(url, param).then((res) => {
            console.log(res);
            const data = res.data;
            if (data && data.result && data.result.nonce) {
                setPublicKeyInCache(keyName, data.result.nonce, EXPIRETIME);
                resolve({
                    key: data.result.nonce
                });
            } else {
                reject(new Error('request data fail'));
            }
        }, (err) => {
            console.log(err);
            reject(err);
        });
    });
}

function encryptUpTech(api, info = {}, instance, options) {
    return new Promise((resolve, reject) => {
        // productNo 为 唯一key
        let productNo = '';
        const hasRandomKey = shareData.sessionGet(shareData.constant.RANDOM_PUBLICK_KEY);
        if (hasRandomKey) {
            productNo = hasRandomKey;
        } else {
            const randomVal = `${new Date().getTime()}${Math.round(Math.random() * 100000000)}`;
            shareData.sessionSet(shareData.constant.RANDOM_PUBLICK_KEY, randomVal);
            productNo = randomVal;
        }

        if (!productNo) {
            reject(new Error('productNo cannot be null'));
            return;
        }

        http = instance;
        _getPublicKey(productNo, options).then((res0) => {
            console.log('res0---', res0);
            console.log(JSON.stringify(info));
            const enParams = _encryptParam(info, res0.key);
            enParams.productNo = productNo;
            http.post(api, enParams).then((res) => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        }, (err) => {
            reject(err);
        }).catch((err) => {
            console.error(err);
        });
    });
}

export const encryptUp = encryptUpTech;
