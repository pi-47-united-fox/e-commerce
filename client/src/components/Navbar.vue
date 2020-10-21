<template>
  <div class="main-banner inner" id="home">
        <!-- header -->
        <header class="header">
            <div class="container-fluid px-lg-5">
                <!-- nav -->
                <nav class="py-4">
                    <div id="logo">
                        <h1> <a href="" @click.prevent="$router.push({ path:'/' })"><span class="fa fa-bold" aria-hidden="true"></span>ootie</a></h1>
                    </div>

                    <label for="drop" class="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul class="menu mt-2">
                        <li><a href="" @click.prevent="$router.push({ path:'/' })">Home</a></li>
                        <li><a href="" @click.prevent="$router.push({ path:'/cartPage' })">Cart</a></li>
                        <li><a href="">My Wishlist</a></li>
                        <li><a @click.prevent="logoutHandler" href="">Logout</a></li>
                    </ul>
                </nav>
                <!-- //nav -->
            </div>
        </header>
        <!-- //header -->

    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        logoutHandler () {
            localStorage.clear()
            this.$router.push({ path: '/login' })
        }
    }
}
</script>

<style>

</style>