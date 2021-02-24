<template>
  <div class="container">
    <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="">
    <div id="state">{{gameOfChild.state}}</div>
    <div class="gameinfo">
      <p id="gametitle">{{gameOfChild.title}}</p>
      <div>
        <span id="players"><span class="material-icons">people</span> {{gameOfChild.minplayer}}~{{gameOfChild.maxplayer}}  </span>
        <span id="playtime"><ion-icon name="time"></ion-icon> {{gameOfChild.minplaytime}}~{{gameOfChild.maxplaytime}}</span>
      </div>
      <div>
        <p id="gametext">{{gameOfChild.gametext}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["gameOfChild"],
  data(){
    return{
      
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
  position:relative;
  top:15px;
  font-size: 16px;
  color:black;
  font-family:"gmarcketsans";
}
.gameinfo{
  position:relative;
  left:18px;
  top:30px;
  font-family:"gmarcketsans";
  color:#3379FF;
}

#gametext{
  color:#4E4E4E;
}
</style>