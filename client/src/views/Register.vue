<template>
  <form
    class="bg-dark mx-auto text-primary my-5 py-5 px-3"
    @submit.prevent="register"
  >
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const input = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("register", input)
      .then(data => {
        this.$router.push({path: "/login"})
      })
    },
  },
};
</script>

<style>
</style>
