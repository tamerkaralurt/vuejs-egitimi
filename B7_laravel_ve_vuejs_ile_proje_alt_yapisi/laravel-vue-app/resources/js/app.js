import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
window.$ = window.jQuery = $;
window.Vue = require('vue');
require('./bootstrap');
// Buna gerek yok ama jquery-ui özelliklerini kullanmak istersen projeye ekleyebilirsin.
// import 'jquery-ui/ui/widgets/datepicker.js';

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import App from './components/App';
import router from './router';

const app = new Vue({
    el: '#app',
    router,
    template: '<app />',
    components:{
        app: App,
    }
});
// new Vue({
//     render: h => h(app)
// }).$mount('#app');
