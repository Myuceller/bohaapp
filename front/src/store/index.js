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
<<<<<<< HEAD
    getGames(state,payload){  //game목록을 array로 가져온다.
      state.games = payload
    },
    getCurations(state,payload){  //curation목록을 array로 가져온다.
      state.curations = payload
=======
    getGames(state){  //game목록을 array로 가져온다.
      axios.get('/games')
      .then(res=>{
        state.games = res.data
        console.log("state.games:",state.games)
      })
      .catch(err=>console.log(err))
    },
    getCurations(state){  //curation목록을 array로 가져온다.
      axios.get('/curation')
      .then(res=>{
        console.log('getCuration호출, res:',res);
        state.curations = res.data.data;
        console.log("this.state.curations : " , state.curations);
      })
      .catch(err=>console.log(err))
>>>>>>> dcb61e6f484d6561c7fe93fa0589564f6676d5b5
    },
    // changeRoutegames(state,payload){
    //   state.routeGames = payload;
    // }
  },
  actions: {
<<<<<<< HEAD
    GetGames:({commit},payload)=>{
      commit('getGames',payload)
    },
    GetCurations:({commit},payload)=>{
      commit('getCurations',payload)
=======
    getGames:({commit},payload)=>{
      
>>>>>>> dcb61e6f484d6561c7fe93fa0589564f6676d5b5
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
