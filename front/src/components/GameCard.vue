<template>
  <v-app>
    <img src="" alt="thumbnail">
    <v-btn>{{state}}</v-btn>
    <label for="gametitle">{{title}}</label>
    <br/>
    <span class="gameinfo">
      <icon></icon>
      <span id="players">{{minplayer}}~{{maxplayer}}</span>
      <v-spacer/>
      <icon></icon>
      <span id="playtime">{{minplaytime}}~{{maxplaytime}}</span>
    </span>
    <div id="gmaetext">
      <p>{{gametext}}</p>
    </div>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      state:"new",
      title:"시크릿히틀러",
      minplayer:4,
      maxplayer:8,
      minplaytime:40,
      maxplaytime:80,
      gametext:"차원이다른마피아게임 다가와다가와줘베이베"
    }
  }
}
</script>

<style scoped>

</style>