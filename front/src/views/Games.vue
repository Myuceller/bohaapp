<template>
  <div class="home">
    <p id="header">{{detail}}</p>
    <div v-for="(game,i) in games" :key="i">
      <div @click="RouteToGameinfo(game)" id="gamecard">
        <GameCard :game="game"></GameCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GameCard from "../components/GameCard.vue";

export default {
  name: 'Home',
  components:{
    GameCard
  },
  data() {
    return{
      games:this.$route.params.games,
      detail:this.$route.params.detail
    }
  },
  methods:{
    RouteToGameinfo(gameinfo){
      localStorage.setItem("game",gameinfo)
      this.$router.push({name:"GameInfo",params:{game:gameinfo}})
    },
  },
  mounted(){
    //localStorage.vuex =>games
    let gameids = this.$route.params.games;

    axios.get('/games/some',{
      params:{
        ids: gameids
      }
    }).then(res=>{
      this.games = res.data;
      console.log("this.games",this.games)
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
  #header{
    top: 148px;
    left: 26px;
    width: 189px;
    height: 24px;
    font: normal normal bold 20px/24px Apple SD Gothic Neo;
    letter-spacing: -0.4px;
    color: #272727;
    opacity: 1;
  }
  #gamecard{
    margin-top:42px;
  }
</style>
