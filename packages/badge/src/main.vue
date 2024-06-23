<template>
  <div class="mi-badge">
    <slot></slot>
    <transition name="mi-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        class="mi-badge__content"
        :class="[
          type ? 'mi-badge__content--' + type : null,
          // 当组件和其它组件配合使用，包裹内容时提供给插槽值 $slots.default 为 [Vnode],
          // 设置 is-fixed固定上标位置-右上角。
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]"
        v-text="content">
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MiBadge',
  props: {
    value: [String, Number],
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      validator(val) {
        return ['primary', 'success', 'warning', 'info', 'danger'].indexOf(val) > -1;
      }
    }
  },

  computed: {
    content() {
      if (this.isDot) return;

      const value = this.value;
      const max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }

      return value;
    }
  }
};
</script>
