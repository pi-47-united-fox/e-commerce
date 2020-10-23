<template>
  <!-- login -->
  <div class="container-login">
    <h2>Login</h2>
    <form class="uk-form-stacked" @submit.prevent="login">
      <div class="uk-margin">
        <label
          class="uk-form-label"
          for="form-stacked-text"
          style="color: white"
          >Email</label
        >
        <div class="uk-form-controls">
          <input
            class="uk-input "
            id="form-stacked-text"
            type="email"
            placeholder="email..."
            v-model="payload.email"
          />
        </div>
      </div>
      <div class="uk-margin">
        <label
          class="uk-form-label"
          for="form-stacked-text"
          style="color: white;"
          >Passwod</label
        >
        <div class="uk-form-controls">
          <input
            class="uk-input "
            id="form-stacked-text"
            type="password"
            placeholder="passwod..."
            v-model="payload.password"
          />
        </div>
      </div>
      <button
        class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
      >
        login
      </button>
    </form>
    <p>
      dont have any account? <a href="#" @click.prevent="signUp">Sign Up</a>
    </p>
  </div>
  <!-- login end -->
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      payload: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.payload);
      if (!localStorage.getItem("access_token")) {
        console.log("cant login");
      } else {
        this.$router.push({ path: "/" });
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    signUp() {
      this.$router.push({ path: "/register" });
    }
  },
  computed: {
    access_token() {
      return localStorage.setItem(this.$store.state.access_token);
    }
  }
};
</script>

<style>
/* login */
.container-login {
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgb(0, 0, 0);
}
button {
  align-items: center;
}

.container-login h2 {
  color: white;
}
</style>
