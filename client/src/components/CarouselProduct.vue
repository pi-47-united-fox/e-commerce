<template>
  <div class="container"> 
    <carousel :autoplay='true' :perPage="3">
        <slide v-for="(product, index) in filteredProduct" :key="index"> 
          <div class="col" >
            <div class="item-box-blog">
              <div class="item-box-blog-image"> 
                <div class="item-box-blog-date bg-blue-ui white"> <span class="mon">Stock: {{product.stock}}</span> </div> 
                <figure> <img alt="" :src="product.image_url" width="190px" style="max-height:190px"> </figure>
              </div>
              <div class="item-box-blog-body"> 
                <div class="item-box-blog-heading">
                  <a href="#" tabindex="0">
                    <h5>{{product.name}}</h5>
                  </a>
                </div>  
                <div class="item-box-blog-text">
                  <p>{{product.description}}</p>
                </div>
                <div class="d-flex"> 
                    <a href="#" tabindex="0" class="btn white wishlist"> 
                    </a> 
                    <a href="#" tabindex="0" class="btn bg-blue-ui white read">Add to cart</a>  
                </div>  
              </div>
            </div>
          </div>
        </slide> 
    </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'product-carousel',
  props: ['categoryName'],
  components: {
      Carousel,
      Slide
  },
  computed: {  
    filteredProduct () { 
      let category = this.$store.state.categories.filter(cate => cate.name == this.categoryName)
      let result = [] 
      if(category[0]){
        let catId = category[0].id
          result = this.$store.state.products.filter(product => product.CategoryId == catId);  
      }
      if(result.length>6){
        result = result.slice(0,6)
      }
      return result
    },
  }

}
</script>

<style scoped>


.cta-100 {
  margin-top: 100px;
  padding-left: 8%;
  padding-top: 7%;
}
.col-md-4{
    padding-bottom:20px;
}

.white {
  color: #fff !important;
}
.mt{float: left;margin-top: -20px;padding-top: 20px;}
.bg-blue-ui {
  background-color: #708198 !important;
}
figure img{width:300px;}

#blogCarousel {
  padding-bottom: 25px;
}

.blog .carousel-indicators {
  left: 0;
  /* top: -50px; */
  /* height: 50%; */
}


/* The colour of the indicators */

.blog .carousel-indicators li {
  background: #708198;
  /* border-radius: 50%; */
  /* width: 8px; */
  height: 1px;
}

.blog .carousel-indicators .active {
  background: #0fc9af;
}
 

.item-carousel-blog-block {
  outline: medium none;
  padding: 15px;
}

.item-box-blog {
  border: 1px solid #dadada;
  text-align: center;
  z-index: 4;
  padding: 20px;
}

.item-box-blog-image {
  position: relative;
}

.item-box-blog-image figure img {
  width: 100%;
  height: auto;
}

.item-box-blog-date {
  position: absolute;
  z-index: 5;
  padding: 4px 20px;
  top: -20px;
  right: 8px;
  background-color: #41cb52;
}

.item-box-blog-date span {
  color: #fff;
  display: block;
  text-align: center;
  line-height: 1.2;
}

.item-box-blog-date span.mon {
  font-size: 18px;
}

.item-box-blog-date span.day {
  font-size: 16px;
}

.item-box-blog-body {
  padding: 10px;
}

.item-heading-blog a h5 {
  margin: 0;
  line-height: 1;
  text-decoration:none;
  transition: color 0.3s;
}

.item-box-blog-heading a {
    text-decoration: none;
}

.item-box-blog-data p {
  font-size: 13px;
}

.item-box-blog-data p i {
  font-size: 12px;
}

.item-box-blog-text {
  max-height: 100px;
  overflow: hidden;
}

.mt-10 {
  float: left;
  margin-top: -10px;
  padding-top: 10px;
}

.btn.bg-blue-ui.white.read {
  cursor: pointer;
  /* height: 35px; */
  /* padding: 4px 20px; */
  float: left;
  margin-top: 10px;
}

.wishlist {
    background-color: #ffc038;
    padding: 10px 20px;
    float: left;
    margin-top: 10px;
    margin-right: 10px;
    background-image: url('../assets/wishlist-logo.webp');
    background-size: cover;
    background-position: center;
}
.wishlist:hover {
  box-shadow: 0px 5px 15px inset #a5791b;
} 

.btn.bg-blue-ui.white.read:hover {
  box-shadow: 0px 5px 15px inset #4d5f77;
}

</style>