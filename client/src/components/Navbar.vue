<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
    <a class="navbar-brand" href="#" @click.prevent="toHome">GearUp</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
        </li>
      </ul>
      <!-- <form class="form-inline my-2 my-lg-0"> -->
      <h5>
        <i
          class="fa fa-shopping-cart"
          style="color: black;cursor: pointer;"
          @click.prevent="toCart"
        ></i>
        Cart
      </h5>
      <p>......</p>
      <h5>
        <i
          class="fa fa-heart"
          style="color: red;"
          @click.prevent="toWishlist"
        ></i>
        Wishlist
      </h5>
      <!-- </form> -->
    </div>
  </nav>
  <!-- navbar ends -->
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    login() {
      this.$router.push({ path: "/" });
    },
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
    toCart() {
      this.$router.push({ path: "/cart" });
    },
    toWishlist() {
      this.$router.push({ path: "/wishlist" });
    }
  }
};
</script>

<style>
i {
  cursor: pointer;
}
</style>
