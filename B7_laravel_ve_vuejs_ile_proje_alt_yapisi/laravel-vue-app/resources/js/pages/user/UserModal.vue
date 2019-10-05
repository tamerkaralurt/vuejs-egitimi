<template>
    <div>
        <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="userModalLabel" v-text="(item.id > 0) ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı'">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="form" @submit.prevent="true">
                            <div class="form-group row">
                                <label for="name" class="col-sm-3 col-form-label">Kullanıcı Adı</label>
                                <div class="col-sm-9">
                                    <input type="text" id="name" class="form-control" v-model="item.name">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="password" class="col-sm-3 col-form-label">Şifre</label>
                                <div class="col-sm-9">
                                    <input type="password" id="password" class="form-control" v-model="item.password">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="email" class="col-sm-3 col-form-label">Email</label>
                                <div class="col-sm-9">
                                    <input type="email" id="email" class="form-control" v-model="item.email">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" v-text="(item.id > 0) ? 'Güncelle' : 'Kaydet'" @click="saveItem"></button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserModal",
        props: ['item'],
        methods: {
            saveItem() {
                axios.post('/users', this.item)
                    .then((response) => {
                        if(response.success){
                            this.$emit('onSaved', this.item);
                            $('#userModal').modal('hide');
                            alert(response.data.message);
                        }else{
                            alert(response.data.message);
                            if(response.data.errors){
                                console.log(response.data.errors);
                            }
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        }
    }
</script>

<style scoped>

</style>
