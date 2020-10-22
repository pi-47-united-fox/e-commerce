<template>
    <div class="col-4" >
        <div class="item-box-blog">
            <div class="item-box-blog-image"> 
            <div class="item-box-blog-date bg-blue-ui white"> <span class="mon">Stock: {{product.stock}}</span> </div> 
            <figure> <img alt="" :src="product.image_url" width="190px" style="max-height:190px"> </figure>
            </div>
            <div class="item-box-blog-body"> 
                <div class="item-box-blog-heading"> 
                    <h5>{{product.name}}</h5> 
                </div>  
                <div class="item-box-blog-text">
                    <p>{{product.description}}</p>
                </div>
                <div class="d-flex"> 
                    <a href="#" tabindex="0" @click.prevent="addWishlist" class="btn white wishlist"> 
                    </a> 
                    <a href="#" tabindex="0" @click.prevent="addCart" class="btn bg-blue-ui white read">Add to cart</a>  
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import server from '@/api/server'
export default {
    name: 'Card-Product',
    props: ['product'],
    methods: {
        addWishlist () { 

            if(localStorage.access_token){
                server
                    .post(`wishlist`, {
                        productId: this.product.id
                    },{
                        headers: {
                            access_token:localStorage.access_token
                        }
                    }
                    )
                    .then(({ data }) => { 
                    console.log(data); 
                    this.$store.dispatch("fetch_wishlists");
                    })
                    .catch((err) => { 
                    console.log(err.response);
                    if (err.response) {
                        this.$store.commit('SET_ERRMSG',err.response.data.msg) 
                    }
                    });
            }else{
            this.$store.commit("TOOGLE_LOGINFORM");
            }

        },
        addCart () {
            if(localStorage.access_token){

                server
                    .post(`cart`, {
                        productId: this.product.id
                    },{
                        headers: {
                            access_token:localStorage.access_token
                        }
                    }
                    )
                    .then(({ data }) => { 
                    console.log(data); 
                    this.$store.dispatch("fetch_cart");
                    })
                    .catch((err) => { 
                    console.log(err.response);
                    if (err.response) {
                        this.$store.commit('SET_ERRMSG',err.response.data.msg) 
                    }
                    });
            }else{
            this.$store.commit("TOOGLE_LOGINFORM");
            } 
        },
    }

}
</script>

<style>
 
.white {
  color: #fff !important;
}
.mt{float: left;margin-top: -20px;padding-top: 20px;}
.bg-blue-ui {
  background-color: #708198 !important;
}
figure img{width:300px;}
 
.item-box-blog {
  border: 1px solid #dadada;
  margin-top: 10px;
  border-radius: 15px;
  text-align: center;
  z-index: 4;
  padding: 20px;
  min-height: 364px;
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