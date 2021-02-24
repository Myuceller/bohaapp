<template>
  <div class="home">
    <p id="header">샘플텍스트 및 샘플카드</p>
    <div @click="RouteToGameinfo(game)"><GameCard :gameOfChild="game"></GameCard></div>
    <GameCard/>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";

export default {
  name: 'Home',
  components:{
    GameCard
  },
  data() {
    return{
      game:{
        state:"new",
        title:"시크릿히틀러",
        minplayer:4,
        maxplayer:8,
        minplaytime:40,
        maxplaytime:80,
        gametext:"차원이다른마피아게임 다가와다가와줘베이베"
      }
    }
  },
  methods:{
    RouteToGameinfo(game){
      console.log(game);
    }
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
  #state{
    top: 203px;
    left: 296px;
    width: 65px;
    height: 30px;
    background: #FFEB00 0% 0% no-repeat padding-box;
    border-radius: 15px;
    opacity: 1;
  }
</style>
