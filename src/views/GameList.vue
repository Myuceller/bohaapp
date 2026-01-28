<template>
  <div class="home">
    <div id="filter" class="filters">
      <div class="filter-group">
        <div class="filter-title">인원</div>
        <div class="filter-options">
          <label class="filter-chip">
            <input type="checkbox" value="2" v-model="players">
            <span>2</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="3" v-model="players">
            <span>3</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="4" v-model="players">
            <span>4</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="5" v-model="players">
            <span>5</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="6" v-model="players">
            <span>6+</span>
          </label>
        </div>
      </div>
      <div class="filter-group">
        <div class="filter-title">장르</div>
        <div class="filter-options">
          <label class="filter-chip">
            <input type="checkbox" value="전략" v-model="genre">
            <span>전략</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="추리" v-model="genre">
            <span>추리</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="파티" v-model="genre">
            <span>파티</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="블러핑" v-model="genre">
            <span>블러핑</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="협동" v-model="genre">
            <span>협동</span>
          </label>
        </div>
      </div>
      <div class="filter-group">
        <div class="filter-title">난이도</div>
        <div class="filter-options">
          <label class="filter-chip tone-easy">
            <input type="checkbox" value="easy" v-model="difficulty">
            <span>easy</span>
          </label>
          <label class="filter-chip tone-normal">
            <input type="checkbox" value="normal" v-model="difficulty">
            <span>normal</span>
          </label>
          <label class="filter-chip tone-hard">
            <input type="checkbox" value="hard" v-model="difficulty">
            <span>hard</span>
          </label>
          <label class="filter-chip tone-expert">
            <input type="checkbox" value="expert" v-model="difficulty">
            <span>expert</span>
          </label>
        </div>
      </div>
      <div class="filter-group">
        <div class="filter-title">상태</div>
        <div class="filter-options">
          <label class="filter-chip">
            <input type="checkbox" value="new" v-model="state">
            <span>new</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="best" v-model="state">
            <span>best</span>
          </label>
          <label class="filter-chip">
            <input type="checkbox" value="hot" v-model="state">
            <span>hot</span>
          </label>
        </div>
      </div>
      <div class="filter-summary">
        <span class="summary-label">선택</span>
        <span class="summary-values">
          {{ summaryPlayers }} {{ summaryGenre }} {{ summaryDifficulty }} {{ summaryState }}
        </span>
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
  computed: {
    summaryPlayers() {
      if (!this.players.length) return '';
      return this.players.map((v) => `${v}인`).join(', ');
    },
    summaryGenre() {
      if (!this.genre.length) return '';
      return this.genre.join(', ');
    },
    summaryDifficulty() {
      if (!this.difficulty.length) return '';
      return this.difficulty.join(', ');
    },
    summaryState() {
      if (!this.state.length) return '';
      return this.state.join(', ');
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
      this.$api.get("/games/page",{
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
    this.$api.get('/games/page')
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
  src: url('https://boha-app.s3.ap-southeast-2.amazonaws.com/font/AppleSDGothicNeoB.ttf');
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
  .filters{
    margin: 16px 16px 8px;
    padding: 16px 14px 18px;
    border-radius: 14px;
    background: #eef4ff;
    box-shadow: none;
    border: 1px solid rgba(51, 121, 255, 0.2);
    position: relative;
    overflow: hidden;
    font-family: applesdgothic;
  }
  .filter-group{
    display: grid;
    grid-template-columns: 70px 1fr;
    align-items: start;
    gap: 10px;
    margin-bottom: 10px;
  }
  .filter-title{
    font-size: 13px;
    color: #1f3a6b;
    font-weight: 700;
    letter-spacing: -0.2px;
    margin-top: 4px;
  }
  .filter-options{
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .filter-chip{
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  .filter-chip input{
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .filter-chip span{
    display: inline-block;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    line-height: 1;
    background: #ffffff;
    color: #1f3a6b;
    border: 1px solid rgba(51, 121, 255, 0.2);
    box-shadow: none;
    transition: all 0.2s ease;
    text-transform: lowercase;
  }
  .filter-chip input:checked + span{
    background: #3379ff;
    color: #ffffff;
    border-color: #3379ff;
    box-shadow: none;
    transform: translateY(-1px);
  }
  .filter-chip.tone-easy input:checked + span{ background: #09c761; border-color: #09c761; }
  .filter-chip.tone-normal input:checked + span{ background: #ffa412; border-color: #ffa412; }
  .filter-chip.tone-hard input:checked + span{ background: #ff432b; border-color: #ff432b; }
  .filter-chip.tone-expert input:checked + span{ background: #76058b; border-color: #76058b; }
  .filter-summary{
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 12px;
    color: #4a5c7a;
    margin-top: 6px;
    padding-top: 8px;
    border-top: 1px dashed rgba(51, 121, 255, 0.25);
  }
  .summary-label{
    font-weight: 700;
    color: #1f3a6b;
  }
  .summary-values{
    color: #5a6f94;
  }
</style>
