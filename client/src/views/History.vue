<template>
  <div>
    <v-container grid-list-xs>
      <h2 class="display-1 ml-4">Chekout History:</h2>
        <v-row class="mb-6" no-gutters>
          <v-col
            md="7"
            class="ma-4"
          >
            <HistoryCard
                v-for="(cart, idx) in cartsUnpaid" :key="cart.id"
                :cart='cart'
                :idx='idx'
                :product='cart.Product'
                :quantity='cart.quantity'
            />
            <!-- <v-card class="pa-2" outlined tile> HAi </v-card> -->
          </v-col>
           <v-col
            md="4"
            class="ma-4"
          >
            <!-- <v-card class="pa-2" outlined tile> Tempat Ringkasan total </v-card> -->
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import HistoryCard from '../components/HistoryCard'

export default {
  name: 'History',
  components: {
    HistoryCard
  },
  computed: {
    cartsUnpaid () {
      return this.$store.state.cartsUnpaid
    }
  },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    }
  },
  created () {
    this.fetchCarts()
  }
}
</script>

<style>

</style>
