<template>
    <i :class="'mi-icon-' + name"></i>
</template>
<script>
export default {
    name: 'MiIcon',
    props: {
        name: String
    }
};
</script>
