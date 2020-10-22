<template>
  <div>
    <Navbar></Navbar>
    <div class="container" style="padding-top:20px;">
      <ProductList></ProductList>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

export default {
  name: "Home",
  components: {
    Navbar,
    ProductList,
  },
};
</script>

<style>
</style>