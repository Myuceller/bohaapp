import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";
import { extend } from 'vee-validate';
import { required ,oneOf } from 'vee-validate/dist/rules'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

<<<<<<< HEAD
extend('required',required);
extend('oneOf',{
  ...oneOf,
  message: '아직 아무도 입력 안했어요'
});

export default new Vue({
=======
new Vue({
>>>>>>> dcb61e6f484d6561c7fe93fa0589564f6676d5b5
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
