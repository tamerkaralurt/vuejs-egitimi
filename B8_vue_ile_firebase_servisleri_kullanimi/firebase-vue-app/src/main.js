// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './firebase'
import firebase from "firebase";

window.$ = require('jquery');
import 'bootstrap/dist/js/bootstrap.min';
window.toastr = require('toastr');
toastr.options = {
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "showDuration": "300",
  "progressBar": true,
};

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged((user) => {
  if (!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});
