// import store from '../store'

export default {
  path: '/account',
  name: 'account',
  component: require('@/components/layout/Account').default,
  children: [{
    path: 'login',
    name: 'account-login',
    component: require('@/components/page/account/Login').default,
    // beforeEnter: beforeEnterLogin
  }]
}

// async function beforeEnterLogin (to, from, next) {
//   let rememberMe = localStorage.getItem('rememberMe')
//   let refresh_token = localStorage.getItem('refresh_token')

//   if (rememberMe == 'true') {
//     if (refresh_token && refresh_token != 'undefined') {
//       let tokenData = await store.dispatch('User/refreshToken', {
//         refresh_token
//       })
//       if (tokenData && tokenData.data) {
//         sessionStorage.setItem('access_token', tokenData.data.access_token)
//         localStorage.setItem('refresh_token', tokenData.data.refresh_token)

//         next({name: 'listHome'})
//       }
//     }
//   }
//   next()
// }
