<template>
  <div class="container">
    <h1 class="title has-text-centered mb-6">All Product</h1>
    <div class="columns is-multiline banner-col is-centered">
      <div
        class="card column is-3 mx-3 mb-3"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card-image">
          <figure class="image is-4by5">
            <img :src="product.img_url" alt="Product picture" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p
                class="title is-4 has-text-centered"
                style="text-transform: capitalize"
              >
                {{ product.name }}
              </p>
              <table class="table is-narrow">
                <tr>
                  <th>Price:</th>
                  <td class="is-size-7">
                    Rp. {{ product.price.toLocaleString("id") }}
                  </td>
                </tr>
                <tr>
                  <th>Category:</th>
                  <td>{{ product.category_name }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a @click="addToCart(product.id)" class="card-footer-item"
            >Add to Cart</a
          >
          <a @click="addToWish(product.id)" class="card-footer-item"
            >Add to Wish List</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getProducts() {
      this.$store.dispatch("getAllProducts");
    },
    addToCart(ProductId) {
      this.$store.dispatch("addToCart", { ProductId, quantity: 1 });
    },
    addToWish(ProductId) {
      this.$store.dispatch("addWish", { ProductId });
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style></style>
