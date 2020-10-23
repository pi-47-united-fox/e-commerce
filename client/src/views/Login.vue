<template>
<div>
    <Navbar />
    <div class="container border border-dark mt-5 px-0 rounded d-flex flex-row justify-content-between shadow" style="width: 70%; height: 80%;">
        <div class="container px-0 mr-1 ml-0" style="width: 100%;">
            <img src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            alt="cover" class="rounded float-left">
        </div>
        <div class="container px-0 mx-3" style="width: 100%;">
            <h2 class="text-center my-5">Member Login</h2>
            <form class="my-0 px-0 mx-auto" style="width: 70%" v-on:submit.prevent="login">
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-dark" style="width: 100%;">Sign in</button>
            </form>
            <div class="my-3 text-center">
                <small>Not registered? <router-link to="/register" class="text-primary">Create an account</router-link>.</small>
                <router-view></router-view> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    name: 'Login',
    components: {
        Navbar
    },
    data () {
        return {
          email: '',
          password: ''
      }
    },
    methods: {
      login () {
          let user = {
              email: this.email,
              password: this.password
          }
          this.$store.dispatch('login', user)
      }
    }
}
</script>

<style>

</style>
