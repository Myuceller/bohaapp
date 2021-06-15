<template>
  <div>
    <div id="nav">
      <AdminRoute></AdminRoute>
    </div>
    <p>curation들</p>
    <div v-for="(curation,i) in curations" :key="i" style="background-color:#F8F9Fa;">
      <p>curation detail:{{curation.detail}}</p>
      games:
      <div v-for="(game , j) in curation.games" :key="j">
        <p>gamename:{{game}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AdminRoute from "../components/adminroute.vue";

export default {
  components:{
    AdminRoute
  },
  data(){
    return {
      curations:""
    }
  },
  methods:{
    getCuration(){
      this.$http.get('/curation')
      .then(res=>{
        console.log(res);
        this.curations = res.data.data;
        console.log("curations:",this.curations);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  mounted(){
    this.getCuration()
  }
}
</script>