<!-- 函数式组件 -->
<template functional>
  <div
    v-bind="data.attrs"
    :class="[data.staticClass, 'mi-divider', `mi-divider--${props.direction}`]"
    v-on="listeners"
  >
    <div
      v-if="slots().default && props.direction !== 'vertical'"
      :class="['mi-divider__text', `is-${props.contentPosition}`]"
     >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    },
    contentPosition: {
      type: String,
      default: 'center',
      validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  }
};

</script>
