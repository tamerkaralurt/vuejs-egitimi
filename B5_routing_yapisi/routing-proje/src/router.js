import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContactUs from './views/ContactUs.vue'
import NotFound from './views/NotFound.vue'
import Photos from './views/Photos.vue'

//Vue.js nin routeri kullanabilmesi için bu tanımlamayı yapmamız gerekmektedir.
Vue.use(Router)

export default new Router({
    //mode:"hash" iken link üzerinde bir değişiklik olduğunda sayfada bir düzenleme olmuyor. Bunu watch ile çözebiliyoruz. Ancak mode:"history" moddayken bunu sistem otomatik algılayıp sayfayı yeniliyor.
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            //üst alanda import olarak çağırmadığımız component dosyalarını bu şekilde çağırabiliriz.
            component: () => import('./views/About.vue')
        },
        {
            path: '/contactus',
            name: 'contactus',
            component: ContactUs
        },
        {
            path: '/photos/:id',
            name: 'photos',
            component: Photos
        },
        //Bu yapı ile üstte tanımladığımız adreslerden farklı bir adres geldiğinde, bizim belirlediğimiz componenti veya direk sayfa yönlendirmesi yaparak hatalı link yakalama işlemi yapabiliriz.
        {
            path: '*',
            //redirect: '/',
            //name: 'home',
            component: NotFound,
        }
    ]
})
