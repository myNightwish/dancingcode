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
    <mi-row :tag="'span'">
      <mi-col :span="24"><div class="grid-content bg-purple-dark"></div></mi-col>
    </mi-row>
    <mi-row :gutter="24">
      <mi-col :span="12"><div class="grid-content bg-purple"></div></mi-col>
      <mi-col :span="12"><div class="grid-content bg-purple-light"></div></mi-col>
    </mi-row>
    <mi-row>
      <mi-col :span="8"><div class="grid-content bg-purple">1234</div></mi-col>
      <mi-col :span="8"><div class="grid-content bg-purple-light">45465</div></mi-col>
      <mi-col :span="8"><div class="grid-content bg-purple">42432</div></mi-col>
    </mi-row>
    <mi-row>
      <mi-col :span="6"><div class="grid-content bg-purple"></div></mi-col>
      <mi-col :span="6"><div class="grid-content bg-purple-light"></div></mi-col>
      <mi-col :span="6"><div class="grid-content bg-purple"></div></mi-col>
      <mi-col :span="6"><div class="grid-content bg-purple-light"></div></mi-col>
    </mi-row>
    <mi-row :gutter="10">
        <mi-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">33</div></mi-col>
        <mi-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">44</div></mi-col>
        <mi-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">55</div></mi-col>
        <mi-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">66</div></mi-col>
    </mi-row>
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
  .mi-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .mi-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .mi-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>