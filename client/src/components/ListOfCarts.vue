<template>
<li class="media d-flex align-items-center bg-white rounded p-2 shadow my-3 h-100">
    <img :src="cart.Product.image_url" class="mr-3 rounded" alt="Product's photo" width="100">
    <div class="media-body p-1">
        <button type="button" class="close float-right" aria-label="Close"
        v-on:click.prevent="deleteCart(cart.id)">
        <span aria-hidden="true">&times;</span>
        </button>
        <div class="text-left">
            <h5 class="mt-0 mb-0 text-dark">{{cart.Product.name}}</h5> 
        </div>
        <div class="text-left mt-2 d-flex flex-row justify-content-start align-items-center" v-if="edit === false || cart.id != productId">
            <h5 class="text-muted mr-3 my-0">Quantit(ies): {{cart.quantity}}</h5>
            <button type="button" class="btn btn-secondary"
            v-on:click.prevent="toEdit(cart.id)">Edit</button>
        </div>
        <div class="text-left mt-2 d-flex flex-row justify-content-start align-items-center" v-if="edit === true && cart.id == productId">
            <h5 class="text-muted mr-3 my-0">Quantit(ies):
            </h5>
            <form class="mt-1 d-flex flex-row justify-content-start align-items-start"
            v-on:submit.prevent="update">
                <div class="form-group mr-2" style="width: 30%;">
                    <input type="number" class="form-control" v-model="quantity">
                </div>
                <button type="submit" class="btn btn-primary mr-1">Save</button>
                <button type="button" class="btn btn-danger" v-on:click.prevent="cancel(cart.id)">Cancel</button>
            </form>
        </div>
    </div>
</li>
</template>

<script>
export default {
    name: 'CartDetail',
    props: ['cart', 'index'],
    data () {
        return {
            quantity: ''
        }
    },
    methods: {
        deleteCart (id) {
            this.$store.dispatch('deleteCart', { id: id })
        },
        toEdit (id) {
            this.$store.commit('setEdit', {id: id, status: true})
            this.$store.dispatch('fetchCartById', { id: id })
        },
        cancel (id) {
            this.$store.commit('setEdit', {id: '', status: false})
        },
        update () {
            const obj = {
                id: this.cartFetched.id,
                quantity: this.quantity
            }
            this.$store.dispatch('editCart', obj)
        }
    },
    computed: {
        edit () {
            return this.$store.state.edit
        },
        productId () {
            return this.$store.state.product_id
        },
        cartFetched () {
            return this.$store.state.cart
        }
    },
    watch: {
        cartFetched () {
          this.quantity = this.cartFetched.quantity
        }
    }
}
</script>

<style>

</style>
