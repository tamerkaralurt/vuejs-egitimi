<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <!-- Bulunduğun klasörde de olsa assets içinden dosya çağırırken "./" şeklinde belirtmen lazım yoksa çalışmaz kural böyle, ancak dosya public içinde ise bu şekilde belirtmene gerek yok -->
                    <img src="./assets/img/bus.png" width="30" height="30" class="d-inline-block align-top" alt="">
                    Otobüs Rezervasyon Sistemi
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'home'}" active-class="active" exact>Anasayfa</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'seferara'}" active-class="active">Sefer Ara</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/koltuk-secimi" active-class="active">Koltuk Seçimi</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/yolcu-bilgileri" active-class="active">Yolcu Bilgileri</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/odeme-bilgileri" active-class="active">Ödeme Bilgileri</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,700,700i&subset=latin-ext');
    @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    @import '~bootstrap/scss/bootstrap';

    body {
        font-family: 'Segoe UI Light';
        font-size: 18px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    .form-control:focus {
        outline: none;
        box-shadow: none;
    }

    .navbar {
        margin-bottom: 20px;
    }
</style>
