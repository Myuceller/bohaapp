import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gameinfo',
    name: 'GameInfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/gameinfo.vue')
    }
  },
  {
    path: '/curation',
    name:'Curation',
    component:()=>import("../views/Curation.vue")
  },
  {
    path:'/games',
    name:'Games',
    component:()=>import('../views/Games.vue')
  },
  {
    path:'/sort',
    name:'Sort',
    component:()=>import('../views/sort.vue')
  },
  {
    path:'/gamelist',
    name:'GameList',
    component:()=>import('../views/GameList.vue')
  },
  {
    path:'/cafeinfo',
    name:'Cafeinfo',
    component:()=>import('../views/CafeInfo.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    component: ()=>import('../views/PageNotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
