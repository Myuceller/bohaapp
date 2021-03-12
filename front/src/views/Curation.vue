<template>
  <div id="container">
    <div>
      <p id="title">보드게임하자 큐레이션 리스트</p>
      <p>보드게임하자의 게임마스터들이 100개가 넘는 게임들을 직접 해보며 엄선한 큐레이션을 확인해보세요!</p>
    </div>
    <div v-for="(curation,i) in curations" :key="i" id="curations">
      <div @click="RouteToCurationinfo(curation)"><curation-card :curation="curation"></curation-card></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CurationCard from '../components/CurationCard.vue';
export default {
  components:{
    CurationCard
  },
  data(){
    return {
      curations:[]
    }
  },
  methods:{
    getCurations(){
      axios.get("http://127.0.0.1:3000/curation")
      .then(res=>{
        console.log("get /curation호출 후 res.data: ",res.data);
        this.curations = res.data;
      })
      .catch(err=>console.log(err));
    },
    RouteToCurationinfo(curation){
      console.log(curation);
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
    font-family: 'gmarcketsans';
    font-style: bold;
    font-weight: 800;
    src: url('../assets/font/GmarketSansTTFBold.ttf') format('truetype');
  }

#curations{
  margin-top:30px;
}
#title{
  font-size: 23px;
  color :#3379FF;
  font-family:"gmarcketsans"
}
</style>