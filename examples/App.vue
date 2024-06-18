<template>
    <div id="app" :class="{ 'is-component': isComponent }">
        <main-header ></main-header>
        {{ lang }}
        <div class="main-cnt">
            <router-view></router-view>
        </div>
        <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
// import { use } from 'main/locale';
export default {
    name: 'App',
    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    },
};
</script>

<style>
@import 'highlight.js/styles/color-brewer.css';
@import 'assets/styles/common.css';
@import 'assets/styles/fonts/style.css';
</style>
