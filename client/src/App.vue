<template>
  <div id="app">
      <Navbar/>
      <router-view/>
   </div>
</template>

<script>
import Navbar from './views/Navbar'
import router from './router'
export default {
  name:'App',
  components:{
    Navbar
  },
  created () {
    if(!localStorage.access_token){
      router.push({path:'/login'})
    }else{
      this.$store.commit('SUCCESS_LOGIN')
    }
  }
  
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
</style>
