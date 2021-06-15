import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
import vueInstance from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games:"",
    curations:"",
    routeGames:[],
    game:""
  },
  mutations: {
    getGames(state,payload){  //game목록을 array로 가져온다.
      state.games = payload
    },
    getCurations(state,payload){  //curation목록을 array로 가져온다.
      state.curations = payload
    },
    changeRoutegames(state,payload){
      state.routeGames = payload;
    }
  },
  actions: {
    GetGames:({commit},payload)=>{
      commit('getGames',payload)
    },
    GetCurations:({commit},payload)=>{
      commit('getCurations',payload)
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
