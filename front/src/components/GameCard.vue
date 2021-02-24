<template>
  <div class="container">
    <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="">
    <div id="state">{{state}}</div>
    <p id="gametitle">{{title}}</p>
    <span class="gameinfo">
      <span id="players">{{minplayer}}~{{maxplayer}}</span>
      <span id="playtime"><ion-icon name="time"></ion-icon>{{minplaytime}}~{{maxplaytime}}</span>
    </span>
    <div id="gmaetext">
      <p>{{gametext}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      state:"new",
      title:"시크릿히틀러",
      minplayer:4,
      maxplayer:8,
      minplaytime:40,
      maxplaytime:80,
      gametext:"차원이다른마피아게임 다가와다가와줘베이베"
    }
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
  float:left;
  left:35px;
  width:136px;
  height: 136px;
}
#state{
  float: right;
  width:65px;
  height:30px;
  background: #FFEB00 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  font-size: 13px;
  align-self: center;
  font-family:"gmarcketsans"
}
#gametitle{
  font-size: 16px;
  color:black;
  font-family:"gmarcketsans";
}
.gameinfo{
  font-family:"gmarcketsans";
  color:#3379FF;
}
</style>