<template>
<div>
  <v-card>
        <v-card-title title>
            Cart Summary:
        </v-card-title>
        <v-divider></v-divider>
      <v-card-subtitle class="headline">
         Total: <span>Rp {{ totalPay }}</span>
      </v-card-subtitle>
      <!-- <v-card-text class>

      </v-card-text> -->
      <v-divider></v-divider>
      <v-card-actions>
          <v-btn color="success" width="100%" :disabled="errorInputCart" @click="checkOut">Checkout</v-btn>
      </v-card-actions>
  </v-card>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    totalPay () {
      return this.$store.state.totalPay
    },
    errorInputCart () {
      return this.$store.state.errorInputCart
    }
  },
  methods: {
    checkOut () {
      this.$store.dispatch('checkout')
    }
  }
}
</script>

<style>

</style>
