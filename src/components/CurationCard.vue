<template>
  <div id="container">
    <div id="imgcontainer">
      <div v-for="(game,i) in games" :key="i" id="thumbnails">
        <img :src="`https://boha-app.s3.ap-southeast-2.amazonaws.com/${game.engname}_thumbnail.jpg`"
             onerror="this.src='https://boha-app.s3.ap-southeast-2.amazonaws.com/error.jpg'"
             alt="">
      </div>
    </div>
    <div id="background">
      <p id="detail" class="applesdgothic">{{curation.detail}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    curation:Object
  },
  data(){
    return {
      games:[],
    }
  },
  mounted(){
    // console.log("curation card mounted() 호출, curation Props:",this.curation)
    // console.log('this.curation.games:',this.curation.games);
    // axios.get("http://127.0.0.1:3000/games/some",{
    const ids = Array.isArray(this.curation.games)
      ? this.curation.games.join(',')
      : this.curation.games;
    this.$api.get('/games/some', {
      params: { ids }
    })
    .then(res=>{
      this.games = res.data;
      // console.log("this.games",this.games)
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
    src: url('https://boha-app.s3.ap-southeast-2.amazonaws.com/font/GmarketSansTTFBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'applesdgothic';
    font-style: normal;
    font-weight: 800;
    src: url('https://boha-app.s3.ap-southeast-2.amazonaws.com/font/AppleSDGothicNeoB.ttf') format('truetype');
  }
  .gmarcketsansbold{
    font-family: gmarcketsansbold;
  }
  .applesdgothic{
    font-family: applesdgothic;
  }
  #imgcontainer {
    position:sticky;
    white-space:nowrap; 
    overflow: scroll;
    z-index: 2;
  }
  img {
    width: 82px;
    height: 82px;
    border-radius:15px ;
  }
  #thumbnails{
    white-space:nowrap; 
    overflow-x: hidden;
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
    left:15px;
    top:63px;
    text-align: left;
    letter-spacing: -0.36px;
    font-size: 18px;
    color:#272727;
  }
</style>
