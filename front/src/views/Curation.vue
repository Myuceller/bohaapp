<template>
  <div id="container">
    <div>
      <p id="title" style="font-family:gmarcketsansbold;">보드게임하자 큐레이션 리스트</p>
      <p style="margin-left:25px;font-family:applesdgothic;" class="applesdgothic">보드게임하자의 게임마스터들이 100개가 넘는 게임들을 직접 해보며 엄선한 큐레이션을 확인해보세요!</p>
    </div>
    <div v-for="(curation,i) in this.$store.state.curations" :key="i" id="curations">
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
      this.changeRoutegames(curation.games);
      console.log("this.$store.state.routeGames: ",this.$store.state.routeGames);
      localStorage.setItem("routeGames",curation);
      this.$router.push({name:'Games',params:{games:curation.games , detail:curation.detail}})
      //route to curation
    }
  },
  mounted(){
    this.getCurations()
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
#title{
  font-size: 23px;
  color :#3379FF;
  margin-top:25px;
  margin-left:25px;
}
</style>