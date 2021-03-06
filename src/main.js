import Vue from 'vue';
import App from './App';
import router from './router';
import lazyLoad from 'vue-lazyload';
import store from './store/index.js';
import ArrayExpand from './utils/Array.expand.js';
import Requests from './api/index.js';
import Storage from './utils/Storage.js';
import config from './config/index.js';

global.ignoreMap = ['Index', 'Follow', 'Search', 'SearchResult', 'ShopList', 'Shop'];
global.host = config.host;

ArrayExpand();

import 'amfe-flexible/index.js';
import './styles/common.less';
import './styles/animate.less';
import './styles/variable.less';


Vue.prototype.$api = Requests;
Vue.prototype.$storage = Storage;

Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
