import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router'
import store from './store/index'
import '@/firebase/';

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
