<template>
  <!-- carousel -->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" style="width:100%; height: 500px !important">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://1.bp.blogspot.com/-_x-hmIawyVo/XQz35GpCHdI/AAAAAAAANc4/P_SmuZFuABADh7Ou1TksphbvCe6uuYEXwCLcBGAs/s1600/logitech-back-to-school-promo.png" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://res.cloudinary.com/lmn/image/upload/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/0/7/0/07031b46-a6ab-4fb3-adf3-bd8acb6a7005-sr970300-2ded7.png" alt="Second slide">
        </div>
        <div class="carousel-item">
        <img class="d-block w-100" src="https://www.static-src.com/siva/asset//04_2019/logitech-search-banner-942x200-os.jpg" alt="Third slide">
        </div>
      </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: ['product']
}
</script>

<style>

</style>
