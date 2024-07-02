import Skeleton from './src/main.vue';

/* istanbul ignore next */
Skeleton.install = function(Vue) {
  Vue.component(Skeleton.name, Skeleton);
};

export default Skeleton;
