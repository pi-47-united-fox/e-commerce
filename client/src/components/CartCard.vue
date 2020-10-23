<template>
    <tbody>
    <tr>
      <td> <img :src="cart.Product.image_url" width="80vh" height="80vh">
      <br><b>{{ cart.Product.name }}</b>
      <br><b>Rp. {{ cart.Product.price.toLocaleString() }}</b>
      <br><b>Stock: {{ cart.Product.stock }}</b>
      </td>
      <td>Rp. {{ (cart.Product.price * cart.quantity).toLocaleString()}}</td>
      <td>{{ cart.quantity }}</td>
      <td>
        <form @submit.prevent="addQuantity(cart.id)">
          <input type="number" v-model="quantity" placeholder="Update Quantity" min="1" :max="cart.Product.stock">
          <button type="submit" class="btn btn-outline-primary btn-sm">Update Qty</button>
        </form>
      </td>
      <td>
      <a class="fas fa-trash" href="#" @click.prevent="deleteItemCart(cart.id)"></a>
      </td>
      <td>{{ cart.status}}</td>
    </tr>
    </tbody>
</template>

<script>

export default {
  name: 'CartCard',
  props: ['cart'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    addQuantity (id) {
      const payload = {
        id: id,
        quantity: this.quantity
      }
      this.$store.dispatch('editCart', payload)
    },
    deleteItemCart (id) {
      const payload = {
        id: id
      }
      this.$store.dispatch('deleteCart', payload)
    }
  }
}
</script>

<style>

</style>
