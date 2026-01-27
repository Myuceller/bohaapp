<template>
  <div>
    <div id="nav">
      <AdminRoute></AdminRoute>
    </div>
    <div>
      <div>
        <!-- <wj-auto-complete id="theAutoComplete" display-member-path="korname" :items-source="games">
        </wj-auto-complete> -->
        <input :value="gameInput" @input="submitAutoComplete" v-on:input="typing" type="text" style="margin-bottom : 15px;" placeholder="게임이름검색"/>
      </div>
      <div class="autocomplete disabled">
        <div
          @click="searchGameAdd(res)"
          style="cursor: pointer; background-color:yellow; margin-top:10px;"
          v-for="(res,i) in result"
          :key="i"
          >{{ res.korname }}</div>
        </div>
      <p>큐레이션 내용 추가:</p><input type="text" v-model="curation.detail">
      <p>어떤글을 입력했나?:{{gameInput}}</p>
    </div>
    <p>큐레이션:{{curation.detail}},</p>
    게임: 
    <div v-for="(game,i) in curation.games" :key="i">
      {{game.korname}}
      <button @click="remove(game)">제거</button>
    </div>
    <div>
      <button @click="confirm">큐레이션 추가하기</button>
    </div>
  </div>
</template>

<script>
import AdminRoute from "../components/adminroute.vue";

// import '@grapecity/wijmo.vue2.core';
// import '@grapecity/wijmo.vue2.input';

export default {
  components:{
    AdminRoute
  },
  data(){
    return {
      result:null,
      games:[""],
      gameInput:"",
      curation: {
        detail:"",
        games:[]
      },
      add:false
    }
  },
  methods:{
    //검색에서 인풋에 글자를 넣으면 비슷한걸 찾게 하자.
    //클릭하면 입력, 타이틀을 함께 입력해서 큐레이션을 추가하자.
    getgames(){ //게임 가져오기
      this.$http.get('/games')
      .then(res=>{
        console.log(res);
        this.games = res.data;
        console.log("gmaes: ",this.games);
        console.log("games",this.games);
      }).catch(err=>{
        console.log(err);
      })
    },
    submitAutoComplete() {
      const autocomplete = document.querySelector(".autocomplete");
      if (this.gameInput) {
        autocomplete.classList.remove("disabled");
        this.result = this.games.filter((game) => {
          return game.korname.match(new RegExp(this.gameInput, "i"));
        });
      } else {
        autocomplete.classList.add("disabled");
      }
    },
    searchGameAdd(res){
      this.curation.games.push(res);
    },
    typing(e){
      this.gameInput = e.target.value;
    },
    remove(game){
      this.curation.games.pop()
    },
    confirm(){
      this.$api.post('/curation', this.curation)
      .then(res=>console.log(res))
      .catch(err=>console.log(err));
    }
  },
  mounted(){
    this.getgames()
  }
}
</script>

<style scoped>
*{
  border: 1px solid black;
  text-align: center;
}

</style>
