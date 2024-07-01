<template>
  <div id="app">
      <mi-icon name="loading"></mi-icon>
      <mi-button :loading="true">加载中</mi-button>
      <mi-button type="primary" disabled>主要按钮</mi-button>
      <mi-button type="success" plain>成功按钮</mi-button>
      <mi-button type="info" round>信息按钮</mi-button>
      <mi-button size="medium">中等按钮</mi-button>
      <mi-button type="warning" circle></mi-button>
      <mi-button type="danger" icon="mi-icon-delete">危险按钮</mi-button>
      <mi-button type="text">文本</mi-button>
      <mi-button-group>
          <mi-button type="primary" icon="mi-icon-arrow-left"
              >上一页</mi-button
          >
          <mi-button type="primary"
              >下一页<i class="mi-icon-arrow-right mi-icon--right"></i
          ></mi-button>
      </mi-button-group>
      <mi-container>
          <mi-aside width="200px">Aside</mi-aside>
          <mi-container>
              <mi-header>Header</mi-header>
              <mi-main>Main</mi-main>
          </mi-container>
      </mi-container>
      <!-- 标记: badge-->
      <!-- <mi-badge :is-dot="true" :hidden="hidden" type="warning"> -->
      <mi-badge :value="10" :hidden="hidden" type="warning">
        <mi-button type="success" plain @click="hiddenBadge">成功按钮</mi-button>
      </mi-badge>
      <!-- 头像avatar -->
      <mi-avatar icon="mi-icon-user-solid"/>
      <mi-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></mi-avatar>
      <mi-avatar src="https://cube.elemecdn.com/0png.png"></mi-avatar>
  </div>
</template>

<script>
export default {
  name: 'Read',
  data() {
    return {
      hidden: false,
      badgeNum: 10
    }
  },
  methods: {
    hiddenBadge() {
      this.hidden = !this.hidden;
    }
  }
};
</script>
<style>
.mi-header, .mi-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.mi-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.mi-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .mi-container {
  margin-bottom: 40px;
}

.mi-container:nth-child(5) .mi-aside,
.mi-container:nth-child(6) .mi-aside {
  line-height: 260px;
}

.mi-container:nth-child(7) .mi-aside {
  line-height: 320px;
}
</style>