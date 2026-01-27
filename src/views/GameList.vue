<template>
  <div class="home">
    <div id="filter">
      <div>
        인원 :
        <label for="2">2</label><input type="checkbox" value="2" v-model="players">
        <label for="3">3</label><input type="checkbox" value="3" v-model="players">
        <label for="4">4</label><input type="checkbox" value="4" v-model="players">
        <label for="5">5</label><input type="checkbox" value="5" v-model="players">
        <label for="6">6+</label><input type="checkbox" value="6" v-model="players">
      </div>
      <div>
        장르 :
        <label for="전략">전략</label><input type="checkbox" value="전략" v-model="genre">
        <label for="추리">추리</label><input type="checkbox" value="추리" v-model="genre">
        <label for="파티">파티</label><input type="checkbox" value="파티" v-model="genre">
        <label for="블러핑">블러핑</label><input type="checkbox" value="블러핑" v-model="genre">
        <label for="협동">협동</label><input type="checkbox" value="협동" v-model="genre">
      </div>
      <div>
        난이도 :
        <label for="easy">easy</label><input type="checkbox" value="easy" v-model="difficulty">
        <label for="normal">normal</label><input type="checkbox" value="normal" v-model="difficulty">
        <label for="hard">hard</label><input type="checkbox" value="hard" v-model="difficulty">
        <label for="expert">expert</label><input type="checkbox" value="expert" v-model="difficulty">
      </div>
      <div>
        상태 :
        <label for="new">new</label><input type="checkbox" value="new" v-model="state">
        <label for="best">best</label><input type="checkbox" value="best" v-model="state">
        <label for="hot">hot</label><input type="checkbox" value="hot" v-model="state">
      </div>
      <div>
        누른것: {{players}} {{genre}} {{difficulty}} {{state}}
      </div>
    </div>
    <div v-for="(game,i) in games" :key="i" class="gamecards">
      <div 
          @click="RouteToGameinfo(game)"
          id="gamecard"
          v-if="FilterPlayer(game) && FilterGenre(game) && FilterDifficulty(game) && FilterState(game)">
        <GameCard :game="game"></GameCard>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";

export default {
  components:{
    GameCard :()=>import("../components/GameCard.vue"),
    InfiniteLoading
  },
  data(){
    return {
      games:[],
      players:[],
      genre:[],
      difficulty:[],
      state:[],
      page:1,
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
    FilterPlayer(game){
      console.log(game)
      for (const player of this.players) {
        if(game.minplayer<=player && game.maxplayer>=player)
          continue;
        else
          return false;
      }
      return true;
    },
    FilterGenre(game){  //this.genre => 유저가 선택한 장르 [0]=>전략 [1]=>추리
    let re = new RegExp(this.genre);
      for(let genre of this.genre){
        console.log("re : ",re,"genre",genre,"this.genre:",this.genre,"game.genre:",game.genre);
        console.log("re.test(genre):",re.test(genre));
        if(re.test(game.genre))
          continue;
        else
          return false;
      }
      return true;
    },
    FilterDifficulty(game){
      for (const difficulty of this.difficulty) {
        if(game.difficulty == difficulty)
          continue;
        else
          return false;
      }
      return true;
    },
    FilterState(game){
      for (const state of this.state) {
        if(game.state == state)
          continue;
        else
          return false;
      }
      return true;
    },
    infiniteHandler($state){
      console.log("hello infiniteHandler on",$state);
      // axios.get("http://127.0.0.1:3000/games/page",{
      this.$http.get("/games/page",{
        params:{
          page:this.page
        }
      }).then(res=>{
        console.log("infiniteHandler then, res:",res)
        if(res.data.length){
          this.page += 1;
          for (let i = 0; i < res.data.length; i++) {
            this.games.push(res.data[i])
          }
          console.log("this.games:",this.games);
          $state.loaded();
        }else{
          $state.complete();
        }
      })
    }
  },
  mounted(){
    // console.log("route.query.games",this.$store.state.games)
    //   let ids =[];
    //   this.$store.state.games.forEach(element => {
    //     ids.push(element._id)
    //   });
    //   console.log("gameids",ids);
    //   axios.get('http://127.0.0.1:3000/games/some',{
    //   // this.$http.get('/games/some',{
    //     params:{
    //       ids: ids
    //     }
    //   }).then(res=>{
    //     this.games = res.data;
    //     console.log("this.games",this.games)
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    // axios.get('http://127.0.0.1:3000/games/page')
    this.$http.get('/games/page')
    .then(res=>{
      console.log("get games/page:",res);
      this.games = res.data;
    }).catch(err=>{
      console.log(err)
    })
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