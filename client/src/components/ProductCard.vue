<template>
  <div class="card col-2 m-5" style="width: 18rem;">
    <img :src="data.image_url" class="card-img-top" alt="" height="200px">
    <div class="card-body">
        <h5 class="card-title bike-title">{{data.name}}</h5>
        <p class="card-text">Price IDR {{data.price.toLocaleString()}}</p>
        <p class="card-text">Stock {{data.stock}}</p>
        <center><a href="#" class="btn btn-success" @click.prevent="onAddCart(data.id)">Add To Cart</a></center>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['data'],
  methods: {
    onAddCart (id) {
      this.$store.dispatch('ADD_CART', id)
    }
  }
}
</script>

<style>
    .bike-title{
        min-height: 50px;
    }
</style>
