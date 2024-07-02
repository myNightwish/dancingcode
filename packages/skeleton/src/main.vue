<template>
  <div>
    <template v-if="uiLoading">
      <div
          :class="['mi-skeleton', animated ? 'is-animated' : '', ]"
          v-bind="$attrs"
      >
        <template v-for="i in count">
          <slot v-if="loading" name="template">
            <mi-skeleton-item
              v-for="item in rows"
              :key="`${i}-${item}`"
              :class="{
                'mi-skeleton__paragraph': item !== 1,
                'is-first': item === 1,
                'is-last': item === rows && rows > 1,
              }"
              variant="p"
            >
          </mi-skeleton-item>
          </slot>
        </template>
      </div>
    </template>
    <template v-else>
      <slot v-bind="$attrs"></slot>
    </template>
  </div>
</template>

<script>
import MiSkeletonItem from './item.vue';
export default {
  name: 'MiSkeleton',
  components: {
    MiSkeletonItem
  },
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 4
    },
    loading: {
      type: Boolean,
      default: true
    },
    throttle: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      uiLoading: this.throttle <= 0 ? this.loading : false
    };
  },
  watch: {
    loading: {
      handler(loading) {
        if (this.throttle <= 0) {
          this.uiLoading = loading;
          return;
        }
        // 节流处理
        if (loading) {
          clearTimeout(this.timeoutHandle);
          this.timeoutHandle = setTimeout(() => {
            this.uiLoading = this.loading;
          }, this.throttle);
        } else {
          this.uiLoading = loading;
        }
      },
      immediate: true
    }
  }
};
</script>
