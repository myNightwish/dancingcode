<template>
    <button
        class="mi-button"
        @click="handleClick"
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
    >
        <i class="mi-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'mi-button',
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
        size: String,
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        loading: Boolean,
        disabled: Boolean,
        autofocus: Boolean
    },
    computed: {
        buttonSize() {
            // todo： 暂时不支持，等form组件时写这里
            // return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
            return this.size;
        },
        buttonDisabled() {
            return this.disabled;
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
};
</script>
