import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from '@/vants/vant.js'
import 'vant/lib/index.css';
Vant()

import Elementui from '@/elementui/elementui.js'
// import 'element-ui/lib/theme-chalk/index.css';
Elementui()

import axios from 'axios';
Vue.prototype.$axios = axios;


import '@/styles/index.scss' // global css

import QueryString from '@/utils/QueryString'
Vue.use(QueryString)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')