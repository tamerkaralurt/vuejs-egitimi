const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        dataItem: {title: '', status: false},
        dataList: [
            {id: 1, title: 'Ders Notlarını Hazırla', status: true, list: 'İş'},
            {id: 2, title: 'İntro Videosunu Hazırla', status: false, list: 'İş'},
            {id: 3, title: 'Kahve Al', status: false, list: 'Genel'},
            {id: 4, title: 'Çiçek Al', status: false, list: 'Genel'},
        ],
        listItems: [
            {id: 1, title: 'Genel'},
            {id: 2, title: 'İş'},
            {id: 3, title: 'Özel'},
        ],
        activeListItem:{},
        filteredDataList:[],
        newListItem:{},
    },
    created(){
        const defaultListItem = this.listItems[0];
        if(defaultListItem != null)
            this.changeListItem(defaultListItem.id);
    },
    methods: {
        toggleTodoListStatus(index) {
            this.todoList[index].status = !this.todoList[index].status;
        },
        toggleTodoListFinishedStatus(index) {
            this.todoListFinished[index].status = !this.todoListFinished[index].status;
        },
        saveItem() {
            if (this.dataItem.title !== '') {
                this.dataItem.id = this.dataList.length + 1;
                this.dataItem.list = this.activeListItem.title;
                this.dataList.push(this.dataItem);
                this.clearForm();
                this.changeListItem(this.activeListItem.id);
            }
        },
        clearForm() {
            this.dataItem = {title: '', status: false};
        },
        deleteItem(id) {
            this.dataList = this.dataList.filter(todo => todo.id !== id);
        },
        changeListItem(id) {
            const list = this.listItems.find(item => item.id === id);
            if(list != null){
                this.activeListItem = list;
                this.filteredDataList = this.dataList.filter(item => item.list === list.title);
            }
        },
        saveListItem(){
            if(this.newListItem.title !== ''){
                this.newListItem.id = this.listItems.length + 1;
                this.listItems.push(this.newListItem);
                this.newListItem = {};
            }
        },
        listItemCount(title){
            return this.dataList.filter(item => item.list === title).length;
        }
    },
    computed: {
        todoList() {
            return this.filteredDataList.filter(todo => todo.status === false);
        },
        todoListFinished() {
            return this.filteredDataList.filter(todo => todo.status === true);
        }
    },
});