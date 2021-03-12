<template>
  <div id="container">
    <div>
      <div>
        <img src="../assets/thumbnail/splendor_t.png" alt="">
        <div id="state"><p><b>{{game.state}}</b></p></div>
        <div id="gametitle">{{game.korname}}</div>
      </div>
      <div class="items">
        <div class="infoitem" id="players" style="font-size:16px;">
          <span class="material-icons">people</span><span> {{game.minplayer}}~{{game.maxplayer}}</span>
        </div>
        <div class="infoitem" id="playtime" style="font-size:16px;">
          <ion-icon name="time" style="font-size:21px;"></ion-icon>
          {{game.mintime}}~{{game.maxtime}}
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
          <p><b>게임 간단 설명</b></p>
          <p style="font-family:applesdgothic; color:#4E4E4E;">{{game.gametext}}</p>
        </div>
        <div>
          <p><b>에디터의 한줄평</b></p>
          <p>에디터 S</p>
          <p>속느냐 속이느냐 그것이 문제로다</p>
        </div>
      </div>
    </div>
    <div id="photo">
      <p class="subinfo">게임룰 설명영상</p>
      <a href="https://www.youtube.com/watch?v=78Ga9vT3eIE">ㅁㄴㅇㄹ</a>
      <p class="subinfo">개임 상세 사진</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameinfo',
  data(){
    return {
      // game : this.$route.params.game
      game:{
        state:"new",
        korname:"크베들린부르크의 돌팔이 약장수",
        minplayer:2,
        maxplayer:4,
        mintime:30,
        maxtime:40,
        genre:"전략",
        difficulty:"Hard",
        gametext:"농사짓는 즐거운 게임"
      }
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
    font-family: 'applesdgothic';
    font-style: normal;
    font-weight: 800;
    src: url('../assets/font/AppleSDGothicNeoEB.ttf') format('truetype');
  }
  img{
    position:relative;
    top:20px;
    width: 136px;
    height: 136px;
    border-radius: 5px;
  }
  #state{
    top:-90px;
    position:relative;
    background-color: #FFEB00;
    left:170px;
    width:65px;
    height:30px;
    border-radius: 15px;
    text-align: center;
    padding-top:5px;
    font-size:13px;
    font-family: gmarcketsans;
  }
  #gametitle{ 
    display: inline-block;
    position: relative;
    width:150px;
    top:-70px;
    left:170px;
    font-size:18px;
    font-family: gmarcketsans;
  }
  .infoitem{
    top:-40px;
    display: inline-block;
    position:relative;
    padding: 15px 0px;
    width: 154px;
    height: 54px;
    background: #3379FF 0% 0% no-repeat padding-box;
    border-radius: 7px;
    text-align: center;
    vertical-align: middle;
    font-family: gmarcketsans;
    color:#FFFFFF;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .subinfo{
    font-family: gmarcketsans;
    color:#3379FF;
    font-size:20px;
  }
  .items{
    font-size:20px;
  }
</style>