<template>
  <div class="container">
    <h1>Product List</h1>
    <table>
      <tr>
        <th>Başlık</th>
        <th>Açıklama</th>
        <th>Fiyat</th>
      </tr>
      <tr v-for="product in products" :key="product['.key']">
        <td>{{product.title}}</td>
        <td>{{product.description}}</td>
        <td>{{product.price}}</td>
        <td>
          <button class="btn btn-sm btn-primary" @click="editItem(product)">Düzenle</button>
          <button class="btn btn-sm btn-danger" @click="deleteItem(product)">Sil</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    import {db, productsRef} from '../../firebase';

    export default {
        name: "ProductList",
        data() {
            return {
                products: [],
            }
        },
        mounted() {
            //once: tanımlı olan obje içindeki verileri bir kere olarak çekiyor.
            productsRef.once("value")
                .then(data => {
                    let obj = data.val();
                    for (let key in obj) {
                        this.products.push({
                            id: key,
                            title: obj[key].title,
                            description: obj[key].description,
                            price: obj[key].price,
                        });
                    }
                });
        },
        methods: {
            editItem(product) {
            },
            deleteItem(product) {
            },
        }
    }
</script>

<style scoped>

</style>
