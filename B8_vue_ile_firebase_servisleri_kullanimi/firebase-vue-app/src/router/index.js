import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import DashBoard from '../views/admin/DashBoard'
import ProductList from '../views/admin/ProductList'
import UserList from '../views/admin/UserList'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/home',
    redirect: '/',
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/users',
    name: 'users',
    component: UserList,
    meta: {
      requiresAuth: true,
    }
  }, {
    path: '/products',
    name: 'products',
    component: ProductList,
    meta: {
      requiresAuth: true,
    }
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    meta: {
      requiresAuth: true,
    }
  }]
});

//Oturum kontolü olması gereken sayfaları için oturum kontrolü yapılıyor.
router.beforeEach((to, from, next)=>{
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser){
      toastr.warning('Bu sayfayı görüntülemek için oturum açınız');
      next('login'); // Login sayfasına geçisi sağla
  }else{
    next(); // Bir sonraki sayfaya geçişi sağla
  }
});

export default router;
