/**
 * @Author:      allenAugustine
 * @Email:       iallenaugustine@gmail.com  -  misterji0708@qq.com
 * @DateTime:    2019-05-07 14:45:04
 * @Description: 请求
 */

import config from '../config/index.js';
import HTTPS from './public.js';
const isDev = process.env.NODE_ENV === 'development';
const HOST = isDev ? '' : config.host;

const REQUESTS = {
    //获取首页数据
    getIndexData() {
        return HTTPS.fetchGet(HOST + '/addons/litestore/api.index/index')
    },
};

export default REQUESTS;
