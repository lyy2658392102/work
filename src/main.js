import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from '@/vants/vant.js'
import 'vant/lib/index.css';
Vant()

import axios from 'axios';
Vue.prototype.$axios = axios;

import '@/styles/index.scss' // global css

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')