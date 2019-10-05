<template>
    <div>
        <user-modal :item="item" v-on:onSaved="refreshData" ref="userModal"></user-modal>
        <div class="button-group float-right">
            <button class="btn btn-info mb-2" @click="fetchData">Yenile</button>
            <button class="btn btn-success mb-2" @click="createData">Yeni Kullanıcı</button>
        </div>
        <h1>Kullanıcılar</h1>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <table class="table table-bordered table-hover" v-if="list && list.length">
            <tr>
                <th>#</th>
                <th>İsim</th>
                <th>Email</th>
                <th>İşlem</th>
            </tr>
            <tr v-for="{id,name,email} in list">
                <td>{{id}}</td>
                <td>{{name}}</td>
                <td>{{email}}</td>
                <td>
                    <button class="btn btn-success btn-sm" @click="editData(id)">Düzenle</button>
                </td>
            </tr>
        </table>
        <p v-else>Kayıt Bulunamadı</p>
        <pagination :meta="meta" v-on:pageChange="fetchData"/>
    </div>
</template>

<script>
    import Pagination from "../../components/Pagination";
    import UserModal from "../../pages/user/UserModal";

    export default {
        name: "UserList",
        components: {
            "pagination": Pagination,
            "user-modal": UserModal,
        },
        data() {
            return {
                list: null,
                error: null,
                meta: null,
                item: {},
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData($page = 1) {
                this.error = null;
                this.list = null;
                axios.get('/users', {params: {'page': $page}}).then((response) => {
                    this.list = response.data.data;
                    this.meta = response.data.meta;
                    // this.list = response.data.users;
                }).catch((error) => {
                    if(error.response != null)
                        this.error = error.response.data.message;
                    else
                        this.error = error.message;
                });
            },
            createData() {
                this.item = {};
                this.$refs.userModal.errors = {};
                this.$refs.userModal.message = '';
                $('#userModal').modal('show');
            },
            refreshData(item){
                this.fetchData();
            },
            editData(id){
                axios.get('/users/' + id).then((response) => {
                    this.$refs.userModal.errors = {};
                    this.$refs.userModal.message = '';
                    this.item = response.data;
                    $('#userModal').modal('show');
                }).catch((error) => {
                    if(error.response != null)
                        this.error = error.response.data.message;
                    else
                        this.error = error.message;
                });
            }
        },
    }
</script>

<style scoped>

</style>
