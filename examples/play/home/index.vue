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
      <mi-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <mi-button style="float: right; padding: 3px 0" type="text">❌</mi-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
    </mi-card>
    <mi-divider content-position="left">少年包青天</mi-divider>
    <span>饿了别叫妈, 叫饿了么</span>
    <mi-divider><i class="mi-icon-mobile-phone"></i></mi-divider>
    <span>为了无法计算的价值</span>
    <mi-divider content-position="right">阿里云</mi-divider>
    <mi-breadcrumb separator=">">
      <mi-breadcrumb-item>首页</mi-breadcrumb-item>
      <mi-breadcrumb-item>活动管理</mi-breadcrumb-item>
      <mi-breadcrumb-item>活动列表</mi-breadcrumb-item>
      <mi-breadcrumb-item>活动详情</mi-breadcrumb-item>
    </mi-breadcrumb>
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