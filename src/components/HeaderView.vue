<script steup></script>
<template>
    <header>
        <div class="Logo"><img src="@/assets/images/egrusofficiallogobeyaz.webp" alt="Egruss Designer Logo" /></div>
        <nav class="linkls">
            <router-link to="/">Portfolio</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/roadmap">Roadmap</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>
<style scoped lang="scss">
header {
    width: 100%;
    height: 180px;
    background: #003554;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

nav {
    margin-top: 20px;
    a {
        font-weight: bold;
        color: #fff;
        margin-right: 10px;
        text-decoration: none;
        &:last-of-type {
            margin-right: 0;
        }

        &.router-link-exact-active {
            color: #00a6fb;
        }
    }
}
</style>
