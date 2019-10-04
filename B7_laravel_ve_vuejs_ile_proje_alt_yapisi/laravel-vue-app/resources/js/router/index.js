import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import DashBoard from "../pages/DashBoard";

const routes = [
    {path: '/', component: DashBoard,name:'dashboard'}
];

export default new VueRouter({
   routes:routes,
   mode:'hash',
});
