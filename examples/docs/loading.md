## loading组件

:::demo Loading的基础用法

```html
<template>
  <me-loading :loading-text="text"></me-loading>
</template>
<script>
  export default {
    data() {
      return {
        text: '页面加载中……'
      };
    }
  };
</script>
```

:::
