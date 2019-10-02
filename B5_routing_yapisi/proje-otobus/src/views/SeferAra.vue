<template>
    <div class="container">
        <h2>Hareket Noktaları</h2>
        <form @submit.prevent="sefer_ara">
            <div class="form-row align-items-center">
                <div class="col-sm-2">
                    <label>Kalkış Noktası</label>
                    <select class="form-control" v-model="kalkis_noktasi">
                        <option value="">Seçiniz</option>
                        <option v-for="item in hareket_noktalari" :value="item.id" v-text="item.aciklama"></option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <label>Varış Noktası</label>
                    <select class="form-control" v-model="varis_noktasi">
                        <option value="">Seçiniz</option>
                        <option v-for="item in hareket_noktalari" :value="item.id" v-text="item.aciklama"></option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <label>Gidiş Tarihi</label>
                    <input type="date" class="form-control" v-model="gidis_tarihi">
                </div>
                <div class="col-auto">
                    <label>&nbsp;</label>
                    <button type="submit" class="btn btn-primary btn-block">Ara</button>
                </div>
            </div>
        </form>
        <hr>
        <div v-if="isLoading">Seferler Yükleniyor...</div>
        {{ message }}
        <div v-if="bulunan_seferler.length">
            <h2>Sefer Listesi</h2>
            <table class="table table-hover">
                <tr v-for="(item, index) in bulunan_seferler">
                    <td>Kalkış Saati
                        <h4>{{ getSaat(item.kalkis_tarihi) }}</h4>
                    </td>
                    <td>Bilet Fiyatı
                        <h4>{{ item.bilet_fiyati }} ₺</h4>
                    </td>
                    <td>
                        <button class="btn btn-success btn-sm" @click="sefer_sec(item.id)">Koltuk Seç</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import DB from '../assets/db.json';

    export default {
        name: 'AramaFormu',
        props: {
            msg: String
        },
        data() {
            return {
                kalkis_noktasi: '',
                varis_noktasi: '',
                gidis_tarihi: '',
                hareket_noktalari: [],
                seferler: [],
                bulunan_seferler: [],
                isLoading: false,
                message: '',
            }
        },
        created() {
            this.hareket_noktalari = DB.hareket_noktalari;
            this.seferler = DB.seferler;
        },
        methods: {
            sefer_ara() {
                this.isLoading = true;
                this.bulunan_seferler = this.seferler.filter(x => x.kalkis_noktasi === this.kalkis_noktasi && x.varis_noktasi === this.varis_noktasi && this.getTarih(x.kalkis_tarihi) === this.getTarih(this.gidis_tarihi));
                if(this.bulunan_seferler.length === 0){
                    this.message = "Bir Sefer Bulunamadı!";
                }
                this.isLoading = false;
            },
            getTarih(value) {
                var tarihSaat = new Date(value);
                //05 012 gibi.
                var tarih = tarihSaat.getFullYear() + ' - ' + ('0' + tarihSaat.getMonth()).slice(-2) + ' - ' + ('0' + tarihSaat.getDate()).slice(-2);
                return tarih;
            },
            getSaat(value) {
                var tarihSaat = new Date(value);
                var saat = ('0' + tarihSaat.getHours()).slice(-2) + ' - ' + ('0' + tarihSaat.getMinutes()).slice(-2);
                return saat;
            },
            sefer_sec(sefer_id) {

            },
        }
    }
</script>
