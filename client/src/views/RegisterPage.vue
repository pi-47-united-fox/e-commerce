<template>
  <div class="login">
    <div class="login-wraper">
      <div class="login-l">
        <img
          src="../assets/food_photography_palm_beach_gardens_florida_parched_pig.jpg"
          alt="login"
        />
      </div>
      <div class="login-r">
        <div style="margin-top: 20px">
          <img src="../assets/zambanlogo.svg" alt="" />
        </div>
        <div style="margin-top: 10px">
          <div class="input">
            <input
              type="email"
              class="text"
              placeholder="Your Email"
              v-model="email"
            />
          </div>
          <div class="input">
            <input
              type="password"
              class="text"
              placeholder="******"
              v-model="password"
            />
          </div>
          <button class="btn-login" @click.prevent="login">login</button>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nama: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // console.log(this.email, this.password, '<----ini dari view login')
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0px;
}
img {
  height: 100%;
  width: auto;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.login {
  min-height: 100vh;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: -3; */
}
.login-wraper {
  display: flex;
  width: 50%;
  height: 75vh;
  /* background-color: #5978d5; */
}
.login-l {
  width: 50%;
  height: 100%;
  -webkit-box-shadow: -38px 33px 70px -23px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -38px 33px 70px -23px rgba(0, 0, 0, 0.75);
  box-shadow: -38px 33px 70px -23px rgba(0, 0, 0, 0.75);
}
.login-r {
  background-color: #5978d5;
  width: 350px;
  height: 340px;
  position: fixed;
  margin-left: 300px;
  margin-top: 50px;
}
.login-input {
}
.text {
  margin: 10px;
  padding: 15px;
  border: 0px;
  border-radius: 20px;
  width: 200pz;
  /* padding-left: 15px;
  padding-bottom: 5px;
  padding-top: 5px; */
}
.btn-login {
  margin-top: 20px;
  background-color: white;
  height: 40px;
  width: 200px;
  border: 0px;
  border-radius: 20px;
  font-weight: bold;
  color: #5978d5;
}
.cardcontent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.home {
  background-color: #f5f5f5;
}
</style>
