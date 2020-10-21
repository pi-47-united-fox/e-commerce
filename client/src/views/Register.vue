<template>
  <div class="container mt-5">
    <center>
      <div class="m-5" style="font-size:30px">REGISTER</div>
        <form class="form-login" @submit.prevent="onSubmitRegister">
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
export default {
    name:'Register',
    data () {
        return { 
            email:'',
            password: ''
        }
    },
    methods : {
      onSubmitRegister () {
        let dataRegister = { email:this.email, password:this.password}
        this.$store.dispatch('ON_SUBMIT_REGISTER', dataRegister)
      }
    }

}
</script>

<style>

</style>