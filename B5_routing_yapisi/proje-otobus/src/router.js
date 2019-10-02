import Vue from 'vue'
import Router from 'vue-router'
import SeferAra from "./views/SeferAra";

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
    ]
})
