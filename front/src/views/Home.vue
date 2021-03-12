<template>
  <div class="home">
    <p id="header">샘플텍스트 및 샘플카드</p>
    <div v-for="(game,i) in games" :key="i" id="gamecard">
      <div @click="RouteToGameinfo(game)"><GameCard :game="game"></GameCard></div>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
import axios from 'axios';
export default {
  name: 'Home',
  components:{
    GameCard
  },
  data() {
    return{
      games:[]
    }
  },
  methods:{
    RouteToGameinfo(gameinfo){
      this.$router.push({name:"GameInfo",params:{game:gameinfo}})
    },
    loadGames(){
      console.log("loadGames호출");
      axios.get("http://127.0.0.1:3000/game")
      .then(res=>{
        this.games = res.data;
        console.log(res);
        console.log(this.games);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  mounted(){
    console.log("home mounted호출");
    this.loadGames();
  }
}
</script>

<style scoped>
  #header{
    top: 148px;
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
