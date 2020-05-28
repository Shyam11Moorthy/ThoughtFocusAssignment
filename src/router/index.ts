import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ToDOApp from '@/components/ToDoApp.vue'
import Profile from '@/components/Profile.vue'

Vue.use(VueRouter)

  
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [ {
    
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/Search.vue')
  },
  {
    path: '/ToDOApp',
    name: 'ToDOApp',
    component: ToDOApp,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../components/ToDOApp.vue')
  },
  {
    path: '/EditProfile',
    name: 'EditProfile',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../components/EditProfile.vue')
  }
  ]
})

export default router
