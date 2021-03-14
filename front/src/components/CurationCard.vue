<template>
  <div id="container">
    <div v-for="(game,i) in games" :key="i" id="thumbnails">
      <img :src="require(`../assets/thumbnail/${game.engname}.png`)" alt="">
    </div>
    <div id="background">
      <p id="detail" class="applesdgothic">{{curation.detail}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:{
    curation:Object
  },
  data(){
    return {
      games:[]
    }
  },
  mounted(){
    console.log("curation Props:",this.curation)
    this.$http.get("/game/some",{
      params:{
        ids: this.curation.games
      }
    })
    .then(res=>{
      console.log(res);
      this.games = res.data;
      console.log("this.games",this.games)
    })
  },
  methods:{
    
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
    src: url('../assets/font/AppleSDGothicNeoB.ttf') format('truetype');
  }
  .gmarcketsansbold{
    font-family: gmarcketsansbold;
  }
  .applesdgothic{
    font-family: applesdgothic;
  }
  #container {
    white-space:nowrap; 
    overflow-x: scroll;
    position:sticky;
  }
  img {
    width: 82px;
    height: 82px;
    border-radius:15px ;
  }
  #thumbnails{
    
    display: inline;
    margin-left: 16px;
    z-index: 2;
    position: relative;
  }
  #background {
    z-index: 1;
    position: relative;
    top:-52px;
    height:113px;
    background-color: #EDEDED;
    border-radius: 10px;
  }
  #detail{
    position:relative;
    left:21px;
    top:63px;
    text-align: left;
    letter-spacing: -0.36px;
    font-size: 18px;
    color:#272727;
  }
</style>