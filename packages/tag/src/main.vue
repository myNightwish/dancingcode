<script>
  export default {
    name: 'MiTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String,
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
    render(h) {
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

