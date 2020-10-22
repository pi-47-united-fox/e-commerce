<template>
  <div class="column" id="main-area">
    <h2 class="title">My Cart</h2>
    <table class="table">
      <thead>
        <th>No</th>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Sub-total</th>
        <th>Decrease/ remove</th>
      </thead>
      <tbody>
        <tr v-if="carts.length === 0"><strong>Your cart is empty.</strong></tr>
        <tr v-else v-for="cart in carts" :key="cart.id">
          <td>{{ cart.Product.id }}</td>
          <td>
            <img
              class="image is-64x64"
              :src="cart.Product.image_url"
              alt="product-name"
            />
          </td>
          <td>
            <strong>{{ cart.Product.name }}</strong>
          </td>
          <td>{{ cart.Product.price }}</td>
          <td>x {{ cart.quantity }}</td>
          <td>Rp.{{ cart.Product.price * cart.quantity }}</td>
          <td>
            <span @click="removeFromMyCart(cart.Product.id)" class="icon">
              <i class="fas fa-minus-circle"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="columns">
      <div class="column">
        <p>Grand Total</p>
        <p class="is-size-5">
          <strong>Rp.{{ total }}</strong>
        </p>
      </div>
      <div class="column">
        <button @click="checkout"
          class="button is-primary is-pulled-right is-medium"
          style="background-color: rgb(138, 108, 70); color: white"
        >
          <i class="fas fa-cart-plus"> </i>
          Checkout
        </button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  methods: {
    getMyCart() {
      this.$store.dispatch("getMyCart");
    },

    removeFromMyCart(id) {
      this.$store.dispatch("removeFromMyCart", id);
    },

    checkout() {
       this.$store.dispatch("checkout") 
    }
  },

  created() {
    this.getMyCart();
  },

  computed: {
    carts() {
      return this.$store.state.myCart;
    },
    total() {
      let total = 0;
      let carts = this.$store.state.myCart;
      for (let i = 0; i < carts.length; i++) {
        let sub = carts[i].Product.price * carts[i].quantity;
        total += sub;
      }
      return total;
    },
  },
};
</script>

<style>
</style>