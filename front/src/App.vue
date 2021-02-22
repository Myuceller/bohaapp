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
    <v-app-bar app color="#3379FF">
      <v-app-bar-nav-icon color="#FFFFFF" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><b class="title">{{ title }}</b></v-toolbar-title>
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

export default {
  name: 'App',
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
.title{
  font: normal normal 20px/24px Gmarket Sans;
  letter-spacing: 1px;
  color: #FFFFFF;
  opacity: 1;
}
</style>
