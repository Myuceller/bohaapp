<template>
  <div id="container">
    <div>
      <img src="https://bohaapp.s3.ap-northeast-2.amazonaws.com/BoardgamehajaLogo.jpg"
           alt=""
           style="width:100%;">
    </div>
    <div>
      <h1>나갈 때 까지 재밌다! 보드게임하자!</h1>
      <p>당신을 위해 지금 가장 재밌게 즐길 수 있는 보드게임을<br>
         보드게임하자의 게임마스터들이 골라드립니다.<br>
         인기게임부터 추천게임까지, 전부 즐겨보세요!</p>
    </div>
    <!-- <div class='part' @click="routeToGames('pop')">
      인기 top10
    </div>
    <div class='part' @click="routeToGames('recommend')">
      게임마스터 추천게임 top10
    </div> -->
    <!-- <div v-for="(item , index) in items" :key="index" @click="routeTo(item.route)" class="part">
      {{item.text}}
    </div> -->
    <div class="part" 
         v-for="(item,index) in items"
         :key="index"
         @click="routeToCuration(item.curationName)"
         :style="{backgroundColor:item.color}"
         >
      {{item.text}} <img class='icon' :style="{borderColor:item.iconborder}" :src="require(`../assets/icons/${item.icon}_white.svg`)"/>
    </div>
    <div class="part"
         v-for="(item,index) in PlayerItems" 
         :key="index+'a'" 
         @click="routeToplayer(item.route)"
         :style="{backgroundColor:item.color , borderColor:item.color}">
      {{item.text}} <img class='icon' :style="{borderColor:item.iconborder}" :src="require(`../assets/icons/${item.icon}_white.svg`)"/>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      PlayerItems:[
        {text:'게임 목록',route:'GameList' ,color:'#8B8B8B' , icon:'people',iconborder:"#265EC7"},
        {text:'이용 안내',route:'Cafeinfo' , color:'#7A604C' , icon:'coffee' , iconborder:"#534133"}
      ],
      items:[
        {text:'인기 게임 Top 10',curationName:"인기 게임 Top 10" ,color:'#FF7227',icon:'star' , iconborder:"#D94B00"},
        {text:"추천 '이달의 게임'" ,curationName:'게임마스터추천 "이달의게임"' , color:'#3379FF' , icon:'thumb_up' , iconborder:"#606060"}
      ],
      // playerItems:[
      //   {text:'2인 게임' , value:2},
      //   {text:'3인 게임' , value:3},
      //   {text:'4인 게임' , value:4},
      //   {text:'5인 이상 게임' , value:5}
      // ],
      absolute: true,
      opacity: 1,
    }
  },
  methods:{
    routeToplayer(route){
      this.$router.push({name:route})
      .catch(err=>{
        this.$router.go()
      })
    },
    overlay(){
      console.log('asdf');
    },
    routeToCuration(curationName){
      // axios.get('http://127.0.0.1:3000/curation/name',{params:curationName})
      this.$http.get('/curation/name',{params:curationName})
      .then(res=>{
        console.log(res);
        this.$router.push({name:'Games',query:{games:res.data.games,detail:res.data.detail}})
        .catch(err=>{
        this.$router.go()
      })
      })
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'GmarcketSans';
    font-style: normal;
    font-weight: 200;
    src: url('https://bohaapp.s3.ap-northeast-2.amazonaws.com/font/GmarketSansTTFMedium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'GmarcketSansBold';
    font-style: bold;
    font-weight: 700;
    src: url('https://bohaapp.s3.ap-northeast-2.amazonaws.com/font/GmarketSansTTFBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'AppleSdGothicNeo';
    font-style: normal;
    font-weight: 500;
    src: url('https://bohaapp.s3.ap-northeast-2.amazonaws.com/font/AppleSDGothicNeoL.ttf') format('truetype');
  }
  @font-face {
    font-family: 'AppleSdGothicNeoBold';
    font-style: bold;
    font-weight:700;
    src: url('https://bohaapp.s3.ap-northeast-2.amazonaws.com/font/AppleSDGothicNeoB.ttf') format('truetype');
  }
h1{
  text-align: center;
  font: normal normal bold 20px/30px GmarcketSansBold;
  color:#3379FF;
  margin-bottom: 15px;
}
.icon{
  margin-right:30px;
  float: right;
  width:35px;
  height:30px;
}
p{
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.28px;
  font-family: AppleSdGothicNeo;
  color: #4E4E4E;
}
.part{
  color:#FFFFFF;
  margin-bottom:12px;
  font-size:18px;
  height: 72px;
  border-radius: 10px;
  text-align: left;
  padding-top:23px;
  padding-left:24px;
  font-family: AppleSdGothicNeoBold;
}
</style>