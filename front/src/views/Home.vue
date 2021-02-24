<template>
  <div class="home">
    <p id="header">샘플텍스트 및 샘플카드</p>
    <div @click="RouteToGameinfo(game)"><GameCard :gameOfChild="game"></GameCard></div>
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
      game:[""]
    }
  },
  methods:{
    RouteToGameinfo(game){
      this.$router.push({name:"GameInfo",query:{game:game}})
    },
    loadGames(){
      this.$http.get("/gameinfo")
      .then(res=>{
        this.game = res.data.data
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.loadGames();
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
