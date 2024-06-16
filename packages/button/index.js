import MiButton from './src/button.vue';

MiButton.install = function(Vue) {
  Vue.component(MiButton.name, MiButton);
};

export default MiButton;