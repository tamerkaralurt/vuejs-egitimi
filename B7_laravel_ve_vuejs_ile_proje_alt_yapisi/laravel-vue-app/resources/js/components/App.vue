<template>
<div id="app">
    <navbar></navbar>
    <!-- router-view -->
    <div class="container">
        <router-view></router-view>
    </div>
    <!-- #router-view -->
</div>
</template>

<script>
    import Navbar from './Navbar';
    export default {
        name: "App",
        components:{
            navbar: Navbar,
        }
    }
</script>

<style scoped>

</style>
