<template>
  <div id="container">
    <div v-for="(index,i) in curation.games" :key="i" id="thumbnails">
      <img src="../assets/thumbnail/splendor_t.png" alt="">
    </div>
    <div id="background">
      <p id="detail">{{curation.detail}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:{
    curation:Object
  },
  data(){
    return {
    }
  },
  mounted(){
    console.log("curation Props:",this.props)
    
  },
  methods:{
    
  }
}
</script>

<style scoped>
  #container {
    white-space:nowrap; 
    overflow-x: scroll;
    position:sticky;
  }
  img {
    width: 82px;
    height: 82px;
    border-radius:15px ;
  }
  #thumbnails{
    
    display: inline;
    margin-left: 16px;
    z-index: 2;
    position: relative;
  }
  #background {
    z-index: 1;
    position: relative;
    top:-52px;
    height:113px;
    background-color: #EDEDED;
    border-radius: 10px;
  }
  #detail{
    position:relative;
    left:21px;
    top:63px;
    text-align: left;
    letter-spacing: -0.36px;
    font-size: 18px;
  }
</style>