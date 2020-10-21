<template>
  <div class="navigation-bar">
      <div class="d-flex flex-row">
        <div class="logo-nav">
            <img src="../assets/logo1.png" alt="logo" width="150px">
        </div>
        <router-link to='/' style="text-decoration:none;color:white">
            <div class="navigation-1">
             HOME 
            </div>
        </router-link>
        <div class="navigation-2 d-flex flex-row" v-if="!loginStatus">
            <router-link to='/login' style="text-decoration:none"><div class="nav2 mr-2">Login</div> </router-link>
            <router-link to='/register' style="text-decoration:none"><div class="nav2 ml-2">Register</div></router-link>
        </div>
        <div class="navigation-2 d-flex flex-row" v-else>
            <router-link to='/cart' style="text-decoration:none"><div class="nav2 mr-5">Cart</div> </router-link>
            <a href='#' class="nav2 ml-2" @click.prevent="onLogout">Logout</a>
        </div>
      </div>
  </div>
</template>

<script>
import router from '../router'
export default {
    name:'Navbar',
    computed : {
        loginStatus () {
            return this.$store.state.isLogin
        }
    },
    methods : {
        onLogout () {
            this.$store.commit('ON_LOGOUT')
        }
    }
}
</script>

<style scoped>
    .navigation-bar{
        background-color: black;  
        width: 100%; 
        height: 17vh;
        color: white;
        padding-right: 100px;
    }

    .logo-nav{
        margin:10px 70px;
    }
   
    .navigation-1{
        justify-content: center;
        margin-top: 35px;
        margin-left: 10px;
        font-weight: 500;
        font-size: 24px;
    }

    .navigation-2{
        margin-left: auto;
        margin-top: 35px;
        font-weight: 500;
        font-size: 24px;
    }

    .nav2{
        color: white;
    }
</style>