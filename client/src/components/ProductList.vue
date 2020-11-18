<template>
  <!-- Products Container -->
  <div class="row columns is-multiline">
    <!-- Product Card -->
    <div v-for="product in products" :key="product.id" class="column is-3">
      <div class="card large">
        <div class="card-image">
          <figure class="image is-square">
            <img :src="product.image_url" alt="Image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media-content">
            <p class="title is-5 no-padding heading-regular">
              {{ product.name }}
            </p>
          </div>
          <div class="columns mt-1">
            <div class="column">
              <div class="content">
                <p class="title is-6 mb-0" style="color: black">
                  <strong>Rp.{{ product.price }}</strong>
                </p>
                <p class="title is-7 mt-0" style="color: gray">
                  Stock: {{ product.stock }}
                </p>
              </div>
            </div>
            <div class="column">
              <span @click="addToMyWishlist(product.id)"  class="icon is-pulled-right">
                <i class="fas fa-heart"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="box has-text-centered">
          <button
            @click="addToMyCart(product.id)"
            class="button is-primary is-small"
            style="background-color: #bda06a"
          >
            <i class="fas fa-cart-plus"> </i>
            <p class="button-product">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
    <!--End of Product Card-->
  </div>
  <!--End of products Container-->
</template>

<script>
export default {
  name: 'ProductList',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },

    addToMyCart (id) {
      this.$store.dispatch('addToMyCart', id)
    },

    addToMyWishlist (id) {
      this.$store.dispatch('addToMyWishlist', id)
    }
  },
  created () {
    this.fetchProducts()
  },

  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
</style>
