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
                        <div class="alert alert-danger" v-if="message">
                            <strong>{{message}}</strong>
                            <ul class="p-2 pl-4 m-0">
                                <li v-for="error in errors">
                                    {{error[0]}}
                                </li>
                            </ul>
                        </div>
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
        data() {
            return {
                errors: {},
                message: null,
            }
        },
        methods: {
            saveItem() {
                if (this.item.id > 0) {
                    axios.put('/users/' + this.item.id, this.item)
                        .then((response) => {
                            if (response.data.success) {
                                this.$emit('onSaved', this.item);
                                $('#userModal').modal('hide');
                                alert(response.data.message);
                            }
                        })
                        .catch((errors) => {
                            console.log(errors);
                            this.message = errors.response.data.message;
                            if (errors) {
                                this.errors = errors.response.data.errors;
                            }
                        });
                } else {
                    axios.post('/users', this.item)
                        .then((response) => {
                            if (response.data.success) {
                                this.$emit('onSaved', this.item);
                                $('#userModal').modal('hide');
                                alert(response.data.message);
                            }
                        })
                        .catch((errors) => {
                            console.log(errors);
                            this.message = errors.response.data.message;
                            if (errors) {
                                this.errors = errors.response.data.errors;
                                /**
                                 * //Tarzında da bir liste oluşturabiliriz.
                                 *
                                 * this.message += "<ul>";
                                 * Object.keys(response.data.errors).forEach((key)=>{
                                 *     this.message += "<li>" + response.data.errors[key][0] + "</li>";
                                 * });
                                 * this.message += "</ul>";
                                 * */
                            }
                        });
                }
            },
        }
    }
</script>

<style scoped>

</style>
