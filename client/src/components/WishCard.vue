<template>
<div class="col-3 px-0 mr-3">
    <div class="card h-100 shadow border border-dark" style="width: 18rem;">
        <img :src="wish.Product.image_url" class="card-img-top img-thumbnail" alt="Product's picture">
        <div class="card-body">
             <button type="button" class="close float-right" aria-label="Close"
            v-on:click.prevent="deleteWish(wish.id)">
                <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="card-title">{{wish.Product.name}}</h5>
            <p class="card-text text-justify">Price: Rp.{{wish.Product.price}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'WishCard',
    props: ['wish'],
    methods: {
        deleteWish (id) {
            this.$store.dispatch('deleteWish', {id: id})
        }
    }
}
</script>

<style>

</style>
