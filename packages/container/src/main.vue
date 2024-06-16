<template>
  <section class="mi-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'MiContainer',
    componentName: 'MiContainer',
    props: {
      direction: String
    },
    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        // todo: 这里为啥这样设计？注册时name是MiFooter，渲染时name是mi-footer？
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'mi-header' || tag === 'mi-footer';
          })
          : false;
      }
    }
  };
</script>
