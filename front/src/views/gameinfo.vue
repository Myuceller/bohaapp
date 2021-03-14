<template>
  <div id="container">
    <div>
      <div>
        <img :src="require(`../assets/thumbnail/${game.engname}.png`)" alt="">
        <div class="background">
          <div v-if="game.state" id="state"><p><b>{{game.state}}</b></p></div>
          <div id="gametitle">{{game.korname}}</div>
        </div>
      </div>
      <div class="items">
        <div class="infoitem" id="players" style="font-size:16px;">
          <div class="material-icons" style="padding:3px; display:inline-block;">people</div>
          <div style="position:relative; display:inline-block; margin:5px;">{{game.minplayer}}~{{game.maxplayer}}</div>
        </div>
        <div class="infoitem" id="playtime" style="font-size:16px;">
          <ion-icon name="time" style="font-size:21px;"></ion-icon> <span>{{game.mintime}}~{{game.maxtime}}</span>
        </div>
        <div class="infoitem" id="genre">
          {{game.genre}}
        </div>
        <div class="infoitem" id="difficulty">
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
          <p style="color:#272727; font-size:16px">"속느냐 속이느냐 그것이 문제로다"</p>
        </div>
      </div>
    </div>
    <div id="photo">
      <p class="subinfo gmarcketbold">게임룰 설명영상</p>
      <a href="https://www.youtube.com/watch?v=78Ga9vT3eIE">ㅁㄴㅇㄹ</a>
      <p class="subinfo gmarcketbold">개임 상세 사진</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameinfo',
  data(){
    return {
      game : this.$route.params.game
      // game:{
      //   state:"new",
      //   korname:"로빈슨 크루소:저주받은 섬의 모험",
      //   minplayer:2,
      //   maxplayer:4,
      //   mintime:30,
      //   maxtime:40,
      //   genre:"전략",
      //   difficulty:"Hard",
      //   gametext:"농사짓는 즐거운 게임"
      // }
    }
  },
  mounted(){
    // console.log(this.game)
  }
}
</script>

<style scoped>
  @font-face {
    font-family: 'gmarcketsans';
    font-style: normal;
    font-weight: 800;
    src: url('../assets/font/GmarketSansTTFMedium.ttf') format('truetype');
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
  img {
    position:relative;
    top:20px;
    width: 136px;
    height: 136px;
    border-radius: 5px;
  }
  #state{
    position:absolute;
    background-color: #FFEB00;
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
    padding: 12px 0px;
    border-radius: 7px;
    text-align: center;
    vertical-align: middle;
    align-items:center;
    justify-content:center;
    background-color: #3379FF;
    color:#FFFFFF;

  }
  .items{
    position:absolute;
    top:200px;
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
    top:200px;
  }
  .expText{
    position:relative;
    top:200px;
  }
</style>