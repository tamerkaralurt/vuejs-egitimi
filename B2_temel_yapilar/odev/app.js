const app = new Vue({
    el: '#app',
    name: 'Uzaktan Kurs',
    data: {
        categoryList: [
            {id: 1, title: 'Market'},
            {id: 2, title: 'Giyim'},
            {id: 3, title: 'Eğlence'},
        ],
        activeCategory: {},
        newCategoryItem: {},
        storeList: [
            {id:1, title:'Ekmek', price:1, category: 1},
            {id:2, title:'Kola', price:5, category: 1},
            {id:3, title:'Ayakkabı', price:10, category: 2},
            {id:4, title:'Tişört', price:20, category: 2},
            {id:5, title:'Oyun', price:100, category: 3},
            {id:6, title:'Fare', price:200, category: 3},
        ],
        newStoreItem: {},
        sumPrice: 0,
        filteredStoreList:[],
    },
    created() {
        this.selectedCategory(this.categoryList[0]);
    },
    methods: {
        selectedCategory(category) {
            this.activeCategory = category;
            this.filteredStoreList = this.storeList.filter(store => store.category === category.id);
        },
        saveNewCategory() {
            if (this.newCategoryItem !== null) {
                this.newCategoryItem.id = this.categoryList.length + 1;
                this.categoryList.push(this.newCategoryItem);
                this.newCategoryItem = {};
            }
        },
        saveStore() {
            if (this.newStoreItem !== null) {
                this.newStoreItem.id = this.storeList.length + 1;
                this.newStoreItem.category = this.activeCategory.id;
                this.storeList.push(this.newStoreItem);
                this.newStoreItem = {};
                this.selectedCategory(this.activeCategory);
            }
        },
    },
    computed: {
        sumPriceComputed() {
            this.sumPrice = 0;
            this.filteredStoreList.forEach(store => {
                this.sumPrice += parseInt(store.price);
            });
            return this.sumPrice;
        }
    },
});