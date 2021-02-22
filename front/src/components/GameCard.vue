<template>
  <div class="container">
    <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="">
    <div id="state">{{state}}</div>
    <p id="gametitle">{{title}}</p>
    <span class="gameinfo">
      <span id="players">{{minplayer}}~{{maxplayer}}</span>
      <v-spacer/>
      <span id="playtime">{{minplaytime}}~{{maxplaytime}}</span>
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
}
#gametitle{
  font-size: 16px;
  color:black;
}
</style>