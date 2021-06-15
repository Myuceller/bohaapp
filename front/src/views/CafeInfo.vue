<template>
  <div id="container">
    <p style="font-size:20px;">보드게임하자 이용 안내</p>
    <div>
      <h1>영업시간</h1>
      <p>매일 13:00 ~ 22:00 (오후 1시~ 오후 10시)</p>
      <p class="comment">코로나가 끝나면 더 오랫동안 만나요!</p>
    </div>
    <div>
      <h1>이용요금</h1>
      <p class="title">기본요금제</p>
      <p class="indent">1시간 <span class='bluespan'>2,400원</span> <span class='redspan'>음료 필수 주문</span> <br> 이후 10분당 <span class='bluespan'>400원</span>,후불</p>
      <div class="title">4시간 정액제</div>
      <p class="indent">4시간 <span class='bluespan'>6,000원</span> <span class='redspan'>음료 필수 주문</span> <br> 이후 6분당 <span class='bluespan'>200원</span>,후불</p>
      <div class="title">평일 종일 정액제</div>
      <p class="indent">무제한 <span class='bluespan'>10,000원</span> <span class='redspan'>음료비 3000원 포함</span><br>음료비 차액 추가 결제,선불</p>
    </div>
    <div>
      <h1>적립금</h1>
      <p><span class='bluespan'>1,000 포인트</span> 이상 보유시 <br><span class='bluespan'>100 포인트 단위</span>로 사용 가능</p>
      <p class="comment">단, 포인트 사용시 적립 혜택 미제공</p>
      <div class="title">기본요금제</div>
      <p class="indent">이용 금액의 <span class='bluespan'>10%</span> 적립</p>
      <div class="title">4시간 정액제</div>
      <div class="title">평일 종일 정액제</div>
      <p class="indent">이용 금액의 <span class='bluespan'>5%</span> 적립</p>
    </div>
    <div>
      <h1>기타 정보</h1>
      <p style="margin-top:10px;">WiFi 비밀번호 : boardgamehaja</p>
      <p>인스타그램 : @boardgamehaja</p>
      <p class="comment">영업 변동 안내 및 게임 업데이트 소식을 전달합니다!</p>
    </div>
  </div>
</template>

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
  .title{
    margin-right:13px;
    margin-top:25px;
    margin-bottom: 10px;
    padding-left:8px;
    padding-right: 8px;
    display:inline-block;
    background-color: #3379FF;
    color:#FFFFFF;
    border-radius:7px;
    font-size:10px;
  }
  h1{
    font-family: gmarcketsansbold;
    font-size:20px;
    margin-top:30px;
  }
  p{
    font-size:18px;
    font-family: applesdgothic;
    color:#4E4E4E;
    margin:0;
  }
  .comment{
    color:#9B9B9B;
    font-size:14px;
  }
  .indent{
    margin-left:15px;
  }
  .bluespan{
    color:#3379FF;
  }
  .redspan{
    color:#FF5757;
  }
</style>