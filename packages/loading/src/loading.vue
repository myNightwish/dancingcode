<template>
  <transition
      name="mi-loading-fade" 
      @before-enter="handleBeforeEnter"
      @enter="handleEnter"
      @after-enter="handleAfterEnter"
      @before-leave="handleBeforeLeave"
      @leave="handleLeave"
      @after-leave="handleAfterLeave"
  >
      <div
        v-show="visible"
        class="mi-loading-mask"
        :style="{ backgroundColor: background || '' }"
        :class="[customClass, { 'is-fullscreen': fullscreen }]">
        <div class="mi-loading-spinner">
            <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
              <circle class="path" cx="50" cy="50" r="20" fill="none"/>
            </svg>
            <i v-else :class="spinner"></i>
            <p v-if="text" class="mi-loading-text">{{ text }}</p>
        </div>
      </div>
  </transition>
</template>

<script>
  export default {
    name: 'MiLoading',
    data() {
      return {
        text: null,
        spinner: null,
        background: null,
        fullscreen: true,
        visible: false,
        customClass: ''
      };
    },
    methods: {
      toggle() {
      this.visible = !this.visible;
    },
    handleBeforeEnter(el) {
      console.log('Before Enter');
    },
    handleEnter(el, done) {
      console.log('Enter');
      done();
    },
    handleAfterEnter(el) {
      console.log('After Enter');
    },
    handleBeforeLeave(el) {
      console.log('Before Leave');
    },
    handleLeave(el, done) {
      console.log('Leave');
      done();
    },
      handleAfterLeave() {
        console.log('after-leave');
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      }
    }
  };
</script>
