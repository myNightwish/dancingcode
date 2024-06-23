<template>
  <div class="home_wrapper">
      <mi-backtop target="#palyapp"></mi-backtop>
      <div class="content_area">
        welcome to My Vue.js UI By WebPack!
      </div>
      <mi-tag
        :closable="tagConf.closable" 
        :type="tagConf.type"
        :size="tagConf.size"
        :effect="tagConf.effect"
        @click="handleClick"
      >
        {{tagConf.text}}
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
  },
  methods: {
    handleClick() {
      this.tagConf.text='changed-hello'
    }
  }
}
</script>
<style lang="scss">
  .home_wrapper {
    height: 180vh;
  }
</style>