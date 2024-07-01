<template>
  <div class="mi-breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>

<script>
// 作为面包屑导航的容器组件，定义面包屑的整体结构和行为。
// 提供 separator 和 separatorClass 属性，用于配置分隔符。
// 通过 provide 向子组件传递数据。
export default {
  name: 'MiBreadcrumb',
  provide() {
      return {
        miBreadcrumb: this
      };
  },
  props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorClass: {
        type: String,
        default: ''
      }
  },
};
</script>
