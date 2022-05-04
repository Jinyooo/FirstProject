import Vue from 'vue'
import VueRouter from 'vue-router'
import LeaveImView from '@/views/LeaveImView.vue'
import PopularView from '@/views/PopularView.vue'
import HashtagView from '@/views/HashtagView.vue'
import MaintagView from '@/components/TagMain.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      leaveIm: LeaveImView,
      popular: PopularView,
      hashtag: HashtagView,
      TagMain: MaintagView 
    },
    children: [
        {
          path: '/tripa',
          component: ()=> import('../components/TagMain.vue')
        },
        {
          path: '/restaurants',
          component: ()=> import('../components/TagRestaurants.vue')
        },
        {
          path: '/activities',
          component: ()=> import('../components/TagActivities.vue')
        },
        {
          path: '/photogenic',
          component: ()=> import('../components/TagPhotogenic.vue')
        }
    ]
  },
  {
    path: '/osaka',
    component: ()=> import(/*webpackChunkName: "osaka"*/'../components/osaka.vue')

  },
  {
    path: '/danang',
    component: ()=> import(/*webpackChunkName: "danang" */'../components/danang.vue')
  },
  {
    path: '/paris',
    component: ()=> import(/*webpackChunkName: "paris" */'../components/paris.vue')
  },
  {
    path: '/guam',
    component: ()=> import(/*webpackChunkName: "guam" */'../components/guam.vue')
  },
  {
    path: '/bangkok',
    component: ()=> import(/*webpackChunkName: "bangkok" */'../components/bangkok.vue')
  },
  {
    path: '/login',
    component: ()=> import('../views/LoginView.vue')
  },
  {
    path: '/mypage/:user',
    component: ()=> import('../views/UserView.vue')
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
