<template>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-primary mb-5 fixed-top">
        <a class="navbar-brand text-white" href="#"  v-on:click.prevent="home">Matabulan</a>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link text-dark" href="#" id="HomeNav"
                        v-on:click.prevent="home" v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register'">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-dark" href="#" id="LoginNav"
                        v-on:click.prevent="login" v-if="this.$route.name === 'Login' || this.$route.name === 'Register'">Login</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-dark" href="#" id="RegisterNav"
                        v-on:click.prevent="register" v-if="this.$route.name === 'Login' || this.$route.name === 'Register'">Register</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-dark" href="#" id="CartNav"
                        v-on:click.prevent="cart" v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register'">Cart</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link text-dark" href="#" id="WishNav"
                        v-on:click.prevent="wishlist" v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register'">Wishlist</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#" id="logout"
                        v-on:click.prevent="logout" v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register'">Logout</a>
                </li>
            </ul>           
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
      home () {
        this.$router.push({name: 'Home'})
      },
      login () {
        this.$router.push({name: 'Login'})
      },
      register () {
        this.$router.push({name: 'Register'})
      },
      cart () {
        this.$router.push({name: 'Cart'})
      },
      wishlist () {
        this.$router.push({name: 'Wishlist'})
      },
      logout () {
        localStorage.clear()
        this.$router.push({name: 'Login'})
      }
  }
}
</script>

<style>
 /* unvisited link */
a:link {
  color: white;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: white;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: white;
  text-decoration: none;
}

/* selected link */
a:active {
  color: white;
  text-decoration: none;
} 
</style>
