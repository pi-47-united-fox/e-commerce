<template>
  <div id="app">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
      <a class="navbar-brand" href="#">GearUp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <h5>
            <i class="fa fa-shopping-cart" style="color: black;"></i> Cart
          </h5>
          <p>......</p>
          <h5><i class="fa fa-heart" style="color: red;"></i> Wishlist</h5>
        </form>
      </div>
    </nav>
    <!-- navbar ends -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
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
</style>
