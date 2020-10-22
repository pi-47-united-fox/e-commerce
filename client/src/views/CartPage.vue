<template>
  <section class="ab-info-main py-5">
    <div class="container py-lg-3">
      <div class="ab-info-grids">
        <h3 class="tittle text-center mb-lg-5 mb-3">My Cart</h3>
        <div id="products" class="row view-group">
          <Cart
            v-for="allCart in allCarts"
            :key="allCart.id"
            :allCart="allCart"
          ></Cart>
        </div>
      </div>
      <form>
        <div
          class="form-group"
          style="display: flex; margin: 10px; justify-content: end"
        >
          <h2>
          <button class="btn btn-primary fa fa-shopping-cart" @click.prevent="checkOutHandler"> Order Now</button
          >
          </h2>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Cart from "../components/Cart";

export default {
  name: "CartPage",
  components: {
    Cart,
  },
  methods: {
    checkOutHandler () {
      this.$store.dispatch('checkOut')
    }
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