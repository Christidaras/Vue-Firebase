import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import firebase from 'firebase/compat/app'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJJT4o71AiseCwSUQrBqC3jL3SyyXjGVM",
    authDomain: "test-3fef6.firebaseapp.com",
    projectId: "test-3fef6",
    storageBucket: "test-3fef6.appspot.com",
    messagingSenderId: "996836551727",
    appId: "1:996836551727:web:c11bb5cc67cc1cd53e2ada"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = createApp(App);

    app.use(store)
        .use(router)
        // .use(VueAxios, axios)
        .mount('#app')
  }
});

// const app = createApp(App);

// app.use(store)
//    .use(router)
//    .use(VueAxios, axios)
//    .mount('#app')
