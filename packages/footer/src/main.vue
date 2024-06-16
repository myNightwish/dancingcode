<template>
  <footer class="mi-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'MiFooter',
    componentName: 'MiFooter',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
