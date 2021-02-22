<template>
  <div class="gameinfo">
    <div id="headcontainer">
      <img src="https://developer.mozilla.org/static/img/favicon144.png" alt="">
      <div id="state" class="subinfo">{{state}}</div>
      <div id="gametitle">{{gametitle}}</div>
    </div>
    <div class="info">
      <div class="infoitem" id="players">
        {{minplayer}}~{{maxplayer}}
      </div>
      <div class="infoitem" id="playtime">
        {{minplaytime}}~{{maxplaytime}}
      </div>
      <div class="infoitem" id="genre">
        {{genre}}
      </div>
      <div class="infoitem" id="difficulty">
        {{difficulty}}
      </div>
    </div>
    <div id="textcontainer">
      <div>
        <p><b>게임 간단 설명</b></p>
        <p>{{gameinst}}</p>
      </div>
      <div>
        <p><b>에디터의 한줄평</b></p>
        <p style="color:#989898;">에디터 S</p>
        <p>속느냐 속이느냐 그것이 문제로다</p>
      </div>
      <div>
        <p class="subinfo">게임룰 설명영상</p>
        <a href="https://www.youtube.com/watch?v=78Ga9vT3eIE">ㅁㄴㅇㄹ</a>
        <p class="subinfo">개임 상세 사진</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gameinfo',
  data(){
    return {
      state:"new",
      gametitle:"커맨드 앤 컬러스 나폴레오닉",
      minplayer:2,
      maxplayer:4,
      minplaytime:40,
      maxplaytime:80,
      genre:"전략",
      difficulty:"easy",
      gameinst:"상대도 속이고 나도 속이고 너도 속이고 그녀도 속이고 모두 속이고 더이상 무엇을 쓸지 모르겠는 그런 텍스트의 게임텍스트"
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
    width: 136px;
    height: 136px;
    display: inline-block;
    background: #3379FF 0% 0% no-repeat padding-box;
    border-radius: 7px;
  }
  #headcontainer{
    left: 35px;
    width: 322px;
    height: 136px;
  }
  .info{
    position: relative;
    right: inherit;
    margin-top: 25px;
    margin-bottom: 25px;
    width: 154px;
    height: 54px;
    background-color:#3379FF;
    display:grid;
    grid-template-columns: 154px 54px;
    grid-row: auto auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
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
    font-family:sans-serif;
  }
  #players{
    float:left;
  }
  #state{
    background: #FFEB00 0% 0% no-repeat padding-box;
    border-radius: 15px;
    color:black;
  }
  #gametitle{
    font-size:18px;
    font-family:"gmarcketsans"
  }
  .subinfo{
    text-align: left;
    font: normal normal bold 20px/26px gmarcketsans;
    font-size:20px;
    letter-spacing: -0.4px;
    color: #3379FF;
    opacity: 1;
  }
  #textcontainer{
    position: relative;
  }
</style>