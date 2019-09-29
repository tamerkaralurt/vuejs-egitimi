const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        user: {},
        users: [{id: 10, name: 'Tamer', role: 'Admin'}, {id: 11, name: 'Seda', role: 'User'}],
    },
    methods: {
        newUser() {
            this.user = {
                role: '',
            };
            $('#newUserModel').modal('show'); //jquery kodlarının kullanımına örnek
        },
        addUser() {
            if (this.user.name != undefined && this.user.role != '') {
                if (this.user.id > 0) {
                    let editUser = this.users.find(u => u.id == this.user.id);
                    editUser = this.user;
                } else {
                    this.users.push({
                        id: this.users.length + 1,
                        name: this.user.name,
                        role: this.user.role,
                    });
                    this.user = {};
                }
                $('#newUserModel').modal('hide'); //jquery kodlarının kullanımına örnek
            } else {
                alert('Boş Değer Girilemez');
            }
        },
        deleteUserIndex(index) {
            this.users.splice(index, 1); //indexden başlayarak 1 kadar çıkar anlamına geliyor.
        },
        deleteUserId(id) {
            const delUser = this.users.find(u => u.id == id);
            if (delUser != null) {
                this.users = this.users.filter(u => u.id != delUser.id);
            }
        },
        editUser(index) {
            this.user = this.users[index];
            $('#newUserModel').modal('show');
        },
    }
});