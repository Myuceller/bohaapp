<template>
  <div>
    <div id="nav">
      <AdminRoute></AdminRoute>
    </div>
    <div id="form">
      <input v-model="form.korname"/> 한글이름:{{form.korname}}
      <input v-model="form.engname"/> 영어이름:{{form.engname}}
      <input v-model="form.minplayer"/> 최소인원:{{form.minplayer}}
      <input v-model="form.maxplayer"/> 최대인원:{{form.maxplayer}}
      <input v-model="form.mintime"/> 최소플레이타임:{{form.mintime}}
      <input v-model="form.maxtime"/> 최대플레이타임:{{form.maxtime}}
      <input v-model="form.gametext"/> 게임의 짧은 소개글:{{form.gametext}}
      <input v-model="form.state"/> 게임의 상태:{{form.state}}
      <input v-model="form.genre"/> 장르: {{form.genre}}
      <input v-model="form.difficulty"/> 난이도:{{form.difficulty}}
      <input v-model="form.comment"/> 코멘트:{{form.comment}}
    </div>
    <div id="container">
      <img :src="require(`../assets/thumbnail/sample.png`)" alt="">
      <div v-if="form.state" id="state" class="gmarcketsansbold" :style="{backgroundColor:color , color:fontcolor}">{{form.state}}</div> 
      <div class="gameinfo">
        <p id="gametitle" class="gmarcketsansbold">{{form.korname}}</p>
        <div class="play gmarcketsansbold">
          <span class="material-icons" style="font-size:19px;">people</span>  <span>{{form.minplayer}}~{{form.maxplayer}}</span>
          <ion-icon name="time" style="font-size:19px;"></ion-icon> <span id="playtime">{{form.mintime}}~{{form.maxtime}}</span>
        </div>
        <p id="gametext" class="applesdgothic">{{form.gametext}}</p>
      </div>
    </div>
    <div>
      <button @click="addgame">게임 추가</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AdminRoute from "../components/adminroute.vue";
import GameCard from "../components/GameCard.vue";

export default {
  components:{
    AdminRoute,
    GameCard
  },
  data(){
    return {
      form:{
        korname:"",
        engname:"",
        minplayer:"",
        maxplayer:"",
        mintime:"",
        maxtime:"",
        gametext:"",
        state:"",
        genre:"",
        difficulty:"",
        comment:""
      }
    }
  },
  methods:{
    addgame(){
      let game = {
        korname : this.form.korname,
        engname : this.form.engname,
        minplayer : this.form.minplayer,
        maxplayer : this.form.maxplayer,
        mintime : this.form.mintime,
        maxtime : this.form.maxtime,
        gametext : this.form.gametext,
        genre : this.form.genre,
        difficulty : this.form.difficulty,
        comment : this.form.comment
      };
      axios.post('/127.0.0.1:3000/games',game)
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>console.log(err))
    }
  }
}
</script>

<style scoped>
  button{
    border:1px solid black;
    position:relative;
    top:60px;
  }
  input{
    border:0.3px solid black;
    margin:3px;
  }
  @font-face {
    font-family: 'gmarcketsansbold';
    font-style: bold;
    font-weight: 800;
    src: url('../assets/font/GmarketSansTTFBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'applesdgothic';
    font-style: normal;
    font-weight: 800;
    src: url('../assets/font/AppleSDGothicNeoEB.ttf') format('truetype');
  }
  .gmarcketsansbold{
    font-family: gmarcketsansbold;
  }
  .applesdgothic{
    font-family: applesdgothic;
  }
img{
  position: relative;
  left:14px;
  z-index: 2;
  float:left;
  width:136px;
  height: 136px;
  margin-right: 18px;
  border-radius: 10px;
}
#state{
  float: right;
  position: relative;
  z-index: 2;
  top:12px;
  width:65px;
  height:30px;
  background: #FFEB00 0% 0% no-repeat padding-box;
  padding-top:5.5px;
  border-radius: 15px;
  opacity: 1;
  font-size: 13px;
  text-align: center;
  vertical-align: auto;
  text-transform: uppercase;
}
#gametitle{
  top:19px;
  left:18px;
  position:relative;
  font-size: 16px;
  color:black;
}
.gameinfo{
  top:25px;
  width: 356px;
  height: 127px;
  position:relative;
  color:#3379FF;
  background-color: #f8f8f8;
  z-index: 1;
  border-radius: 10px;
}
#gametext{
  display: inline-block;
  top:13px;
  width:145px;
  height: 35px;
  left:18px;
  position:relative;
  color:#4E4E4E;
  font-size: 13px;
}
.play{
  left:18px;
  margin-top:18px;
  position:relative;
  display: flex;
  text-align: center;
  vertical-align: middle;
  font-size:14px;
}
</style>