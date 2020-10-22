<template>
  <div class="column" id="main-area">
      <h2 class="title">My Transaction</h2>
    <table class="table">
      <thead>
        <th>No</th>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Sub-total</th>
        <th>Paid Date</th>
      </thead>
      <tbody>
        <tr v-if="transactions.length === 0"><strong>You do not have any transaction</strong></tr>
        <tr v-else v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.Product.id }}</td>
          <td>
            <img
              class="image is-64x64"
              :src="transaction.Product.image_url"
              alt="product-name"
            />
          </td>
          <td>
            <strong>{{ transaction.Product.name }}</strong>
          </td>
          <td>{{ transaction.Product.price }}</td>
          <td>x {{ transaction.quantity }}</td>
          <td>Rp.{{ transaction.Product.price * transaction.quantity }}</td>
          <td>{{ new Date(transaction.updatedAt )}}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="columns">
      <div class="column">
        <p>You have invested with us:</p>
        <p class="is-size-5">
          <strong>Rp.{{total}}</strong>
        </p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'TransactionList',
  methods: {
    getMyTransaction () {
      this.$store.dispatch('getMyTransaction')
    },

    removeFromMyCart (id) {
      this.$store.dispatch('removeFromMyCart', id)
    }
  },

  created () {
    this.getMyTransaction()
  },

  computed: {
    transactions () {
      return this.$store.state.myTransaction
    },
    total () {
      let total = 0
      const transactions = this.$store.state.myTransaction
      for (let i = 0; i < transactions.length; i++) {
        const sub = transactions[i].Product.price * transactions[i].quantity
        total += sub
      }
      return total
    }
  }
}
</script>

<style>
</style>
