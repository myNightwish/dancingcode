## loading组件

:::demo Loading的基础用法

```html
<template>
    <mi-rainbow :loading-text="text"></mi-rainbow>
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
