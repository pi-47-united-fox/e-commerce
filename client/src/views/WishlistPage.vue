<template>
  <section class="ab-info-main py-5">
    <div class="container py-lg-3">
      <div class="ab-info-grids">
        <h3 class="tittle text-center mb-lg-5 mb-3">My Wishlist</h3>
        <div id="products" class="row view-group">
          <Wishlist 
            v-for="allWishlist in allWishlists"
              :key="allWishlist.id"
              :allWishlist="allWishlist"></Wishlist>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Wishlist from "../components/Wishlist";

export default {
  name: "WishlistPage",
  components: {
    Wishlist,
  },
  created() {
    this.$store.dispatch("fetchWishlist");
  },
  computed: {
    allWishlists() {
      return this.$store.state.allWishlists;
    },
  },
};
</script>

<style>
</style>