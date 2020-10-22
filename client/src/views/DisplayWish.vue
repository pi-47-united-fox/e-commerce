<template>
  <div class="container">
    <h1 class="title has-text-centered mb-6">Wislist</h1>
    <div class="columns is-multiline banner-col is-centered">
      <div
        class="card column is-3 mx-3 mb-3"
        v-for="wish in wishes"
        :key="wish.id"
      >
        <div class="card-image">
          <figure class="image is-4by5">
            <img :src="wish.Product.img_url" alt="Product picture" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p
                class="title is-4 has-text-centered"
                style="text-transform: capitalize"
              >
                {{ wish.Product.name }}
              </p>
              <table class="table is-narrow">
                <tr>
                  <th>Price:</th>
                  <td class="is-size-7">
                    Rp. {{ wish.Product.price.toLocaleString("id") }}
                  </td>
                </tr>
                <tr>
                  <th>Category:</th>
                  <td>{{ wish.Product.Category.name }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a @click="deleteWish(wish.id)" class="card-footer-item"
            >Delete From Wish List</a
          >
          <a @click="addToCart(wish.Product.id, wish.id)" class="card-footer-item"
            >Add to Cart</a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getWish() {
      this.$store.dispatch("getWish");
    },
    deleteWish(id) {
      this.$store.dispatch("deleteWish", id);
    },
    addToCart(ProductId, id) {
      this.$store.dispatch("deleteWish", id);
      this.$store.dispatch("addToCart", { ProductId, quantity: 1 });
    }
  },
  computed: {
    wishes() {
      return this.$store.state.wish;
    }
  },
  created() {
    this.getWish();
  }
};
</script>

<style></style>