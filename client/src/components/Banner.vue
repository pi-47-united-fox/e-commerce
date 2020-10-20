<template>
    <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">  -->
    <carousel :autoplay="true" :perPage="1">
        <slide v-for="(banner, index) in banners" :key="index"> 
            <img :src="banner.image_url" class="banner-img d-block w-100" alt="...">
        </slide> 
    </carousel>
    <!-- </div> -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'Banner',
    components: {
        Carousel,
        Slide
    },
    computed: {
        banners () {
            return this.$store.state.banners
        }
    }

}
</script>

<style>
.banner-img  {
    max-height: 437px;
}
.carousel-item img{  
  width: 100%;
  /* object-fit: none;  */
  object-position: center; 
}
</style>