<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/docs">Doc</router-link>
            <router-link to="/think">Rethink</router-link>
            <router-link to="/read">Reading</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
#app {
    font-family: Avenir;
    color: #2c3e50;
}
</style>
