<template>
    <div class="container">
        <form method="post" action="#" @submit.prevent="true">
            <h2>Ödeme Bilgileri</h2>
            <div class="row">
                <div class="col-2">
                    <label class="mr-2" for="kk_no">Kart No</label>
                    <input type="text" class="form-control" name="kk_no" id="kk_no">
                </div>
                <div class="col-2">
                    <label class="mr-2" for="kk_adsoyad">Ad Soyad</label>
                    <input type="text" class="form-control" name="kk_adsoyad" id="kk_adsoyad">
                </div>
                <div class="col-2">
                    <label class="mr-2" for="kk_ccv">CCV</label>
                    <input type="text" class="form-control" name="kk_ccv" id="kk_ccv">
                </div>
                <div class="col-3">
                    <label class="mr-2" for="kk_skt_ay">Son Kullanma Tarihi (Ay)</label>
                    <input type="text" class="form-control" name="kk_skt_ay" id="kk_skt_ay">
                </div>
                <div class="col-3">
                    <label class="mr-2" for="kk_skt_yil">Son Kullanma Tarihi (Yıl)</label>
                    <input type="text" class="form-control" name="kk_skt_yil" id="kk_skt_yil">
                </div>
            </div>
            <button class="btn btn-success btn-sm mt-2" @click="odeme_yap()">Ödeme Yap</button>
        </form>
    </div>
</template>

<script>
    import {GlobalData} from "../main";

    export default {
        name: "OdemeBilgileri",
        data() {
            return {
            };
        },
        methods: {
            odeme_yap(){
            },
        }
    }
</script>

<style scoped></style>