<template>
<div>
    <Navbar />
    <div class="container">
        <h1 class="my-5 text-center">Our products</h1>
    </div>
    <div class="container my-5 px-0">
        <div class="row px-0">
            <ProductCard v-for="(product, i) in products" 
            v-bind:key="i"
            v-bind:product="product"
            v-bind:index="i"
            />
        </div>
    </div>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'

export default {
    name: 'Content',
    components: {
        ProductCard,
        Navbar
    },
    created () {
        this.$store.dispatch('fetchProducts')
    },
    computed: {
        products () {
            return this.$store.state.products
        }
    }
}
</script>

<style>

</style>