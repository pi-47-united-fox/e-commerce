<template>
  <!--- NAVIGATION START-->
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    id="dashboard-top-menu"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/logo.png" width="112" height="28" />
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item"> Browse Product </router-link>
      </div>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              to="/checkout"
              class="button is-primary"
              style="background-color: #bda06a"
            >
              My Shopping
            </router-link>
            <a
              @click="logout"
              class="button is-primary"
              style="background-color: #bda06a"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!---NAVIGATION END-->
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
</style>
