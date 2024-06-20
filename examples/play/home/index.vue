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
      <mi-avatar icon="el-icon-user-solid"/>
      <mi-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></mi-avatar>
      <mi-avatar src="https://cube.elemecdn.com/0png.png"></mi-avatar>

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