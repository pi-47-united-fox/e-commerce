<template>
    <div class="row m-5">
        <ProductCard
        v-for="(product,i) in dataProduct"
        :key="i"
        :data="product">
        </ProductCard>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  name: 'Home',
  components: {
    ProductCard
  },
  created () {
    this.$store.dispatch('GET_DATA_PRODUCT')
  },
  computed: {
    dataProduct () {
      return this.$store.state.dataProduct
    }
  }
}
</script>

<style>

</style>
