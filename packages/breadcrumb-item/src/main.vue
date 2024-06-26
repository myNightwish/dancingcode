<template>
  <span class="mi-breadcrumb__item">
    <span
      ref="link"
      :class="['mi-breadcrumb__inner', to ? 'is-link' : '']"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="mi-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="mi-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>

<script>
// 作为具体的面包屑项，定义每个面包屑项的结构和行为。
// 接收并使用父组件传递的 separator 和 separatorClass 属性。
// 根据 to 和 replace 属性处理路由跳转。
  export default {
    name: 'MiBreadcrumbItem',
    inject: ['miBreadcrumb'],
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: '',
        separatorClass: ''
      };
    },

    mounted() {
      this.separator = this.miBreadcrumb.separator;
      this.separatorClass = this.miBreadcrumb.separatorClass;
      const link = this.$refs.link;
      link.setAttribute('role', 'link');
      link.addEventListener('click', _ => {
        const { to, $router } = this;
        if (!to || !$router) return;
        this.replace ? $router.replace(to) : $router.push(to);
      });
    }
  };
</script>
