<template>
  <keep-alive>
  <div id="container">
    <div id="background"></div>
    <div>
      <div>
        <img :src="`https://boha-app.s3.ap-southeast-2.amazonaws.com/${game.engname}_thumbnail.jpg`"
              onError="this.src='https://boha-app.s3.ap-southeast-2.amazonaws.com/error.jpg'" 
              alt="">
        <div class="background">
          <div v-if="game.state" id="state" :style="{backgroundColor:color , color:fontcolor}"><p><b>{{game.state}}</b></p></div>
          <div id="gametitle">{{game.korname}}</div>
        </div>
      </div>
      <div class="items">
        <div class="infoitem" id="players" style="font-size:16px;">
          <div class="material-icons" style="padding:3px; display:inline-block;">people</div>
          <div style="position:relative; display:inline-block; margin:5px;">
            <span v-if="game.minplayer!=game.maxplayer">{{game.minplayer}}~{{game.maxplayer}}</span>
            <span v-else>{{game.minplayer}}</span>
          </div>
        </div>
        <div class="infoitem" id="playtime" style="font-size:16px;">
          <ion-icon name="time" style="font-size:21px; padding-right:5px;"></ion-icon>
          <span v-if="game.mintime!=game.maxtime">{{game.mintime}}~{{game.maxtime}}</span>
          <span v-else>{{game.mintime}}</span>
        </div>
        <div class="infoitem" id="genre">
          <span>{{ formattedGenre }}</span>
        </div>
        <div class="infoitem" id="difficulty" v-bind:style="{ backgroundColor: backcolor }">
          {{game.difficulty}}
        </div>
      </div>
      <div class="expText">
        <div>
          <p class="gmarcketbold" style="font-size:18px;">게임 간단 설명</p>
          <p style="font-family:applesdgothic; color:#4E4E4E; font-size:16px">{{game.gametext}}</p>
        </div>
        <div class="gmarcket">
          <p class="gmarcketbold" style="font-size:18px"><b>에디터의 한줄평</b></p>
          <p style="color:#989898; font-size:13px">에디터 S</p>
          <p style="color:#272727; font-size:16px">"{{game.comment}}"</p>
        </div>
      </div>
    </div>
    <div id="photo">
      <p class="subinfo gmarcketbold">게임 상세 사진</p>
      <img :src="`https://boha-app.s3.ap-southeast-2.amazonaws.com/${game.engname}_1.jpg`"
           alt="">
      <img :src="`https://boha-app.s3.ap-southeast-2.amazonaws.com/${game.engname}_2.jpg`"
           alt="">
    </div>
  </div>
  </keep-alive>
</template>

<script>

export default {
  name: 'gameinfo',
  data(){
    return {
      game : this.$route.query.gameid,
      backcolor:"#09C761",
      color:"#FFEB12",
      fontcolor:"#272727"
      // game:{
      //   state:"new",
      //   korname:"로빈슨 크루소:저주받은 섬의 모험",
      //   minplayer:2,
      //   maxplayer:4,
      //   mintime:30,
      //   maxtime:40,
      //   genre:"전략",
      //   difficulty:"Hard",
      //   gametext:"농사짓는 즐거운 게임",
      //   engname:"robo77"
      // }
    }
  },
  watch: {
    game: {
      handler() {
        this.changeColor();
        this.changeStateColor();
      },
      deep: true
    }
  },
  mounted(){
    let gameid = this.$route.query.gameid;
    // axios.get('http://127.0.0.1:3000/games/one',{
    this.$api.get('/games/one',{
      params:{
        ids: gameid
      }
    }).then(res=>{
      this.game = res.data;
      console.log("this.games",this.game)
    }).catch(err=>{
      console.log(err);
    })
  },
  computed: {
    formattedGenre() {
      const genre = this.game && this.game.genre;
      if (Array.isArray(genre)) {
        if (genre.length === 1 && typeof genre[0] === 'string' && genre[0].trim().startsWith('[')) {
          try {
            const parsed = JSON.parse(genre[0]);
            if (Array.isArray(parsed)) return parsed.join(',');
          } catch (err) {
            return genre[0].replace(/[\[\]\"]/g, '').replace(/\s+/g, '');
          }
        }
        return genre.join(',');
      }
      if (typeof genre === 'string') {
        try {
          const parsed = JSON.parse(genre);
          if (Array.isArray(parsed)) return parsed.join(',');
        } catch (err) {
          return genre.replace(/[\[\]\"]/g, '').replace(/\s+/g, '');
        }
        return genre;
      }
      return '';
    },
    computedColor: function () {
      return this.color;
    }
  },
  methods:{
    changeColor(){
      if(this.game.difficulty == "easy" || this.game.difficulty=="Easy")
        this.backcolor="#09C761";
      if(this.game.difficulty == "normal" || this.game.difficulty == "Normal")
        this.backcolor="#FFA412"
      if(this.game.difficulty == "hard" || this.game.difficulty == "Hard")
        this.backcolor="#FF432B"
      if(this.game.difficulty == "expert" || this.game.difficulty == "Expert")
        this.backcolor="#76058B"
    },
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
  }
}
</script>

<style scoped>
  @font-face {
    font-family: 'gmarcketsans';
    font-style: normal;
    font-weight: 800;
    src: url('https://boha-app.s3.ap-southeast-2.amazonaws.com/font/GmarketSansTTFMedium.ttf') format('truetype');
  }
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
  img {
    position:relative;
    top:20px;
    width: 136px;
    height: 136px;
    border-radius: 5px;
  }
  #state{
    position:absolute;
    top:63px;
    left:170px;
    width:65px;
    height:30px;
    border-radius: 15px;
    text-align: center;
    padding-top:5px;
    font-size:13px;
    font-family: gmarcketsansbold;
    text-transform: uppercase;
  }
  #gametitle{ 
    display: inline-block;
    position: absolute;
    top:114px;
    width:150px;
    left:170px;
    font-size:18px;
    font-family: gmarcketsansbold;
  }
  .infoitem{
    position:relative;
    display:flex;
    border-radius: 7px;
    text-align: center;
    vertical-align: middle;
    align-items:center;
    justify-content:center;
    background-color: #3379FF;
    color:#FFFFFF;
  }
  .items{
    vertical-align: middle;
    top:200px;
    position:absolute;
    font-size:20px;
    font-family:gmarcketsansbold;
    display: grid;
    grid-template-columns: 154px 154px;
    grid-template-rows: 54px 54px;
    grid-row: auto;
    grid-column-gap:15px;
    grid-row-gap:15px;
    left:50%;
    transform: translate(-50%);
  }
  span{
    display: inline-block;
  }

  .subinfo{
    font-family: gmarcketsans;
    color:#3379FF;
    font-size:20px;
  }
  .gmarcket{
    font-family: gmarcketsans;
  }
  .gmarcketbold{
    font-family: gmarcketsansbold;
  }
  #photo{
    position:relative;
    background-color: #FFFFFF;
    top:200px;
  }
  .expText{
    position:relative;
    top:200px;
  }
  #difficulty{
    text-transform:capitalize;
  }
  #photo img{
    position: relative;
    width: 356px;
    height: 217px;
    margin-bottom: 25px;
  }
  #background{
    margin:0;
    padding:0;
    left:0;
    top:75px;
    width:100vw;
    height:500px;
    position:absolute;
    background-color:#f8f8f8;
  }
</style>
