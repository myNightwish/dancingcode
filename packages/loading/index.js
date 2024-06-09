import Loading from './src/main.vue';
import Vue from 'vue';

// 对外提供安装方法
Loading.install = function () {
    // 注册组件
    Vue.component(Loading.name, Loading);
};
// 直接导出去，引入
export default Loading;
