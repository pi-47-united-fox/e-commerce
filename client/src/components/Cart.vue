<template>
  <div class="item col-lg-4">
    <div class="thumbnail card" v-if="allCart.status == 'unpaid'">
      <div class="img-event">
        <img
          class="group list-group-image img-fluid"
          :src="allCart.Product.image_url"
          style="width: 300px; height: 170px"
          alt=""
        />
      </div>
      <div class="caption card-body">
        <h1 class="group card-title inner list-group-item-heading">
          {{ allCart.Product.name }}
        </h1>
        <h5 class="group card-title inner list-group-item-heading">
          Quantity:
          <form @submit.prevent="changeQuantity(allCart.ProductId)"> 
            <div class="form-group" style="display:flex; justify-content:center;">
              <button type="button" class="btn btn-danger fa fa-minus" @click.prevent="minusQuantity(allCart.ProductId)" :disabled="allCart.quantity === 1"></button>
              <input
                type="text"
                class="form-control form-control-sm"
                style="width: 90px"
                v-model="allCart.quantity"
              />
              <button type="button" class="btn btn-success fa fa-plus" @click.prevent="addQuantity(allCart.ProductId)" :disabled="allCart.quantity === allCart.Product.stock - 1"></button>
            </div>
          </form>
        </h5>
        <div class="row">
          <div class="col-6">
            <p class="lead">{{'Rp' + (allCart.quantity * allCart.Product.price).toLocaleString()}}</p>
          </div>
          <div class="col-6 ban-buttons">
            <a class="btn btn-course" href="" @click.prevent="removeCart(allCart.ProductId)">Remove</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["allCart"],
  methods:{
    addQuantity (ProductId) {
        this.$store.dispatch("addCarts",ProductId);
    },
    minusQuantity (ProductId) {
       let obj = {
          quantity: this.allCart.quantity - 1,
          ProductId: ProductId
       }
        this.$store.dispatch('minusCarts', obj)
    }, 
    changeQuantity (ProductId) {
        let obj = {
            quantity: this.allCart.quantity,
            ProductId: ProductId
        }
        this.$store.dispatch('minusCarts', obj)
    },
    removeCart (ProductId) {
        this.$store.dispatch('deleteCarts', ProductId)
    }
  }
};
</script>

<style>
</style>