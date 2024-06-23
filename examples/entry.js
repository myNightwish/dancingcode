import Vue from 'vue';
import App from './app.vue';
import routes from './route.config.js';
import 'highlight.js/styles/stackoverflow-light.css';
import 'packages/theme-chalk/src/index.scss';
import demoBlock from './components/demo-block.vue';
import VueRouter from 'vue-router';
import SideNav from './components/side-nav';
import FooterNav from './components/footer-nav';
import MainFooter from './components/footer';
import MainHeader from './components/header';
// 开发时调试：
import MiUI from '../src/index';
// 发包前测试: 脚本的时候也可以测试脚本配置正确与否，否则导致打出的产物不及预期：
// import MiUI from '../lib/mi-element-ui.js';

// 发包后，验证生效且可用：
// import MiUI from 'mi-element-ui';
import Element from 'element-ui';

Vue.use(MiUI);
Vue.use(Element);
// 全局注册组件
Vue.component('DemoBlock', demoBlock);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component('DemoBlock', demoBlock);
Vue.component('MainFooter', MainFooter);
Vue.component('MainHeader', MainHeader);
Vue.component('SideNav', SideNav);
Vue.component('FooterNav', FooterNav);

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
  });

// todo: main与vue之间的关系是什么？他们运作流程图怎样？草稿纸画出来
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
