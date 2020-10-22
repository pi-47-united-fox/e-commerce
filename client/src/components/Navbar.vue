<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        class="pt-4"
        mini-variant
    >
        <v-avatar
            size="40"
            color="grey"
            class="d-block text-center mx-auto mb-9"
        > User Avatar
        </v-avatar>
        <v-btn color="black" @click="goToShopping" class="d-block text-center mx-auto mb-9" icon>
            <v-icon>mdi-shopping</v-icon>
        </v-btn>
        <v-btn color="green" @click="goToCheckout" class="d-block text-center mx-auto mb-9" icon>
        <v-icon>mdi-cart</v-icon>
        </v-btn>
         <v-btn color="red" @click="goToWishlist" class="d-block text-center mx-auto mb-9" icon>
        <v-icon>mdi-heart</v-icon>
        </v-btn>
         <v-btn color="blue" @click="goToHistory" class="d-block text-center mx-auto mb-9" icon>
        <v-icon>mdi-bell</v-icon>
        </v-btn>
         <v-btn color="" class="d-block text-center mx-auto mb-9" icon>
        <v-icon>mdi-email-open</v-icon>
        </v-btn>
        <v-btn color="" v-if="hideLogOut" @click="logMeOut" class="d-block text-center mx-auto mb-9" icon>
        <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      drawer: 'true'
    }
  },
  computed: {
    hideLogOut () {
      return this.$store.state.userLogedIn
    }
  },
  methods: {
    logMeOut () {
      this.$store.commit('LOGOUT')
      this.$router.push('/')
    },
    goToWishlist () {
      return this.$router.push('/wishlist')
    },
    goToShopping () {
      return this.$router.push('/')
    },
    goToCheckout () {
      return this.$router.push('/checkout')
    },
    goToHistory () {
      return this.$router.push('/history')
    }
  }

}
</script>

<style></style>
