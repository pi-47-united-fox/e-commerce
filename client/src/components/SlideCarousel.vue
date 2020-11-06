<template>
  <div class="container-fluid">
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="banner.image_url"
        class="img-slide"
        style="background-position: center center; background-repeat: no-repeat; overflow: hidden;"
      ></b-carousel-slide>
  </div>
</template>

<script>
export default {
  name: 'BannerSlide',
  props: ['banner']
}
</script>

<style scooped>
.img-slide{
  height: 59vh;
}
</style>
