<template>
  <div class="container">
    <div class="bck-btn">
      <img src="../assets/circle-with-an-arrow-pointing-to-left.svg" @click='back()' width="30px">
      <h4>Back</h4>
    </div>
    <table>
    </table>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Subtotal</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- {{carts}} -->
        <CartItem
          :key="cart.id"
          v-for="(cart, i) in carts"
          :cart="cart"
          :index="i"
        ></CartItem>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>Rp{{ new Number(price).toLocaleString("id-ID") }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CartItem from "../components/CartItem";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  methods:{
    back(){
      this.$router.push({name:'Home'})
    }
  },
  computed: {
    carts() {
      const carts = this.$store.state.carts;
      console.log(carts, "<------------");
      let temp = 0;
      carts.forEach((el) => {
        // console.log(el.Cart.stock);
        temp += el.price * el.Cart.quantity;
      });
      this.price = temp;
      this.product = carts;
      console.log(temp);
      return carts;
    },
  },
  created() {
    console.log("ini di cart");
    this.$store.dispatch("fetchCarts");
  },
};
</script>

<style scoped>
.bck-btn{
  height: 30px;
  margin-bottom:  30px;
}
</style>