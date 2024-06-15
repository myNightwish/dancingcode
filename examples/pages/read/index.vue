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
  </div>
</template>

<script>
export default {
  name: 'read'
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