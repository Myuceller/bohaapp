<template>
  <v-app id="inspire">
    <div id="navdrawer">
      <v-navigation-drawer v-model="drawer" app>
        <div style="top:80px; position:relative;">
          <div class='navItems'
              v-for="(item,index) in items"
              :key="index"
              @click="routeToCuration(item.curationName)"
              >
            <img class='icon' :style="{borderColor:item.iconborder}" :src="require(`./assets/icons/${item.icon}_black.svg`)"/>{{item.text}}
          </div>
          <div class='navItems'
              v-for="(item,index) in PlayerItems" 
              :key="index+'a'" 
              @click="routeToplayer(item.route)">
            <img class='icon' :style="{borderColor:item.iconborder}" :src="require(`./assets/icons/${item.icon}_black.svg`)"/>{{item.text}}
          </div>
        </div>
      </v-navigation-drawer>
    </div>
    <v-app-bar app color="#3379FF" flat style="position:fixed; z-index:1234;">
      <v-app-bar-nav-icon color="#FFFFFF" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><b style="color:#FFFFFF; font-family:gmarcketsans">보드게임하자</b></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="search = !search , overlay = !overlay">
        <v-icon color="#FFFFFF">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main id="main">
      <v-container fluid>
        <div>
          <v-overlay :value="overlay">
             <input
              v-if="search && !drawer"
              :value="gameInput"
              placeholder="무엇이든 입력해 주세요. 바로 찾아드릴게요!"
              v-on:input="typing"
              type='text'
              @input="submitAutoComplete"
              id ='searchBox'
              autocomplete="nope"
              />
            <div class="autocomplete disabled search" v-if="search&&gameInput">
              <div
                @click="RouteToGameinfo(res), overlay=false"
                v-for="(res,i) in result"
                :key="i"
                class='searchItem'
                >{{ res.korname }}</div>
            </div>
          </v-overlay>
        </div>
        <div id="background">
          <router-view class="routerview" :key="$route.fullPath"></router-view>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations } from 'vuex';
export default {
  name: 'App',
  data(){
    return{
      PlayerItems:[
        {text:'인원 별 추천게임',route:'Player' ,color:'#8B8B8B' , icon:'people',iconborder:"#265EC7"},
        {text:'카페 이용안내',route:'Cafeinfo' , color:'#7A604C' , icon:'coffee' , iconborder:"#534133"}
      ],
      items:[
        {text:'인기 게임 TOP 10',curationName:"인기 Top10" ,color:'#FF7227',icon:'star' , iconborder:"#D94B00"},
        {text:'게임마스터 추천게임' ,curationName:'게임마스터추천 "이달의게임"' , color:'#3379FF' , icon:'thumb_up' , iconborder:"#606060"}
      ],
      overlay:false,
      search:false,
      gameInput:"",
      result:"",
      drawer:false,
      games:this.$store.state.games.sort((a,b)=>(a.korname>b.korname)?1:-1)
    }
  },
  methods:{
    ...mapMutations(['getGames,getCurations']),
    ...mapActions(['GetGames,GetCurations']),
    typing(e){
      this.gameInput = e.target.value;
    },
    submitAutoComplete() {
      // let items = document.getElementsByClassName('searchItem');
      // for (let i = 0; i < items.length; i++) {
      //   for (let j = 0; j < items[i].textContent.length; j++) {
      //     if(items[i].textContent[j] == this.gameInput[j]){
      //       items[i].textContent.match()
      //     }
      //   }
      // }
      const autocomplete = document.querySelector(".autocomplete");
      if (this.gameInput) {
        this.result = this.games.filter((game) => {  //서치 게임과 일치하는 오브젝트 배열
          return game.korname.match(new RegExp(this.gameInput, "i"))
        });
      } else {
        autocomplete.classList.add("disabled");
      }
    },
    RouteToGameinfo(res){
      this.search = false;
      console.log('router info ' ,res)
      this.$router.push({name:"GameInfo",query:{gameid:res._id}})
      .catch(err=>{
          this.$router.go()
      })
    },
    routeToplayer(route){
      this.$router.push({name:route})
      .catch(err=>{
          this.$router.go()
        })
    },
    routeToCuration(curationName){
      axios.get('http://127.0.0.1:3000/curation/name',{params:curationName})
      // this.$http.get('/curation/name',{params:curationName})
      .then(res=>{
        console.log(res);
        this.$router.push({name:'Games',query:{games:res.data.games,detail:res.data.detail}})
        .catch(err=>{
          this.$router.go()
        })
      })
    }
  },
  mounted(){
    axios.get('http://127.0.0.1:3000/games/all')
    // this.$http.get('/games/all')
      .then(res=>{
        this.$store.state.games = res.data;
        this.$store.dispatch('GetGames',res.data);
        console.log('app.vue에서 mounted로 axios.get /games호출, res.data:',res.data);
      })
      .catch(err=>console.log(err))
    axios.get('http://127.0.0.1:3000/curation')
    // this.$http.get('/curation')
      .then(res=>{
        console.log('app.vue에서 mounted로 axios.get /curation res:',res);
        this.$store.dispatch('GetCurations',res.data.data);
      })
      .catch(err=>console.log(err))
    console.log('this.games from app.vue',this.games);
  }
};
</script>

<style scoped>
  @font-face {
    font-family: 'gmarcketsans';
    font-style: bold;
    font-weight: 800;
    src: url('./assets/font/GmarketSansTTFBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'AppleSdGothicNeoBold';
    font-style: bold;
    font-weight:700;
    src: url('./assets/font/AppleSDGothicNeoB.ttf');
  }
  .searchItem{
    left:0;
    position: relative;
    cursor: pointer;
    font-size: 18px;
    height:45px;
    padding-top: 12px;
    padding-left:28px;
    font-family:gmarcketsans;
    z-index: 3;
    transition: background-color .5s;
    color:#646464;
  }
  #searchItem:hover{
    background-color:#2626262A;
  }
  .search{
    left:50%;
    margin-left: -47.5%;
    top:140px;
    border-radius: 7px;
    background-color: #f8f8f8;
    position:fixed;
    overflow: scroll;
    width:95%;
    height:238px;
    z-index: 3;
  }
  #searchBox{
    left:50%;
    margin-left: -47.5%;
    font-size: 16px;
    border-radius: 7px;
    top:73px;
    width:95%;
    height:51px;
    z-index: 3;
    padding-left: 20px;
    position:fixed;
    background-color: #F8F8F8;
  }
  .navItems{
    margin-left:0px;
    font-size:16px;
    font-family: AppleSdGothicNeoBold;
    height:55px;
    padding-top:11px;
    color:#535353;
    transition: background-color .5s;
  }
  .navItems:hover{
    background-color: #2626262A;
  }
  .icon{
    display: inline;
    position: relative;
    width:20px;
    height:20px;
    margin-top:3px;
    margin-left:25px;
    margin-right:20px;
    top:3px;
  }
  /* #background{
    position:fixed;
    top:56px; left: 0;
    width:100%; height: 100%;
    color:rgba(0, 0, 0, 0.822);
    transition: all .35s;
    opacity: 1;visibility: visible;
    z-index: 2;
  } */
</style>
