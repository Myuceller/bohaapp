<template>
  <div id="container">
    <div>
      <p id="title" style="font-family:gmarcketsansbold;">보드게임하자 큐레이션 리스트</p>
      <p style="margin-left:15px;font-family:applesdgothic;" class="applesdgothic">보드게임하자의 게임마스터들이 100개가 넘는 게임들을 직접 해보며 엄선한 큐레이션을 확인해보세요!</p>
    </div>
    <div v-for="(curation,i) in curations" :key="i" id="curations">
      <div @click="RouteToCurationinfo(curation)"><curation-card :curation="curation"></curation-card></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CurationCard from '../components/CurationCard.vue';
import { mapMutations } from 'vuex';

export default {
  components:{
    CurationCard
  },
  data(){
    return {
      curations:this.$store.state.curations
    }
  },
  methods:{
    // getCurations(){
    //   axios.get("http://127.0.0.1:3000/curation")
    //   .then(res=>{
    //     console.log("get /curation호출 후 res.data: ",res.data);
    //     this.curations = res.data;
    //   })
    //   .catch(err=>console.log(err));
    // },
    ...mapMutations(['getCurations',"changeRoutegames"]),
    RouteToCurationinfo(curation){
      console.log(curation);
      // this.changeRoutegames(curation.games);
      // console.log("this.$store.state.routeGames: ",this.$store.state.routeGames);
      // localStorage.setItem("routeGames",curation);
      
      this.$router.push({name:'Games',query:{games:curation.games , detail:curation.detail}})
      .catch(err=>{
        console.log(err);
        this.$router.go()
      })
      //route to curation
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'gmarcketsansbold';
    font-style: bold;
    font-weight: 800;
    src: url('https://bohaapp.s3.ap-northeast-2.amazonaws.com/font/GmarketSansTTFBold.ttf') format('truetype');
  }
@font-face {
  font-family: 'applesdgothic';
  font-style: normal;
  font-weight: 800;
  src: url('https://bohaapp.s3.ap-northeast-2.amazonaws.com/font/AppleSDGothicNeoB.ttf') format('truetype');
}
#title{
  font-size: 23px;
  color :#3379FF;
  margin-top:15px;
  margin-left:15px;
}
</style>