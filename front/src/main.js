import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";
import InfiniteLoading from 'vue-infinite-loading';

Vue.prototype.$http = axios;

Vue.config.productionTip = false
Vue.use(InfiniteLoading)
export default new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
