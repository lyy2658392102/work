import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export const constantRouterMap = [{
    path: '/home',
    naem: 'home',
    component: () => import('@/views/Home/Homepage'),
  },
  {
    path: '/login',
    name: 'login',
    component: (resolve) => {
      require(['@/views/login/index'], resolve)
    },
  }
]

export default new VueRouter({
  routes: constantRouterMap
})