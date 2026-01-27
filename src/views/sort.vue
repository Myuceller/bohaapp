<template>
  <div class="home">
    <p id="header">{{text}}게임 목록</p>
    <div v-for="(game,i) in games" :key="i" id="gamecard">
      <div @click="RouteToGameinfo(game)">
        <GameCard :game="game"></GameCard>
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  components:{
    GameCard :()=>import("../components/GameCard.vue")
  },
  data() {
    return{
      key:this.$route.query.key,
      text:this.$route.query.text,
      value:this.$route.query.value,
      games:''
    }
  },
  methods:{
    RouteToGameinfo(game){
      this.$router.push({name:"GameInfo",query:{gameid:game._id}})
      .catch(err=>{
        this.$router.go()
      })
    },
  },
  mounted(){
    // console.log('this.data:',this.key , this.text, this.value);
    // console.log('this.$route.params',this.$route.query.value);
    let game = this.$route.query;
    // axios.get('http://127.0.0.1:3000/games',{params:{value:game.value , key:game.key}})
    this.$http.get('/games',{params:{value:game.value , key:game.key}})
    .then(res=>{
      console.log(res);
      this.games = res.data.games.sort((a,b)=>(a.korname>b.korname)?1:-1)
    })
    .catch(err=>console.log(err));
    }
}
</script>

<style scoped>
@font-face {
  font-family: 'applesdgothic';
  font-style: normal;
  font-weight: 800;
  src: url('https://bohaapp.s3.ap-northeast-2.amazonaws.com/font/AppleSDGothicNeoB.ttf');
}
  #header{
    font: normal normal bold 20px/24px applesdgothic;
    letter-spacing: -0.4px;
    color: #272727;
    opacity: 1;
    text-align: center;
  }
  #gamecard{
    margin-top:42px;
    display: flex;
    justify-content: center;
  }
</style>
