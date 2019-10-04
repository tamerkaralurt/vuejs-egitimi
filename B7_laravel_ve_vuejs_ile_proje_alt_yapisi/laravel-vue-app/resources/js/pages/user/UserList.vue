<template>
    <div>
        <h1>Kullanıcılar</h1>
        <table class="table table-bordered table-hover" v-if="list && list.length">
            <tr>
                <th>#</th>
                <th>İsim</th>
                <th>Email</th>
            </tr>
            <tr v-for="{id,name,email} in list">
                <td>{{id}}</td>
                <td>{{name}}</td>
                <td>{{email}}</td>
            </tr>
        </table>
        <p v-else>Kayıt Bulunamadı</p>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data() {
            return {
                list: null,
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.list = [];
            },
        }
    }
</script>

<style scoped>

</style>
