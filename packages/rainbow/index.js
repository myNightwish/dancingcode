import Rainbow from './src/main.vue';
import Vue from 'vue';

Rainbow.install = function () {
    Vue.component(Rainbow.name, Rainbow);
};
export default Rainbow;
