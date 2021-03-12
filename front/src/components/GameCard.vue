<template>
  <div id="container">
    <img src="../assets/thumbnail/splendor_t.png" alt="">
    <div id="state">{{game.state}}</div> 
    <div class="gameinfo">
      <p id="gametitle">{{game.korname}}</p>
      <div class="play">
        <span id="players"><span class="material-icons">people</span> {{game.minplayer}}~{{game.maxplayer}}  </span>
        <span id="playtime"><ion-icon name="time"></ion-icon> {{game.mintime}}~{{game.maxtime}}</span>
      </div>
      <p id="gametext">{{game.gametext}}</p>
    </div>

  </div>
</template>

<script>
export default {
  props:["game"],
  data(){
    return{
      // path:"../assets/thumbnail/"+this.game.engname+".png"
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
    font-family: 'gmarcketsans';
    font-style: bold;
    font-weight: 800;
    src: url('../assets/font/GmarketSansTTFBold.ttf') format('truetype');
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
  border-radius: 15px;
  opacity: 1;
  font-size: 13px;
  text-align: center;
  vertical-align: auto;
  font-family:"gmarcketsans"
}
#gametitle{
  top:19px;
  left:18px;
  position:relative;
  font-size: 16px;
  color:black;
  font-family:"gmarcketsans";
}
.gameinfo{
  top:25px;
  position:relative;
  font-family:"gmarcketsans";
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
}
</style>