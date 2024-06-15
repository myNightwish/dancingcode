import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import hljs from 'highlight.js';
import demoBlock from './components/demo-block.vue';
import 'highlight.js/styles/stackoverflow-light.css';
import '../packages/theme-chalk/src/index.scss';

// 开发时调试：
import MiUI from '../src/index';
// 发包前测试：
// import MiUI from '../lib/mi-ui.common.js';
// 发包后，验证生效且可用：
// import MiUI from 'mi-element-ui';

// 全局注册组件
Vue.component('demo-block', demoBlock);
Vue.config.productionTip = false;
Vue.use(MiUI);

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
