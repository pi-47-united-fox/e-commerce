<template>
  <section>
    <div class="table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Total</th>
            <th scope="col">Quantity</th>
            <th scope="col">Update Quantity</th>
            <th scope="col">Delete Item</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <CartCard
          v-for="cart in carts"
          :key="cart.id"
          :cart="cart">
        </CartCard>
      </table>
    </div>
  </section>
</template>

<script>
import CartCard from '@/components/CartCard.vue'

export default {
  name: 'Cart',
  components: {
    CartCard
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
