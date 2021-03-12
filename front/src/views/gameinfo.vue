<template>
  <div class="gameinfo">
    <div>
      <div id="headcontainer">
        <img src="../assets/thumbnail/splendor_t.png" alt="">
        <div id="state" class="subinfo">{{game.state}}</div>
        <div id="gametitle">{{game.korname}}</div>
      </div>
      <div class="info">
        <div class="infoitem" id="players">
          <span class="material-icons">people</span>{{game.minplayer}}~{{game.maxplayer}}
        </div>
        <div class="infoitem" id="playtime">
          {{game.mintime}}~{{game.maxtime}}
        </div>
        <div class="infoitem" id="genre">
          {{game.genre}}
        </div>
        <div class="infoitem" id="difficulty">
          {{game.difficulty}}
        </div>
      </div>
      <div id="textcontainer">
        <div>
          <p style="font-family: 'gmarcketsans'; font-size:18px"><b>게임 간단 설명</b></p>
          <p>{{game.gametext}}</p>
        </div>
        <div>
          <p style="font-family: 'gmarcketsans'; font-size:18px"><b>에디터의 한줄평</b></p>
          <p style="color:#989898;">에디터 S</p>
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
    font-style: bold;
    font-weight: 800;
    src: url('../assets/font/GmarketSansTTFBold.ttf') format('truetype');
  }
  img{
    float: left;
    float:left;
    width: 136px;
    height: 136px;
    border-radius: 10px;
  }
  #headcontainer{
    left: 35px;
    width: 322px;
    height: 136px;
    margin-top:35px;
  }
  .info{
    position: relative;
    margin-top: 25px;
    margin-bottom: 25px;
    display:grid;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: 154px 154px;
    grid-template-rows: 54px 54px;
  }
  .infoitem{
    background-color:#3379FF;
    padding:15px;
    border-radius:10px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:16px;
  }
  #state{
    position:relative;
    text-align: center;
    width:65px;
    height: 30px;
    float:left;
    font-size:13px;
    left:25px;
    top:30px;
    background: #FFEB00 0% 0% no-repeat padding-box;
    border-radius: 15px;
    color:black;
    border:1px solid black;
  }
  #gametitle{
    display: inline-block;
    left:150px;
    margin-top:50px;
    margin-left: 10px;
    width: 180px;
    height: 50px;
    font-size:18px;
    border:1px solid black;
  }
  .subinfo{
    text-align: left;
    font-size:20px;
    letter-spacing: -0.4px;
    opacity: 1;
    color:#3379FF;
  }
  #textcontainer{
    position: relative;
  }
  .gameinfo{
    position:relative;
    background-color:#F8F8F8;
    font-family:"gmarcketsans";
    border:1px solid black;
  }
  #photo{
    background-color:#FFFFFF;
  }
</style>