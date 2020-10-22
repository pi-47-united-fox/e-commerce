<template>
<div>
    <Navbar />
    <div class="container">
        <h1 class="my-5 text-center">Your wishlist:</h1>
    </div>
    <div class="container my-5">
        <div class="row">
            <WishCard v-for="(product, i) in products" 
            v-bind:key="i"
            v-bind:product="product"
            v-bind:index="i"
            />
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import WishCard from '../components/WishCard'
export default {
    name: 'Wishlist',
    components: {
        Navbar,
        WishCard
    }
}
</script>

<style>

</style>