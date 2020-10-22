<template>
  <div class="item col-lg-4">
    <div class="thumbnail card">
      <div class="img-event">
        <img
          class="group list-group-image img-fluid"
          :src="allWishlist.Product.image_url"
          style="width: 300px; height: 170px"
          alt=""
        />
      </div>
      <div class="caption card-body">
        <h1 class="group card-title inner list-group-item-heading">
          {{ allWishlist.Product.name }}
        </h1>
        <div class="row">
          <div class="col-6">
            <p class="lead">
              {{ "Rp" + allWishlist.Product.price.toLocaleString() }}
            </p>
          </div>
          <div class="col-6 ban-buttons">
            <a
              class="btn btn-course"
              href=""
              @click.prevent="removeWishlist(allWishlist.ProductId)"
              >Remove</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wishlist",
  props: ["allWishlist"],
  methods: {
      removeWishlist (id) {
          this.$store.dispatch('deleteWishlist', id)
      }
  }
};
</script>

<style>
</style>