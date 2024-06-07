import Vue from 'vue';
import App from './App.vue';
// import MeUI from '../src/index';
import MeUI from '../lib/me-vue-ui.common.js';

import router from './router.js';

import hljs from 'highlight.js';
import demoBlock from './components/demo-block';
import 'highlight.js/styles/stackoverflow-light.css';

// 全局注册组件
Vue.component('demo-block', demoBlock);
Vue.config.productionTip = false;

Vue.use(MeUI);

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  document.title = 'me-ui';
});

// todo: main与vue之间的关系是什么？他们运作流程图怎样？草稿纸画出来
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
