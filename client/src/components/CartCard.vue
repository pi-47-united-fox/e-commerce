<template>
    <tr>
        <th scope="row">
            <img :src="data.Product.image_url" alt="" width="250px">
            <div style="font-size:25px;">{{data.Product.name}}</div>
        </th>
        <td>Rp. {{data.Product.price.toLocaleString()}}</td>
        <td>{{data.Product.stock}}</td>
        <td>
            <i class="far fa-minus-square mr-2" @click.prevent="onMinusQty(data.id)"></i>
            {{data.quantity}}
            <i class="far fa-plus-square ml-2" @click.prevent="onAddQty(data.id)"></i>
        </td>
        <td>
            <button class="btn btn-danger ml-1" @click.prevent="onDelete(data.id)"> delete </button>
            </td>
    </tr>
</template>

<script>
export default {
    name:'CartCard',
    props:['data'],
    methods : {
        onAddQty (id) {
            this.$store.dispatch('UPDATE_CART',{id,quantity:1})
        },
        onMinusQty (id) {
            this.$store.dispatch('UPDATE_CART',{id,quantity:-1})
        },
        onDelete (id) {
            this.$store.dispatch('DELETE_CART', {id})
        }
    }
}
</script>

<style>

</style>