require('./bootstrap');
window.Vue = require('vue');

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
