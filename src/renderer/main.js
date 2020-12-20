import Vue from 'vue'
import axios from 'axios'
import i18n from "./lang/i18n";
import Argon from "./plugins/argon-kit";
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.use(Argon);
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

window.$router = router

/* eslint-disable no-new */
window.Vue = new Vue({
    components: {App},
    mode: 'history',
    router,
    i18n,
    store,
    template: '<App/>'
}).$mount('#app')

export default window.Vue
