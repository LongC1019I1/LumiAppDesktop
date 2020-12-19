<template>
<div>
  <h1>ACCOUNT</h1>

  <router-link :to="{name:'account-login'}">Go to Login</router-link>
  <router-view/>

</div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style scoped>

</style>
