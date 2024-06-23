<script>
  export default {
    name: 'MiTag',
    props: {
      type: String,
      closable: Boolean,
      disableTransitions: Boolean,
      // 是否有边框描边
      hit: Boolean,
      // 背景色
      color: String,
      size: String,
      // 主题
      effect: {
        type: String,
        default: 'light',
        validator(val) {
          return ['dark', 'light', 'plain'].indexOf(val) !== -1;
        }
      }
    },
    methods: {
      handleClose(event) {
        // 我容易就没考虑到
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    // render：动态渲染jsx，为什么这样考虑，而不再用模板呢？
      // JSX 的出现简化了createElement函数方式的调用，更接近模板的写法，
    // 这里render函数的参数h，实际就是createElement函数的别名
    // 在babel插件3.4以上，已经被自动注入了该变量：const h = this.$createElement，
    // 不用再这样手动传入了 render(h) 参数，而是直接使用h即可
    render() {
      const { type, tagSize, hit, effect } = this;
      const classes = [
        'mi-tag',
        type ? `mi-tag--${type}` : '',
        tagSize ? `mi-tag--${tagSize}` : '',
        effect ? `mi-tag--${effect}` : '',
        hit && 'is-hit'
      ];
      const tagEl = (
        <span
          class={ classes }
          style={{ backgroundColor: this.color }}
          on-click={ this.handleClick }>
          {/* 注意：这里还有个slot，支持自定义内部 */}
          { this.$slots.default }
          {
            this.closable && <i class="mi-tag__close mi-icon-close" on-click={ this.handleClose }></i>
          }
        </span>
      );
      return this.disableTransitions ? tagEl : <transition name="mi-zoom-in-center">{ tagEl }</transition>;
    }
  };
</script>

