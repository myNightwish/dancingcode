import BreadcrumbItem from './src/main.vue';

/* istanbul ignore next */
BreadcrumbItem.install = function(Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
