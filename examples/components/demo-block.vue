<template>
    <div
        class="demo-block"
        :class="[blockClass, { hover: hovering }]"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <div class="source">
            <slot name="source"></slot>
        </div>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.default">
                <slot></slot>
            </div>
            <div class="highlight">
                <slot name="highlight"></slot>
            </div>
        </div>
        <div
            class="demo-block-control"
            ref="control"
            @click="isExpanded = !isExpanded"
        >
            <span>{{ controlText }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hovering: false,
            isExpanded: false
        };
    },
    computed: {
        blockClass() {
            return ` demo-${this.$router.currentRoute.path.split('/').pop()}`;
        },
        controlText() {
            return this.isExpanded ? '隐藏代码' : '显示代码';
        },
        codeArea() {
            return this.$el.getElementsByClassName('meta')[0];
        },
        codeAreaHeight() {
            if (this.$el.getElementsByClassName('description').length > 0) {
                return (
                    this.$el.getElementsByClassName('description')[0]
                        .clientHeight +
                    this.$el.getElementsByClassName('highlight')[0]
                        .clientHeight +
                    20
                );
            }
            return this.$el.getElementsByClassName('highlight')[0].clientHeight;
        }
    },
    watch: {
        isExpanded(val) {
            this.codeArea.style.height = val
                ? `${this.codeAreaHeight + 1}px`
                : '0';
            if (!val) {
                this.$refs.control.style.left = '0';
                return;
            }
        }
    }
};
</script>
