<template>
<div>
    <Navbar />
    <div class="container border border-dark my-5 px-0 rounded d-flex flex-row justify-content-between shadow" style="width: 70%; height: 80%;">
        <div class="container px-0 mr-1 ml-0" style="width: 100%;">
            <img src="https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="cover" class="rounded float-left" style="width: 600px;">
        </div>
        <div class="container px-0 mx-3" style="width: 100%; height: 100%;">
            <h2 class="text-center my-5">Register</h2>
            <form class="my-0 px-0 mx-auto" style="width: 70%" v-on:submit.prevent="register">
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-dark" style="width: 100%;">Sign up</button>
            </form>
            <div class="my-3 text-center">
                <small>Already registered? <router-link to="/login" class="text-primary">Login here</router-link>.</small>
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    name: 'Register',
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
      register () {
          let newestUser = {
              email: this.email,
              password: this.password
          }
          this.$store.dispatch('register', newestUser)
      }
    }
}
</script>

<style>

</style>