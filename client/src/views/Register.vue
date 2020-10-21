<template>
  <div class="hero is-fullheight bg">
    <div class="columns hero-body">
      <RegisterForm></RegisterForm>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style>
</style>
