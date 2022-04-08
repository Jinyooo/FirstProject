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
<<<<<<< HEAD
  {
    path: '/details', // colon: declares a dynamic segment in the path 
    name: 'DestinationDetails',
    component: ()=>{
      import(/*webpackChunkName: "DestinationDetails" */'../views/DestinationDetails' )
    }
  }
=======
>>>>>>> c8927687dc6d5cf856c1ac4e4237606dd316bb02

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
