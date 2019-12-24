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
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index'),
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index'),
  }, {
    path: '/forgetpass',
    name: 'forgetpass',
    component: () => import('@/views/forgetpass/forgetpass'),
  }
]

export default new VueRouter({
  routes: constantRouterMap
})