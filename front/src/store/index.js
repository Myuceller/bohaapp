import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games:"",
    curations:"",
    routeGames:[],
    game:""
  },
  mutations: {
    getGames(state){  //game목록을 array로 가져온다.
      axios.get('http://127.0.0.1:3000/games')
      .then(res=>{
        state.games = res.data
        console.log("state.games:",state.games)
      })
      .catch(err=>console.log(err))
    },
    getCurations(state){  //curation목록을 array로 가져온다.
      axios.get('http://127.0.0.1:3000/curation')
      .then(res=>{
        console.log('getCuration호출, res:',res);
        state.curations = res.data;
        console.log("this.state.curations : " , state.curations);
      })
      .catch(err=>console.log(err))
    },
    changeRoutegames(state,payload){
      state.routeGames = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
