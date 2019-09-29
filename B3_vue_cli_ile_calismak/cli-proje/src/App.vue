<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <alert-count></alert-count>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import AlertCount from './components/AlertCount.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            'alert-count': AlertCount,
        }
    }
</script>

<!-- scoped: style üzerine attr olarak eklenirse style kodları local, eklenmese style kodları global olmaktadır. -->
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
