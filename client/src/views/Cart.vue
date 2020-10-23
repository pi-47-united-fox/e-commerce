<template>
  <div>
        <center><button class="btn btn-success m-5" @click.prevent="onCheckoutHandler"> checkout </button></center>
      <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">PRODUCT</th>
                <th scope="col">PRICE</th>
                <th scope="col">STOCK</th>
                <th scope="col">YOUR QTY</th>
                <th scope="col">ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            <CartCard
            v-for="(cart,i) in dataCart"
            :key="i"
            :data="cart"
            ></CartCard>
        </tbody>
    </table>
  </div>
</template>

<script>
import CartCard from '../components/CartCard'
export default {
  name: 'Cart',
  created () {
    this.$store.dispatch('GET_DATA_CART')
  },
  computed: {
    dataCart () {
      return this.$store.state.dataCart
    }
  },
  components: {
    CartCard
  },
  methods: {
    onCheckoutHandler () {
      this.$store.dispatch('CHECKOUT_CART')
    }
  }
}
</script>

<style>

</style>
