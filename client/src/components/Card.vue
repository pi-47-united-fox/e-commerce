<template>
  <div class="col-md-4 product-men">
    <!-- {{ allData }} -->
    <div class="product-shoe-info shoe text-center">
      <div class="men-thumb-item">
        <img
          :src="allData.image_url"
          style="width: 300px; height: 170px"
          class="img-fluid"
          alt=""
        />
      </div>
      <div class="item-info-product">
        <h4>
          <span href="shop-single.html">{{allData.name}} </span>
        </h4>

        <div class="product_price">
          <div class="grid-price">
            <!-- dropdown -->
            <div class="dropdown" style="padding: 5px">
              <button
                class="dropbtn btn-sm fa fa-plus"
                style="padding: 5px; margin: 10px"
              ></button>
              <div class="dropdown-content">
                <a href="" class="fa fa-shopping-cart" @click.prevent="addToCart(allData.id)"> Cart</a>
                <a href="" class="fa fa-heart" @click.prevent="addToWishlist(allData.id)"> Wishlist</a>
              </div>
            </div>
            <span class="money">{{'Rp.'+allData.price.toLocaleString()}}</span>
          </div>
        </div>
        <span>Stock: {{allData.stock - 1}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["allData"],
  methods: {
      addToCart (id) {
          this.$store.dispatch("addCarts",id);
      },
      addToWishlist (id) {
          this.$store.dispatch("addWishlist",id);
      }
  }
};
</script>

<style>
</style>