<template>
    <div class="container">
        <h1>Photos Page</h1>
        <div class="card" style="width: 18rem;" v-if="photo">
            <img :src="photo.url" alt="Image" class="card-img-top">
            <div class="card-body">
                <p class="card-text">{{ photo.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                photo: null,
            }
        },
        created() {
            this.fetchData();
        },
        watch: {
          //watch ile bir datada değişim olduğu anda tekrardan ilgili methodu çağırabiliyorsunuz.
          //route değişimleri olduğu anda watch çalışıyor.
          $route: "fetchData",
        },
        methods: {
            fetchData() {
                fetch('https://jsonplaceholder.typicode.com/photos/' + this.$route.params.id)
                    .then(response => response.json())
                    .then(json => {
                        this.photo = json;
                    })
                    .catch((errors) => {
                        console.log(errors);
                    });
            }
        }
    }
</script>