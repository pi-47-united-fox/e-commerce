<template>
<div class="column is-three-fifths is-offset-one-fifth">
            <div class="box">
                <div class="logo-form">
                    <img src="#" alt="">
                </div>
                <h1 class="title">Registration</h1>
                <form>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-model="email" class="input" type="email" placeholder="Email">
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input v-model="password" class="input" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <a v-on:click="register" class="button is-primary" style="background-color: #BDA06A;">
                                Sign Up
                            </a>
                        </p>
                        <p class="control">
                            <router-link to="/login" class="button is-primary" style="background-color: #DBCAB7;">
                                I already have an account
                            </router-link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>

export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', { email: this.email, password: this.password })
    }

  }

}
</script>

<style>
.bg {
  background-image: url("https://images.unsplash.com/photo-1597067283915-62ca9ec1c236?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80");
}

</style>
