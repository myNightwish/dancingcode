<template>
  <header class="mi-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'MiHeader',
    componentName: 'MiHeader',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
