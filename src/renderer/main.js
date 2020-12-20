import Vue from 'vue'
import axios from 'axios'
import i18n from "./lang/i18n";
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

window.$router = router

/* eslint-disable no-new */
window.Vue = new Vue({
  components: { App },
  mode: 'history',
  i18n,
  router,
  store,
  template: '<App/>'
}).$mount('#app')

export default window.Vue
