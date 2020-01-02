import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export const constantRouterMap = [{
    path: '/',
    name: 'homepage',
    component: () => import('@/views/homepage/homepage'),
  },
  {
    path: '/login',
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
  }, {
    path: '/versions',
    name: 'versions',
    component: () => import('@/views/versions/versions'),
  }, {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/terms/terms'),
  }, {
    path: '/physicalSyllabus',
    name: 'physicalSyllabus',
    component: () => import('@/views/physicalSyllabus/physicalSyllabus'),
  }, {
    path: '/ktjlPerformance',
    name: 'ktjlPerformance',
    component: () => import('@/views/ktjlPerformance/ktjlPerformance'),
  }, {
    path: '/healthStandard',
    name: 'healthStandard',
    component: () => import('@/views/healthStandard/healthStandard'),
  }, {
    path: '/singleSelfTest',
    name: 'singleSelfTest',
    component: () => import('@/views/singleSelfTest/singleSelfTest'),
  },

]

export default new VueRouter({
  routes: constantRouterMap
})