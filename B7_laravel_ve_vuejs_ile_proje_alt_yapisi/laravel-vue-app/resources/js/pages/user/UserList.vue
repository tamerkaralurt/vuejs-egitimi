<template>
    <div>
        <h1>Kullanıcılar</h1>
        <button class="btn btn-success mb-2" @click="fetchData">Yenile</button>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
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
        <pagination :meta="meta" v-on:pageChange="fetchData"/>
    </div>
</template>

<script>
    import Pagination from "../../components/Pagination";

    export default {
        name: "UserList",
        data() {
            return {
                list: null,
                error: null,
                meta: null,
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData($page = 1) {
                this.error = null;
                this.list = null;
                axios.get('http://127.0.0.1:8000/api/users', {params: {'page': $page}}).then((response) => {
                    this.list = response.data.data;
                    this.meta = response.data.meta;
                    // this.list = response.data.users;
                }).catch((error) => {
                    this.error = error.response.data.message;
                });
            },
        },
        components: {
            pagination: Pagination,
        }
    }
</script>

<style scoped>

</style>
