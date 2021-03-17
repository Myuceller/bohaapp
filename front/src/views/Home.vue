<template>
  <div class="home">
    <p id="header">샘플텍스트 및 샘플카드</p>
    <div v-for="(game,i) in this.$store.state.games" :key="i" id="gamecard">
      <div @click="RouteToGameinfo(game)"><GameCard :game="game"></GameCard></div>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
// import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
  name: 'Home',
  components:{
    GameCard
  },
  data() {
    return{
      games:this.$store.state.games
    }
  },
  methods:{
    ...mapMutations(['getGames']),
    RouteToGameinfo(gameinfo){
      this.$router.push({name:"GameInfo",params:{game:gameinfo}})
    },
    // loadGames(){
    //   console.log("loadGames호출");
    //   axios.get("http://127.0.0.1:3000/games")
    //   .then(res=>{
    //     this.games = res.data;
    //     console.log(res);
    //     console.log(this.games);
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // }
  },
  mounted(){
    this.getGames();
    // console.log("home mounted호출");
    // this.loadGames();
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'applesdgothic';
  font-style: normal;
  font-weight: 800;
  src: url('../assets/font/AppleSDGothicNeoB.ttf') format('truetype');
}
  #header{
    top: 148px;
    width: 189px;
    height: 24px;
    font: normal normal bold 20px/24px applesdgothic;
    letter-spacing: -0.4px;
    color: #272727;
    opacity: 1;
  }
  #gamecard{
    margin-top:42px;
  }
</style>
