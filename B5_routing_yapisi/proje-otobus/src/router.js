import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AramaFormu from "./components/AramaFormu";

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
            component: AramaFormu
        },
    ]
})
