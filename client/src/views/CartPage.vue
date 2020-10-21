<template>
  <section class="ab-info-main py-5">
    <div class="container py-lg-3">
      <div class="ab-info-grids">
        <h3 class="tittle text-center mb-lg-5 mb-3">My Cart</h3>
        <div id="products" class="row view-group">
            <Cart 
            v-for="allCart in allCarts"
              :key="allCart.id"
              :allCart="allCart"></Cart>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Cart from '../components/Cart'

export default {
  name: "CartPage",
  components: {
      Cart
  },
  created() {
    this.$store.dispatch("fetchCarts");
  },
  computed: {
    allCarts() {
      return this.$store.state.allCarts;
    },
  },
};
</script>

<style>
</style>