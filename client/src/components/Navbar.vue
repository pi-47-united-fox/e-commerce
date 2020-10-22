<template>
  <div id="nav" class="navbar shadow">
      <router-link to="/" class="text-white"> <img src="https://www.logitech.com/content/dam/logitech/common/en/logitechg-logo.png" style="max-width:100px; margin-top: -7px;" alt="Toko Aldy Distributor Logitech!"></router-link>
      <div class="navigation-2 d-flex flex-row" v-if="statusLogin">
        <router-link to="/carts" class="container text-white">Cart</router-link>
        <a href="#" @click.prevent="logout" class="container text-white">Logout</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    statusLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      this.$store.commit('STATE_LOGOUT')
    }
  }
}
</script>

<style>
.navbar{
    background-color: rgb(39, 39, 39);
}

</style>
