<template>
  <div class="home_wrapper">
      <mi-backtop target="#palyapp"></mi-backtop>
      <div class="content_area" @click="hidden=!hidden">
        welcome to My Vue.js UI By WebPack!
      </div>
      <mi-tag
        :text="tagConf.text"
        :closable="tagConf.closable" 
        :type="tagConf.type" :size="tagConf.size"
        :effect="tagConf.effect"
      >
        标签
      </mi-tag>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tagConf: {
        text: 'hello',
        type: 'success',
        size: 'large',
        closable: true,
        effect: 'plain'
      }
    }
  }
}
</script>
<style lang="scss">
  .home_wrapper {
    height: 180vh;
  }
</style>