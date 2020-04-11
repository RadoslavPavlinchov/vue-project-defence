import Vue from 'vue'
import App from './App.vue'

import * as firebase from 'firebase'

import vuetify from './plugins/vuetify';
import router from './plugins/router'
import store from './store'

import DateFilter from './filters/date'

Vue.filter('date', DateFilter)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBUhCmtlD112Wiv8VJ-m0Np9vo4Mwb4QEk",
      authDomain: "taste-the-healthy-ones.firebaseapp.com",
      databaseURL: "https://taste-the-healthy-ones.firebaseio.com",
      projectId: "taste-the-healthy-ones",
      storageBucket: "gs://taste-the-healthy-ones.appspot.com/",
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn',user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadRecipes')
  }
}).$mount('#app')
