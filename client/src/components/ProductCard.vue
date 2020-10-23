<template>
<div class="col-3 px-0 my-3">
    <div class="card h-100 shadow border border-dark" style="width: 18rem;">
        <img :src="product.image_url" class="card-img-top img-thumbnail" alt="Product's picture">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text text-justify">Price: Rp.{{product.price}}</p>
            <p class="card-text text-justify">Stock(s): {{product.stock}}</p>
            <button class="btn btn-primary mr-1"
            v-on:click.prevent="addCart(product.id)">Cart</button>
            <button class="btn btn-success ml-1"
            v-on:click.prevent="addWish(product.id)">Wishlist</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],
    methods: {
        addCart (id) {
            this.$store.dispatch('addCart', {id: id})
        },
        addWish (id) {
            this.$store.dispatch('addWish', {id: id})
        }
    }
}
</script>

<style>

</style>
