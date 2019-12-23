import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export const constantRouterMap = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('@/views/Home/Homepage'),
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
  }
]

export default new VueRouter({
  routes: constantRouterMap
})