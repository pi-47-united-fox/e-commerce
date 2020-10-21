<template>
  <div>
    <div class="navbar">
      <div class="container">
      <div>
        <img src="../assets/zambanlogo.svg" alt="">
      </div>
      <div>
        <button class="crt-btn" @click.prevent='toCart()'>
        <img 
        src="../assets/shopping-cart.svg" height=30px>
        </button>
        <button class="logout" @click='logOut()'>Logout</button>
      </div>
      </div>
    </div>
    <div>
      <img  class="landingPage" src="../assets/Healthy-Delivery-Services-Dinnerlicious.jpg" alt="">
    </div>
    <div class="container">
      <div class="home">
        <div class="d-flex flex-wrap">
          <Card
            v-for="product in this.$store.state.products"
            :key="product.id"
            :products="product"
            class="col-3"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>

</div>

<script>
// @ is an alias to /src
import Card from "../components/Card";
import Swal from 'sweetalert2'
import router from '../router'
export default {
  name: "Home",
  props:['products'],
  components: {
    Card,
  },
  methods:{
    toCart(){
       this.$router.push({ path: "Cart" });
    },
    logOut() {
      Swal.fire({
        title: "Are you sure?",
        text: "Sign out this page!",
        icon: "warning",
        iconColor: "#ea9292",
        showCancelButton: true,
        confirmButtonColor: "#ea9292",
        cancelButtonColor: " #7453b8;",
        confirmButtonText: "Yes!!",
      }).then((data) => {
        if (data.isConfirmed) {
          localStorage.clear();
          router.push({ path: "Login" });
        }
      });
    },
  },
  created() {
    console.log("ini di home");
    this.$store.dispatch("fetchData");
  },
};
</script>
<style scoped>
.logout{
  background: transparent;
  margin-left:50px; 
  border-width: 0px;
  border-radius: 3px;
  color: white;

}
.crt-btn{
  background-color: transparent;
  border-width: 0px;
}
.navbar {
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  z-index: 1;
  min-width: 100vw;
  height: 80px;
  background-color: black;
}
.btn-add{
  background-color: transparent;
  border-width: 0px;
}
</style>
