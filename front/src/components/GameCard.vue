<template>
  <div id="container">
    <img :src="require(`../assets/thumbnail/${game.engname}.png`)" alt="">
    <div v-if="game.state" id="state" class="gmarcketsansbold">{{game.state}}</div> 
    <div class="gameinfo">
      <p id="gametitle" class="gmarcketsansbold">{{game.korname}}</p>
      <div class="play gmarcketsansbold">
        <span class="material-icons" style="font-size:19px;">people</span>  <span>{{game.minplayer}}~{{game.maxplayer}}</span>
        <ion-icon name="time" style="font-size:19px;"></ion-icon> <span id="playtime">{{game.mintime}}~{{game.maxtime}}</span>
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
    }
  },
  mounted(){
    // this.path = "../assets/thumbnail/"+this.game.engname+".png";
    // console.log("GameCard props:",this.path);
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
  position:relative;
  color:#3379FF;
  background-color: #F8F8F8;
  z-index: 1;
  border-radius: 10px;
}
#gametext{
  display: inline-block;
  width:145px;
  height: 35px;
  left:18px;
  position:relative;
  color:#4E4E4E;
  font-size: 13px;
}
.play{
  left:18px;
  position:relative;
  display: flex;
  text-align: center;
  vertical-align: middle;
  font-size:14px;
}
</style>