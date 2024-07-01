<template>
    <button
        class="mi-button"
        :class="[
            type ? 'mi-button--' + type : '',
            buttonSize ? 'mi-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle
            }
        ]"
        @click="handleClick"
    >
        <i v-if="loading" class="mi-icon-loading"></i>
        <i v-if="icon && !loading" :class="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'MiButton',
    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },
    props: {
        type: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        size: {
            type: String,
            default: ''
        },
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
        autofocus: Boolean
    },
    computed: {
        _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        buttonSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
        buttonDisabled() {
            return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.elForm || {}).disabled;
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
};
</script>
