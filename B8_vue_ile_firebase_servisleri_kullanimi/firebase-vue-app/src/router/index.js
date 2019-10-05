import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import DashBoard from '../views/admin/DashBoard'
import ProductList from '../views/admin/ProductList'
import UserList from '../views/admin/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      component: UserList
    }, {
      path: '/products',
      name: 'products',
      component: ProductList
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    }
  ]
})
