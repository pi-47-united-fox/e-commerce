<template>
  <div>
    <Navbar />
    <div class="top">
      <img src="../assets/027-laptop.svg" class="logo" alt="" />
      <p><span>Your Cart</span></p>
      <div class="jumbotron jumbotron-fluid bg-transparent pt-1 ">
        <div class="container mt-0">
          <ListCart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import ListCart from "../components/ListCart";
export default {
  name: "Carts",
  components: {
    Navbar,
    ListCart,
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
  },
  created() {
    this.$store.dispatch("fecthCart");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
body {
  background-color: brown !important;
}
.mgtype {
  margin: auto;
  padding-left: 90px;
}
.top {
  margin-top: 70px;
}
.product {
  height: 700px;
  width: 50%;
}
/* .logo {
  width: 140px;
  height: 140px;
} */
span {
  font-family: "Lobster", cursive;
  font-size: 50px;
}
* {
  font-family: "Lobster", cursive;
}
</style>
