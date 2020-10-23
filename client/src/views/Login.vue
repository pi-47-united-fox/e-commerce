<template>
  <div class="container mt-5">
    <center>
        <div class="m-5" style="font-size:30px">LOGIN</div>
        <form class="form-login" @submit.prevent="onSubmitLogin">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
        </form>
    </center>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmitLogin () {
      const dataLogin = { email: this.email, password: this.password }
      this.$store.dispatch('ON_SUBMIT_LOGIN', dataLogin)
    }
  },
  created () {
    if(localStorage.access_token){
      router.push({path:'/'})
    }
  }
}
</script>

<style>
    .form-login{
        width: 50%;
    }
</style>
