<template>
    <div id="app">
        <h1>welcome to My Vue.js UI By WebPack!</h1>
        <me-loading loading-text="页面加载中...."></me-loading>
        <!-- <mi-icon name="loading"></mi-icon> -->
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
    </div>
</template>

<script>
export default {
    name: 'HelloWorld'
};
</script>
