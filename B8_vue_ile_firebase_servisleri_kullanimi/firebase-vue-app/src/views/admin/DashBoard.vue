<template>
  <div class="container">
    <h1>DashBoard</h1>
    <p v-if="currentUser">{{ currentUser.email }} olarak giriş yaptınız.</p>
  </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "DashBoard",
        data() {
            return {
                currentUser: {},
            }
        },
        mounted() {
            this.currentUser = firebase.auth().currentUser;
        }
    }
</script>

<style scoped>

</style>
