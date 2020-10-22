<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  background-image: url("./assets/pattern.png");
  background-repeat: repeat;
  font-family: 'Lato', sans-serif;

}


h1, h2, h3, h4, h5, h6 {
 font-family: "Crimson Text", serif;
  font-weight: normal;
  text-transform: uppercase;
}

.price-list {
  font-family: 'Lato', sans-serif;
  line-height: 1.5;

}

.button-product {
  font-size: 12px;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.heading-regular {
    font-size: 10px;
    font-family: "Crimson Text", serif;
    font-weight: bold;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}
/* #app {
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
} */
</style>
