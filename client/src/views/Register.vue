<template>
  <!-- register -->
  <div class="container-login">
    <h2>Register</h2>
    <form class="uk-form-stacked" @submit.prevent="register">
      <div class="uk-margin">
        <label
          class="uk-form-label"
          for="form-stacked-text"
          style="color: white"
          >Username</label
        >
        <div class="uk-form-controls">
          <input
            class="uk-input "
            id="form-stacked-text"
            type="text"
            placeholder="username..."
            v-model="payload.username"
          />
        </div>
      </div>
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
        Register
      </button>
    </form>
    <p>Have an account? <a href="#" @click.prevent="toLogin">Sign In</a></p>
  </div>
  <!-- register end -->
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      payload: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    },
    register() {
      this.$store.dispatch("register", this.payload);
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style>
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
