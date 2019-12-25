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
    component: () => import('@/views/login/login'),
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/register'),
  }, {
    path: '/forgetpass',
    name: 'forgetpass',
    component: () => import('@/views/forgetpass/forgetpass'),
  }, {
    path: '/personalCenter',
    name: 'personalCenter',
    component: () => import('@/views/personalCenter/personalCenter'),
  }, {
    path: '/addchildren',
    name: 'addchildren',
    component: () => import('@/views/addchildren/addchildren'),
  }, {
    path: '/childMessage',
    name: 'childMessage',
    component: () => import('@/views/childMessage/childMessage'),
  }, {
    path: '/connectUs',
    name: 'connectUs',
    component: () => import('@/views/connectUs/connectUs'),
  },

]

export default new VueRouter({
  routes: constantRouterMap
})