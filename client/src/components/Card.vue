<template>
  <div class="container">
    <div class="card-group">
      <div class="card" style="">
        <img class="card-img-top" :src="products.image_url" alt="Bologna" />
        <div class="card-body">
          <h4 class="card-title">{{ products.name }}</h4>
          <h6 class="card-subtitle mb-2">Price Rp.{{ products.price }}</h6>
          <!-- <h6 class="card-subtitle mb-2">Stock {{ products.stock }}</h6> -->
          <div class="btn-wraper">
            <button class="add-btn" @click.prevent="addToCart()">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  methods: {
    addToCart() {
      // console.log('ini dia');
      this.$store.dispatch("addToCart", {
        id: this.products.id,
        price: this.products.price,
      });
    },
  },
};
</script>

<style scoped>
.add-btn {
  margin-top: 5px;
  background-color: #ea9292;
  color: white;
  padding: 3px;
  border-width: 0px;
}
</style>
