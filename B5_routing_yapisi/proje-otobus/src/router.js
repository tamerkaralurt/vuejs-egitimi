import Vue from 'vue'
import Router from 'vue-router'
import SeferAra from "./views/SeferAra";
import KoltukSecimi from "./views/KoltukSecimi";
import YolcuBilgileri from "./views/YolcuBilgileri";
import OdemeBilgileri from "./views/OdemeBilgileri";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'home',
            redirect: {name: 'seferara'},
        },
        {
            path: '/sefer-ara',
            name: 'seferara',
            component: SeferAra
        },
        {
            //? nullable olmasını sağlıyor yani boş bırakılabilir anlamında.
            path: '/koltuk-secimi/:sefer_id?',
            name: 'koltukSecimi',
            component: KoltukSecimi
        },
        {
            path: '/yolcu-bilgileri',
            name: 'yolcubilgileri',
            component: YolcuBilgileri
        },
        {
            path: '/odeme-bilgileri',
            name: 'odemebilgileri',
            component: OdemeBilgileri
        },
    ]
})
