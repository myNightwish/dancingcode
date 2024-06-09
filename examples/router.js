import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'component',
        //使用vue的异步组件技术 , 可以实现按需加载 .
        component: resolve => require(['./components/HelloWorld.vue'], resolve)
    },
    {
        path: '/test',
        name: 'test',
        component: resolve => require(['./docs/loading.md'], resolve)
    }
];

export default new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
});
