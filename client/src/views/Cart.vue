<template>
<div>
    <Navbar />
    <div class="container">
        <h1 class="my-5 text-center">Your cart</h1>
    </div>
    <div class="container my-5 d-flex flex-column" style="width: 50%;">
        <button @click.prevent="toHome" type="button" class="btn btn-dark" style="width: 20%;" v-on:click="toHome">Back Home</button>
        <ul class="list-unstyled">
            <CardDetail v-for="(cart, i) in carts"
            :key="i"
            :cart="cart"
            :index="i">
            </CardDetail>
        </ul>
        <button type="button" class="btn btn-info">Check out</button>
    </div>
</div>
</template>

<script>
import CardDetail from '../components/ListOfCarts.vue'
import Navbar from '../components/Navbar'

export default {
    name: 'Cart',
    components: {
        CardDetail,
        Navbar
    },
    methods: {
        toHome () {
            this.$store.commit('setEdit', {
                edit: false,
                id: null
            })
            this.$router.push({name: 'Home'})
        }
    },
    created () {
        this.$store.dispatch('fetchCarts')
    },
    computed: {
        carts () {
            return this.$store.state.carts
        }
    }
}
</script>

<style>

</style>