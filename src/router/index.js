import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/details', // colon: declares a dynamic segment in the path 
    name: 'DestinationDetails',
    component: ()=>{
      import(/*webpackChunkName: "DestinationDetails" */'../views/DestinationDetails' )
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
