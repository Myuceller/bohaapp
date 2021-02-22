<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          v-on:click="titlearrange(item)"
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
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar"
export default {
  name: 'App',
  components:{
    NavigationBar
  },
  data(){
    return{
      items: [
      { title: "Home", icon: "mdi-view-dashboard" },
    ],
    drawer: false,
    title: "보드게임하자",
    }
  }
};
</script>
<style scoped>
v-list-item-title{
  font: normal normal bold 20px/24px Gmarket Sans;
  letter-spacing: 1px;
  color: #FFFFFF;
  opacity: 1;
}
v-navigation-drawer{
  background: #3379FF 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
