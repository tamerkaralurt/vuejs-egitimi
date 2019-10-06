import Vue from 'vue'
import firebase from 'firebase';

//VueFire Eklendi.
import {firestorePlugin} from 'vuefire';

Vue.use(firestorePlugin);


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhlELC5lqA6VWVVgZKfkvZc_ixBdxP7dk",
  authDomain: "vue-egitimi-1.firebaseapp.com",
  databaseURL: "https://vue-egitimi-1.firebaseio.com",
  projectId: "vue-egitimi-1",
  storageBucket: "",
  messagingSenderId: "112913428108",
  appId: "1:112913428108:web:742d63f0d0c074c4c395a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase database oluşturuldu.
export const db = firebase.database();
export const productsRef = db.ref('products');
