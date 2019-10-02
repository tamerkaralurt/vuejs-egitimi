import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContactUs from './views/ContactUs.vue'
import NotFound from './views/NotFound.vue'
import Photos from './views/Photos.vue'

//Nprogress import edildi.
import NProgress from 'nprogress'

//Vue.js nin routeri kullanabilmesi için bu tanımlamayı yapmamız gerekmektedir.
Vue.use(Router)

const router = new Router({
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
});

//Anasayfadan Hakkımızda sayfasına tıkladığımızda "to" kısmı hakkımızda "from" anasayfa olmuş oluyor. "next" bir sonraki root tanımına geç gibi bir anlama geliyor.

/**
 * (Navigation Guards)[https://router.vuejs.org/guide/advanced/navigation-guards.html]
 * (NProgress)[https://ricostacruz.com/nprogress]
 * Kullanım Amaçları:
 * - route bağlantılarını bir yerde log olarak tutmak istersek bu işlemi yapabiliriz.
 * - sayfa geçişlerinde bir yükleme resmi yada çubuğu gösterebiliriz. Yükleme tamamlandıktan sonra resmi yada çubuğu kaldırma işlemi yapabiliriz.
 * "yarn add nprogress --save" npm yada yarn ile kurulumunu yaptık, bu eklenti sayfaların geçişi sırasında bir durum çubuğu göstermemize yararıyor.
 * */

/**
 * Bir route bağlantısına tıklandığı anda önce "beforeEach" guard tanımları çalıştırılır. Daha sonra "beforeResolve" guard tanımları çalıştırılır.
 * Sonrasında tıklanan route sayfası yüklenir. Yükleme tamamlandıktan sonra "afterEach" guard tanımları çalıştırılır.
 * */

/*router.beforeEach((to, from, next)=>{
  console.log(to);
  console.log(from);
  //next() metodunu çağırdığımızda bir sonraki işlemi devreye al demiş olduk. Yazmadığımız taktirde sayfa içerikleri görünmüyor.
  next();
});*/

router.beforeResolve((to, from, next)=>{
  if (to.name){
    NProgress.start();
  }
  next();
});

router.afterEach((to, from)=>{
  NProgress.done();
});

export default router;
