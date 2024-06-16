<template>
  <aside class="mi-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'MiAside',
    componentName: 'MiAside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
