<template>
  <transition name="mi-fade-in">
    <!-- 外部transition包裹 -->
    <div
      v-if="visible"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      class="mi-backtop"
      @click.stop="handleClick">
      <slot>
        <mi-icon name="caret-top"></mi-icon>
      </slot>
    </div>
  </transition>
</template>

<script>
import throttle from 'throttle-debounce/throttle';

const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2;

export default {
  name: 'MiBacktop',
  props: {
    // 滚动高度达到此参数值才出现
    visibilityHeight: {
      type: Number,
      default: 100
    },
    // 传入触发滚动的对象的元素选择器，用于对象查找。若元素选择器查找不到，
    // 会提示报错 target is not existed: ${this.target}。
    // 触发滚动的对象
    target: {
      type: String,
      default: ''
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },

  data() {
    return {
      el: null,
      container: null,
      visible: true
    };
  },

  computed: {
    styleBottom() {
      return `${this.bottom}px`;
    },
    styleRight() {
      return `${this.right}px`;
    }
  },

  mounted() {
    this.init();
    this.throttledScrollHandler = throttle(300, this.onScroll);
    this.container.addEventListener('scroll', this.throttledScrollHandler);
  },
  beforeDestroy() {
    this.container.removeEventListener('scroll', this.throttledScrollHandler);
  },
  methods: {
    init() {
      // 默认将document作为触发滚动的对象
      this.container = document;
      this.el = document.documentElement;
      // 若属性target有传入值，则从中查找匹配的元素，找到后将其更新为触发滚动的对象

      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },
    onScroll() {
      // 根据触发滚动的对象垂直滚动的距离（像素）
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;
    },
    handleClick(e) {
      this.scrollToTop();
      this.$emit('click', e);
    },
    scrollToTop() {
      const el = this.el;
      const beginTime = Date.now();
      const beginValue = el.scrollTop;
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
      // 为了效果更好，设置缓动函数
      const frameFunc = () => {
        // 设置速率 500 毫秒内返回页面顶部
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          el.scrollTop = 0;
        }
      };
      rAF(frameFunc);
    }
  }
};
</script>
