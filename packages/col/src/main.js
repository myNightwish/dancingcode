export default {
  name: 'MiCol',
  props: {
    // span 默认值 24，对应栅格系统24分栏
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格左侧的间隔格数
    offset: Number,
    // 栅格向右移动格数
    pull: Number,
    // 栅格向左移动格数
    push: Number,
    // 响应式布局设置
    // 响应式栅格数或者栅格属性对象 number/object (例如： {span: 4, offset: 4})
    // xs <768px  sm ≥768px  md ≥992px  lg ≥1200px  xl ≥1920px
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      // 获取父实例 根据 compontName 属性 判断是组件 row,获取父组件 row 的 gutter值 
      while (parent && parent.$options.componentName !== 'MiRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }
    // span 栅格占据的列数，通过 width 来实现
    // offset 栅格左侧的间隔格数，通过 margin-left 实现
    // push 栅格向右移动格数，通过 left 实现
    // pull 栅格向左移动格数，通过 right 实现 
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `mi-col-${prop}-${this[prop]}`
            : `mi-col-${this[prop]}`
        );
      }
    });
    // 响应式布局样式动态计算。预设四个响应尺寸：xs sm md lg。
    // 传入数字的话只会影响 span，还可以传入对象 {span: 4, offset: 4},
    // 属性可选范围 span/offset/pull/push 
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`mi-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `mi-col-${size}-${prop}-${props[prop]}`
              : `mi-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['mi-col', classList],
      style
    }, this.$slots.default);
  }
};
