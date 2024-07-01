export default {
  name: 'MiRow',
  componentName: 'ElRow',
  props: {
    // 支持组件渲染成自定义html标签,默认值为 div, 作为 createElement 方法的第一个参数
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格间隔设置,用来指定每一栏之间的间隔，默认间隔为 0
    // col 组件通过获取父组件row的 gutter 计算自己的左右 padding 。
    gutter: Number,
    // 系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。
    // 子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。
    // type 设置布局模式，可选 flex
    type: String,
    // justify 用于设置flex 布局下的水平排列方式
    justify: {
      type: String,
      default: 'start'
    },
    // align 用于设置flex 布局下的垂直排列方式
    align: String
  },
  computed: {
    style() {
      const ret = {};
      // style 通过为 row 组件设置负值 margin 从而抵消掉为 col 组件设置的 padding，
      // 也就间接为“行（row）”所包含的“列（column）”抵消掉了padding。
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },

  render(h) {
    // 组件根据指定自定义元素渲染标签节点，由组件 prop 属性值动态计算添加 class 和 自定义样式（计算属性style），
    // 内部提供一个匿名插槽用于分发内容。
    // 自定义标签渲染
    // h的第二个参数是一个包含模板相关属性的数据对象VNodeData,对象属性如下。
    // {
    // 与 `v-bind:class` 的 API 相同，
    // 接受一个字符串、对象或字符串和对象组成的数组
    //   'class': {
    //     foo: true,
    //     bar: false
    //   },
    //   // 与 `v-bind:style` 的 API 相同，
    //   // 接受一个字符串、对象，或对象组成的数组
    //   style: {
    //     color: 'red',
    //     fontSize: '14px'
    //   },
    //   // ...
    // }
    // 这里插入默认插槽
    return h(this.tag, {
      class: [
        'mi-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align ? `is-align-${this.align}` : '',
        { 'mi-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
};
