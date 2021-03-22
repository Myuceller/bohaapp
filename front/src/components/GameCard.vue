<template>
  <div id="container">
    <img :src="require(`../assets/thumbnail/${game.engname}.png`)" alt="">
    <div v-if="game.state" id="state" class="gmarcketsansbold" :style="{backgroundColor:color , color:fontcolor}">{{game.state}}</div> 
    <div class="gameinfo">
      <p id="gametitle" class="gmarcketsansbold">{{game.korname}}</p>
      <div class="play gmarcketsansbold">
        <span class="material-icons" style="font-size:19px;">people</span>  
          <span v-if="game.minplayer!=game.maxplayer" style="margin-right:5px; margin-left:3px;">{{game.minplayer}}~{{game.maxplayer}}</span>
          <span v-else style="margin-right:5px; margin-left:3px;">{{game.minplayer}}</span>
        <ion-icon name="time" style="font-size:19px;"></ion-icon>
        <span v-if="game.mintime!=game.maxtime">{{game.mintime}}~{{game.maxtime}}</span>
        <span v-else>{{game.mintime}}</span>
      </div>
      <p id="gametext" class="applesdgothic">{{game.gametext}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:["game"],
  data(){
    return{
      color:"#FFEB12",
      fontcolor:"#272727"
    }
  },
  methods:{
    changeStateColor(){
      if(this.game.state == "hot" || this.game.state == "Hot"){
        this.color = '#FF7227'
        this.fontcolor = '#FFFFFF'
      }
      if(this.game.state == 'best' || this.game.state == 'Best'){
        this.color = '#337AFF'
        this.fontcolor = '#FFFFFF'
      }
    }
  },
  mounted(){
    // this.path = "../assets/thumbnail/"+this.game.engname+".png";
    // console.log("GameCard props:",this.path);
    this.changeStateColor();
  }
}
</script>

<style scoped>
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
  /* background: #FFEB00 0% 0% no-repeat padding-box; */
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