<template>
  <div class="column" id="main-area">
    <h2 class="title">My Wishlist</h2>
    <table class="table">
      <thead>
        <th>No</th>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Price per Item</th>
        <th>Buy</th>
      </thead>
      <tbody>
        <tr v-if="wishes.length === 0"><strong>You do not have any wishes.</strong></tr>
        <tr v-else v-for="wish in wishes" :key="wish.id">
          <td>{{ wish.Product.id }}</td>
          <td>
            <img
              class="image is-64x64"
              :src="wish.Product.image_url"
              alt="product-name"
            />
          </td>
          <td>
            <strong>{{ wish.Product.name }}</strong>
          </td>
          <td>{{ wish.Product.price }}</td>
          <td>
            <span @click="addToCartFromWishlist(wish.id)" class="icon">
              <i class="fas fa-cart-plus"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="columns">
      <div class="column">
        <p>Work harder and get:</p>
        <p class="is-size-5">
          <strong>Rp.{{ total }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishlistList',
  methods: {
    getMyWishlist () {
      this.$store.dispatch('getMyWishlist')
    },

    addToCartFromWishlist (id) {
      this.$store.dispatch('addToCartFromWishlist', id)
    }

  },

  created () {
    this.getMyWishlist()
  },

  computed: {
    wishes () {
      return this.$store.state.myWishlist
    },
    total () {
      let total = 0
      const wishes = this.$store.state.myWishlist
      for (let i = 0; i < wishes.length; i++) {
        total += wishes[i].Product.price
      }
      return total
    }
  }
}
</script>

<style>
</style>
