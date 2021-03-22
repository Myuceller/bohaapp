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
    path:'/admin',
    name:'Admin',
    component:()=>import('../admin/admin.vue')
  },
  {
    path:'/admingames',
    name:'AdminGames',
    component:()=>import('../admin/AdminGames.vue')
  },
  {
    path:'/addcuration',
    name:'AddCuration',
    component:()=>import('../admin/AddCuration.vue')
  },
  {
    path:'/admincurations',
    name:'admincurations',
    component:()=>import('../admin/AdminCurations.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
