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

export default {
  name: 'Home',
  components:{
    GameCard : ()=>import("../components/GameCard.vue")
  },
  data() {
    return{
      games:"",
      detail:this.$route.query.detail
    }
  },
  methods:{
    RouteToGameinfo(gameinfo){
      console.log(gameinfo);
      this.$router.push({name:"GameInfo",query:{gameid:gameinfo._id}})
      .catch(err=>{
        this.$router.go()
      })
    },
  },
  mounted(){
    //localStorage.vuex =>games
    let gameids = this.$route.query.games;

    // axios.get('http://127.0.0.1:3000/games/some',{
    this.$http.get('/games/some',{
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
    font: normal normal bold 20px/24px Apple SD Gothic Neo;
    letter-spacing: -0.4px;
    color: #272727;
    opacity: 1;
  }
  #gamecard{
    margin-top:42px;
    position:relative;
    display: flex;
    justify-content: center;
  }
</style>
