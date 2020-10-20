<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://image.freepik.com/free-vector/sale-banner-with-cosmetic-products-black-silk_107791-2095.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://www.saqof.com/modules/simpleslideshow/slides/8aa1c60cf1bba99e090f9c385624f584.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="https://image.freepik.com/free-vector/cosmetic-pump-bottle-banner_33099-2058.jpg" class="d-block w-100" alt="...">
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
    name: 'Banner'

}
</script>

<style>
.carousel-item {
    max-height: 437px;
}
.carousel-item img{  
  width: 100%;
  /* object-fit: none;  */
  object-position: center; 
}
</style>