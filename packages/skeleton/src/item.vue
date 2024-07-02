<template>
    <div :class="['mi-skeleton__item', `mi-skeleton__${variant}`]">
        <img-placeholder v-if="variant === 'image'" />
        <slot></slot>
    </div>
</template>

<script>
import ImgPlaceholder from './img-placeholder';

export default {
  name: 'MiSkeletonItem',
  components: {
    // 这里是确保组件被注册时的名称与其 name 属性一致
    [ImgPlaceholder.name]: ImgPlaceholder
  },
  props: {
    variant: {
      type: String,
      default: 'text'
    }
  }
};
</script>