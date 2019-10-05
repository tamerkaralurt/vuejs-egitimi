// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './firebase'

window.$ = require('jquery');
import 'bootstrap/dist/js/bootstrap.min';
window.toastr = require('toastr');
toastr.options = {
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "showDuration": "300",
  "progressBar": true,
};

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
