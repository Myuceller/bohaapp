<template>
  <div class="about">
    <div id="nav">
      <AdminRoute></AdminRoute>
    </div>
    <div id="search">
      <p>검색하기</p>
    </div>
    <p>정렬은 어떻게?</p>
    <select v-model="sortType" @change="sortBy(sortType)">
       <option v-for="item in sortOptions" :value="item.value" :key="item">{{item.text}}</option>
    </select>
    <div>{{sortType}}</div>
    <div v-for="(game,index) in games" :key="index">
      <span>
        <p>{{game.korname}} // {{game.engname}} // {{game.minplayer}}명~{{game.maxplayer}}명</p>
      </span>
      <button>상세보기</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminRoute from '../components/adminroute'
export default {
  components:{
    AdminRoute
  },
  data(){
    return{
      games:[""],
      sortType: 'sort',
      sortOptions: [
          { text: 'sort by', value: 'sort' },
          { text: 'korname', value: 'korname' },
          { text: 'maxplayers', value: 'maxplayer' },
          { text: 'minplayers', value: 'minplayers'},
       ],
      game:"",
      overlay : false
    }
  },
  mounted(){
    this.getGame();
  },
  methods:{
    getGame(){
      axios.get("/127.0.0.1:3000/games",{
      }).then(res=>{
        console.log("get '/' 호출")
        console.log(res)
        this.games = res.data;
      }).catch(err=>{
        console.log(err);
      })
    },
    sortBy(sortType){
      if(sortType=="korname") this.games.sort((a,b)=> (a.korname > b.korname) ? 1 : -1 )
      if(sortType=="maxplayer") this.games.sort((a,b) => (a.maxplayer>b.maxplayer) ? 1 : -1 )
      if(sortType=="minplayer") this.games.sort((a,b) => (a.minplayer>b.minplayer) ? 1 : -1 )
    },
  }
}
</script>

<style scoped>
  button{
    border: 1px solid black;
  }
  *{
    text-align: center;
  }
  select{
    border:1px solid black;
  }
</style>>