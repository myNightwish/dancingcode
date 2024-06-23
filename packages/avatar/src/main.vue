<script>
export default {
  name: 'MiAvatar',
  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val);
        }
        return typeof val === 'number';
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ['circle', 'square'].includes(val);
      }
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover'
    }
  },
  data() {
    return {
      isImageExist: true
    };
  },
  computed: {
    avatarClass() {
      const { size, icon, shape } = this;
      let classList = ['mi-avatar'];

      if (size && typeof size === 'string') {
        classList.push(`mi-avatar--${size}`);
      }

      if (icon) {
        classList.push('mi-avatar--icon');
      }

      if (shape) {
        classList.push(`mi-avatar--${shape}`);
      }

      return classList.join(' ');
    }
  },
  methods: {
    handleError() {
      const { error } = this;
      const errorFlag = error ? error() : undefined;
      if (errorFlag !== false) {
        this.isImageExist = false;
      }
    },
    renderAvatar() {
      const { icon, src, alt, isImageExist, srcSet, fit } = this;

      if (isImageExist && src) {
        return <img
          src={src}
          onError={this.handleError}
          alt={alt}
          srcSet={srcSet}
          style={{ 'object-fit': fit }}/>;
      }

      if (icon) {
        return (<i class={icon} />);
      }
      // 最后插槽自定义
      return this.$slots.default;
    }
  },

  render() {
    const { avatarClass, size } = this;
{/*  // size 为数值时 设置内联样式 覆盖默认尺寸 */}
    const sizeStyle = typeof size === 'number' ? {
      height: `${size}px`,
      width: `${size}px`,
      lineHeight: `${size}px`
    } : {};

    return (
      <span class={ avatarClass } style={ sizeStyle }>
        {
          // 生成图标、图片或者字符等不同类型元素VNode
          this.renderAvatar()
        }
      </span>
    );
  }
};
</script>
