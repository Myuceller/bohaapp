<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="{ name: item.title }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="#3379FF" flat>
      <v-app-bar-nav-icon color="#FFFFFF" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><b style="color:#FFFFFF; font-family:gmarcketsans">{{ title }}</b></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="search = !search">
        <v-icon color="#FFFFFF">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <input
          v-if="search"
          :value="gameInput"
          placeholder="검색할 게임의 이름 입력"
          v-on:input="typing"
          type='text'
          @input="submitAutoComplete"
          />
        <div class="autocomplete disabled" v-if="search">
        <div
          @click="RouteToGameinfo(res)"
          style="cursor: pointer; background-color:yellow; width:600px; margin-top:10px;"
          v-for="(res,i) in result"
          :key="i"
          >{{ res.korname }}</div>
        </div>
        <router-view>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data(){
    return{
      items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "Curation", icon:"mdi-android-messages"},
      { title: 'Admin', icon: 'mdi-account'}
        ],
      drawer: false,
      title: "보드게임하자",
      search:false,
      gameInput:"",
      result:"",
      games:this.$store.state.games
    }
  },
  methods:{
    ...mapActions(['getGames,getCurations']),
    typing(e){
      this.gameInput = e.target.value;
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
    RouteToGameinfo(res){
      this.search = false;
      console.log(res);
      this.$router.push({name:"GameInfo",params:{game:res}})
    },
  },

  mounted(){
    console.log(this);
    this.$http.get('/games')
      .then(res=>{
        console.log(this);
        this.getGames(res.data);
        console.log('app.vue에서 mounted로 this.$http.get /games호출, res.data:',res.data);
      })
      .catch(err=>console.log(err))
    this.$http.get('/curation')
      .then(res=>{
        console.log('app.vue에서 mounted로 this.$http.get /curation res:',res);
        this.getCurations(res.data.data);
      })
      .catch(err=>console.log(err))
    console.log('this.games from app.vue',this.games);
  }
};
</script>
<style scoped>
@font-face {
    font-family: 'gmarcketsans';
    font-style: bold;
    font-weight: 800;
    src: url('./assets/font/GmarketSansTTFBold.ttf') format('truetype');
  }
:root{
  --background-color:#09C761;
}
input{
  border: 1px solid black ;
}
</style>
