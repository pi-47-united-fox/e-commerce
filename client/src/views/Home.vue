<template>

  <div class="home">
    <div class="container">
        <Banner />
    <hr>
      <section>
        <div class="row category-title" @click="changePage('fashion')">
            <h1 class="text-left ml-3">Fashion</h1>
        </div>
        <hr>
        <div class="row">
          <div class="col-3 ">
            <img src="https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148211619.jpg" height="300px" width="100%" alt="">
          </div>
          <div class="col-9">
            <CarouselProduct categoryName="Fashion"/>
          </div>
        </div>
        <hr>
        <h1 class="text-left category-title" @click="changePage('electronics')">Electronics</h1>
        <hr>
        <div class="row">
          <div class="col-3 ">
            <img src="https://image.freepik.com/free-vector/colorful-garget-icons_23-2147515956.jpg" height="300px" width="100%" alt="">
          </div>
          <div class="col-9">
            <CarouselProduct categoryName="Elektronik"/>
          </div>
        </div>
        <hr>
        <h1 class="text-left category-title" @click="changePage('hobby')">Hobbies</h1>
        <hr>
        <div class="row">
          <div class="col-3 ">
            <img src="https://image.freepik.com/free-vector/colorful-garget-icons_23-2147515956.jpg" height="300px" width="100%" alt="">
          </div>
          <div class="col-9">
            <CarouselProduct categoryName="Hobby"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import CarouselProduct from '@/components/CarouselProduct.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    CarouselProduct
  },
  methods: {
    changePage (page) {
      console.log(page)
    }
  },
  created () { 
    this.$store.dispatch('fetch_products')
    this.$store.dispatch('fetch_categories')
    this.$store.dispatch('fetch_banners')
    if(localStorage.access_token){ 
        console.log("fetching");
        this.$store.dispatch('fetch_history') 
        this.$store.dispatch('fetch_cart') 
        this.$store.dispatch('fetch_wishlists') 
    }
  }
}
</script>
<style scoped>
.category-title {
  cursor: pointer;
}
</style>
