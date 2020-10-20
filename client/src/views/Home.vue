<template>
  <div>
    <Banner />
    <div>
      <!-- Untuk card Product -->
      <v-container grid-list-s>
      <v-row>
        <v-col v-for="(product) in products" :key="product.id">
          <Card :product='product' />
        </v-col>
      </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner'
import Card from '../components/Card'

export default {
  name: 'Home',
  components: {
    Banner,
    Card
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    // console.log ('masuk')
    this.fetchProducts()
  }
}
</script>
