<template>
  <div id="app"> 
    <LoginForm  
      v-if="loginForm == true"
      @close="toogleLoginForm" 
    
    />
    <div class="container">
      <div class="row  justify-content-between">
        <img src="@/assets/logo-3.png" class="col-2 " width="130px" alt="">
        <h3 class="col-8 align-self-center ">Here is where you find your stuff</h3>
        <h3 class="col-2 align-self-center "></h3> 
      </div>
    </div>
    <nav class="navbar navbar-expand-lg  navbar-light bg-light" :class="{'sticky-top':loginForm == false}">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active" >
              <a @click.prevent="changePage('Home')" class="nav-link menu" href="#" > Home </a>
            </li>
            <li class="nav-item ">
              <a @click.prevent="changePage('Products')" class="nav-link menu" href="#">All Products</a>
            </li>  
            <li class="nav-item dropdown" href="#"> 
              <a class="nav-link menu dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div @click.prevent="productPage(category.name)" v-for="(category,i) in categories" :key="i">
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">{{category.name}}</a> 
                </div> 
              </div>
            </li>
          </ul>
          <ul class="navbar-nav" >
            <li class="nav-item" @click.prevent="changePage('Wishlists')"  href="#">
              <a href="#"  class="d-flex" data-toggle="tooltip" data-placement="top" title="Your Wishlist" style="background-color:#ffc038; border-radius:10px; max-width:90px">
                <img src="@/assets/wishlist-logo.webp" width="50px" alt=""> 
                <div class="bg-dark text-white pl-3 pr-3 pt-3" style="border-radius:10px;">
                  {{wishlistsCount}}
                </div>
              </a>
            </li>
            <li class="nav-item" @click.prevent="changePage('Cart')" href="#"> 
              <a href="#" class="d-flex "  style="background-color:#ffc038; border-radius:10px; max-width:90px">
                <img src="@/assets/cart-logo.png" width="50px" alt=""> 
                <div class="bg-dark text-white pl-3 pr-3 pt-3" style="border-radius:10px;">
                  {{cartCount}}
                </div>
              </a>
            </li>
            <li class="nav-item" v-if="isLoggedIn == false">
              <a class="nav-link menu  pl-4 pr-4" @click="toogleLoginForm" href="#"><h5>Login</h5></a>
            </li>  
            <li class="dropdown" v-if="isLoggedIn == true" href="#"> 
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{email}}
              </a>
              <div class="dropdown-menu ml-3" aria-labelledby="navbarDropdown"> 
                <a class="dropdown-item" @click.prevent="logout" href="#">Logout</a>
              </div>
            </li>
          </ul> 
          <!-- <div class="flex">
            <button class="btn btn-outline-danger my-2 my-sm-0" >Logout</button>
            
          </div> -->
          <form class="form-inline my-2 my-lg-0" @submit.prevent=""> </form>
        </div>
      </div>
    </nav> 
    <router-view/>
    <footer> 
      <!-- <div class="container"> -->
        <div class="border mt-5 p-4 text-white">
          Muhammad Fauzan Adhim - Hacktiv8 Student
        </div>
      <!-- </div> -->
    </footer>

  </div>
</template>
<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'App',
  components: {
    LoginForm
  },
  data () {
    return { 
    }
  },
  methods: {
    toogleLoginForm () {
      this.$store.commit('TOOGLE_LOGINFORM')
    },
    changePage (page) {
      console.log(page);
      this.$router.push({name:page})
    },
    productPage (payload ) { 
       this.$router.push({ path: 'products', query: { category: payload } }) 
    },
    logout () {
      localStorage.clear()
      this.$store.commit('FETCH_WISHLISTS',[])
      this.$store.commit('FETCH_CART',[])
      this.$store.commit('TOOGLE_LOGGEDIN',[])
      this.$router.push({name:'Home'})

    }
  },
  computed:{
    email () {
      return this.$store.state.email
    },
    wishlistsCount () {
      return this.$store.state.wishlists.length
    },
    cartCount () {
      return this.$store.state.cart.length
    },
    email () {
      return this.$store.state.userEmail
    },
    loginForm () {
      return this.$store.state.loginForm
    },
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    if(localStorage.access_token){ 
      this.$store.dispatch("fetch_all");  
      this.$store.commit("TOOGLE_LOGGEDIN"); 
    }else{
      this.$store.dispatch('fetch_products')
      this.$store.dispatch('fetch_categories')
      this.$store.dispatch('fetch_banners')
    }
  }
}
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item.active {
  /* box-sizing: border-box; */
  background-color:#ffc038; 
} 
.navbar { 
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.nav-item:hover {  
  /* margin-right: 10px;
  margin-left: 5px;  */
  background-color:#ffc038; 
  
  transform: scale(1.001);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
.nav-item {   
  border:solid #ffc038 2px; 
  border-radius:10px;
  margin-right: 5px;
}
footer { 
  background-color:#aa7f23; 
}
</style>
