<script setup>
import Header from "@/components/HeaderView.vue";
</script>
<template>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <Header />
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Dm Sans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
