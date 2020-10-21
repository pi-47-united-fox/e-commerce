<template>
  <nav class="navbar navbar-light bg-transparant fixed-top">
    <a class="navbar-brand" href="#" @click.prevent="toHome">
      <i class="fa fa-coffee"></i>
      Coffe Sodiks
    </a>

    <div class="d-flex">
      <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
      <a class="navbar-brand" href="#" @click.prevent="myChart">
        <i class="fa fa-cart-plus"></i>
        My Cart
      </a>
      <a class="navbar-brand" href="#" @click.prevent="logout">
        Logout
        <i class="fa fa-sign-out-alt"></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navabar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    myChart() {
      this.$router.push({ path: "/cart" });
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
