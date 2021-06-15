<template>
  <div>
    <p style="margin-bottom:35px;">게임을 즐길 인원이 몇 명 이신가요?</p>
    <div style="text-align: center;">
      <div v-for="(item,index) in items" :key="index" @click="routeTo(item)" class="item">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        { text:'2인' , value: 2 },
        { text:'3인' , value: 3 },
        { text:'4인' , value: 4 },
        { text:'5인' , value: 5 },
        { text:'6인이상' , value: 6 },
      ]
    }
  },
  methods:{
    routeTo(item){
      this.$router.push({name:'Sort',query:{text:item.text ,value:item.value,key:'player'}})
      .catch(err=>{
        this.$router.go()
      })
    }
  }
}
</script>

<style scoped>
  *{
  font-family:gmarcketsans;
}
  @font-face {
    font-family: 'gmarcketsans';
    font-style: normal;
    font-weight: 100;
    src: url('../assets/font/GmarketSansTTFMedium.ttf') format('truetype');
  }
  .item{
    display: inline-block;
    font-size:20px;
    height: 54px;
    width:154px;
    border-radius: 10px;
    background-color: #3379FF;
    color:#FFFFFF;
    text-align: center;
    padding-top:12px;
    margin: 10px;
  }
</style>