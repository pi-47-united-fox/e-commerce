<template>
  <div>
    <Navbar />
    <div class="top">
      <img src="../assets/032-take away.svg" class="logo" alt="" />
      <p><span>Pick Your Coffee</span></p>
      <div class="jumbotron jumbotron-fluid bg-transparent pt-1 ">
        <div class="container mt-0">
          <ListProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import ListProduct from "../components/ListProduct";
export default {
  name: "product",
  components: {
    Navbar,
    ListProduct,
  },
  created() {
    this.$store.dispatch("fecthProduct");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
body {
  background-color: brown !important;
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
