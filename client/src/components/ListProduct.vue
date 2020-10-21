<template>
  <div class="row">
    <!-- <div v-if="errMessage">
      <h2>{{ errMessage }}</h2>
    </div> -->
    <div class="col-sm-3 mb-3" v-for="product in products" :key="product.id">
      <div class="card-header bg-transparent">
        <h4>{{ product.name }}</h4>
      </div>
      <div class="card-body">
        <div class="card border-0">
          <img :src="`${product.image_url}`" class="card-img-top" alt="..." />
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-transparent">
                Rp {{ product.price.toLocaleString() }}
              </li>
              <li class="list-group-item bg-transparent">
                Stock {{ product.stock }}
              </li>
              <li class="list-group-item bg-transparent">
                <input
                  type="number"
                  placeholder="qty"
                  class="border-danger"
                  v-model="qty"
                  required
                />
                <button
                  class="btn btn-outline-danger"
                  @click="addToCart(product.id)"
                >
                  Add To Cart
                </button>
              </li>
              <div v-if="errMessage">
                <h2>{{ errMessage }}</h2>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listProduct",
  data() {
    return {
      qty: "",
      errMessage: "",
    };
  },

  methods: {
    addToCart(productId) {
      let payload = {
        id: productId,
        qty: this.qty,
      };
      //   console.log(payload);
      this.$store
        .dispatch("addToCart", payload)
        .then(() => {
          this.qty = "";
          this.$store.dispatch("fecthProduct");
        })
        .catch((err) => {
          this.qty = "";
          let msg = err.response.data.errors[0];
          this.errMessage = msg;
          setTimeout(() => {
            this.errMessage = "";
          }, 2000);
          console.log(msg);
        });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch("fecthProduct");
  },
};
</script>

<style scoped>
input[type="number"] {
  width: 50px;
  margin-bottom: 5px;
  border-radius: 10px;
  border-top: none;
  border-color: red;
}
input[type="number"] :active {
  margin-bottom: 5px;
  border-radius: 10px;
  border-top: none;
  border-color: tomato;
}
</style>
