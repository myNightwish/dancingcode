import Vue from 'vue';
import App from './play.vue';
import 'packages/theme-chalk/src/index.scss';
import router from './router.js';
import demoBlock from './components/demo-block.vue';
// 开发时调试：
import MiUI from '../src/index';
// 发包前测试: 脚本的时候也可以测试脚本配置正确与否，否则导致打出的产物不及预期：
// import MiUI from '../lib/mi-element-ui.js';

// 发包后，验证生效且可用：
// import MiUI from 'mi-element-ui';

Vue.use(MiUI);
// 全局注册组件
Vue.component('DemoBlock', demoBlock);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
