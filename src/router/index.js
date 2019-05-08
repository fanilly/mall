import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index/Index.vue';


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {
                keepAlive: true,
                title: '首页',
                locationAssign: true
            }
        }
    ]
});

export default router;