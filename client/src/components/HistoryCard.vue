<template>
    <div class="mb-4">
      <v-card>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="product.name"></v-card-title>
            <v-card-subtitle bold>Rp {{ product.price }} || Qty: {{quantity}}</v-card-subtitle>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="product.image_url"></v-img>
          </v-avatar>
        </div>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['quantity', 'cart', 'product']
}
</script>

<style>

</style>
