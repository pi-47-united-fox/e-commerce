<template>
<div>
    <Navbar />
    <div class="container">
        <h1 class="my-5 text-center">Your wishlists:</h1>
    </div>
    <div class="container my-5">
        <div class="row">
            <WishCard v-for="(wish, i) in wishes" 
            v-bind:key="i"
            v-bind:wish="wish"
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
    },
    created () {
        this.$store.dispatch('fetchWishes')
    },
    computed: {
        wishes () {
            return this.$store.state.wishes
        }
    }
}
</script>

<style>

</style>