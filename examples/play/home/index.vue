<template>
  <div class="home_wrapper">
      <mi-backtop target="#palyapp"></mi-backtop>
      <div class="content_area" @click="hidden=!hidden">
        welcome to My Vue.js UI By WebPack!
      </div>
      <!-- 标记: badge-->
      <!-- <mi-badge :is-dot="true" :hidden="hidden" type="warning"> -->
      <mi-badge :value="10" :hidden="hidden" type="warning">
        <mi-button type="success" plain>成功按钮</mi-button>
      </mi-badge>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      hidden: false,
      badgeNum: 10
    }
  }
}
</script>
<style lang="scss">
  .home_wrapper {
    height: 180vh;
  }
</style>