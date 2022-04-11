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
    chilren: [

      {
        path: 'restaurants', 
        component: () => import('@/components/TagRestaurants.vue')
      },
      {
        path: 'activities', 
        component: () => import('@/components/TagActivities.vue')
      }
    ]
  }
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
