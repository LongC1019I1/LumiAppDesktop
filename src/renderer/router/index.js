import Vue from 'vue'
import Router from 'vue-router'
import accountRoute from './account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'account-login' }
    }, accountRoute,
    {
      path: '*',
      redirect: '/'
    }
  ]
})
