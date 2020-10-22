<template>
  <tr>
    <!-- <pre>{{ JSON.stringify(cart, null, 2) }}</pre> -->
    <td>{{ index + 1 }}</td>
    <td><img :src="cart.image_url" height="120" /></td>
    <td>{{ cart.name }}</td>
    <td>{{ cart.price }}</td>
    <td>
      <div>
        <label for="demo-sb"></label>
        <b-form-spinbutton
          id="demo-sb"
          v-model="value"
          min="1"
          max="100"
          @change="update()"
        ></b-form-spinbutton>
      </div>
    </td>
    <td>{{ cart.Cart.total }}</td>
    <td></td>
    <button @click.prevent="deleteCart(cart.id)">Delete</button>
  </tr>
</template>

<script>
import Axios from "axios"
export default {
  name: "CartItem",
  props: ["cart", "index"],
  data(){
    return {
      value:this.cart.Cart.quantity
    }
  },
  methods: {
    deleteCart(id) {
      // console.log(id, "ini delete cart");
      this.$store.dispatch("deleteFromCart", id);
    },
    update(){
      let id = this.cart.Cart.ProductId
      console.log(id);
      Axios ({
        method: 'PUT',
        url: `http://localhost:3000/carts/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: this.value
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchCarts')
          return data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    stock: function (val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
      this.$store.dispatch("updateCart", { id: this.cart.id, stock: val });
    },
  },
  created() {
    console.log(this.cart, "cart");
  },
};
</script>

<style>
</style>


// <tr>
//       <td>1</td>
//       <td><img :src="cart.image_url" height="180" alt="image" /></td>
//       <td>{{ cart.name }}</td>
//       <td>IDR {{ new Number(cart.price).toLocaleString("id-ID") }}</td>
//       <td><input id="input-qty" v-model="stock" type="number" min="1" /></td>
//       <td>
//         IDR
//         {{
//           new Number(cart.price * cart.Cart.stock).toLocaleString("id-ID")
//         }}
//       </td>
//       <td>
//         <button @click.prevent="deleteFromCart(cart.Cart.ProductId)">
//           <v-icon class="accent--text">{{ links[0].icon }}</v-icon
//           >delete
//         </button>
//       </td>
//     </tr>