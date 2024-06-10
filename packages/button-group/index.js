import buttonGroup from './src/button-group.vue';

buttonGroup.install = function(Vue) {
  Vue.component(buttonGroup.name, buttonGroup);
};

export default buttonGroup;