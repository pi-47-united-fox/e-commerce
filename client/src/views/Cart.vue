<template>
<div>
    <div class="container">
        <h1 class="my-5 text-center">Your cart</h1>
    </div>
    <div class="container my-5 d-flex flex-column" style="width: 50%;">
        <button @click="toHome" type="button" class="btn btn-dark" style="width: 20%;" v-on:click="toHome">Back Home</button>
        <ul class="list-unstyled">
            <CardDetail></CardDetail>
        </ul>
        <button @click="toHome" type="button" class="btn btn-info" v-on:click="toHome">Check out</button>
    </div>
</div>
</template>

<script>
import CardDetail from '../components/ListOfCarts.vue'
export default {
    name: 'Cart',
    components: {
        CardDetail
    }
}
</script>

<style>

</style>