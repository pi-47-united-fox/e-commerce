<template>
    <v-navigation-drawer v-model="drawer" app class="pt-4" mini-variant>
        <v-avatar
            size="40"
            color="grey"
            class="d-block text-center mx-auto mb-9"
        >
        <div class="mx-auto mt-3">
        USp
        </div>
        </v-avatar>
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    color="black"
                    @click="goToShopping"
                    class="d-block text-center mx-auto mb-9"
                    icon
                >
                    <v-icon>mdi-shopping</v-icon>
                </v-btn>
            </template>
            <span>Shop</span>
        </v-tooltip>
        <v-tooltip right v-if="hideLogOut">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    color="red"
                    @click="goToWishlist"
                    class="d-block text-center mx-auto mb-9"
                    icon
                >
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </template>
            <span>Wishlist</span>
        </v-tooltip>
        <v-tooltip right v-if="hideLogOut">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    color="green"
                    @click="goToCheckout"
                    class="d-block text-center mx-auto mb-9"
                    icon
                >
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
            </template>
            <span>Checkout</span>
        </v-tooltip>
        <v-tooltip right v-if="hideLogOut">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    color="blue"
                    @click="goToHistory"
                    class="d-block text-center mx-auto mb-9"
                    icon
                >
                    <v-icon>mdi-history</v-icon>
                </v-btn>
            </template>
            <span>Chekout History</span>
        </v-tooltip>
        <v-tooltip right v-if="hideLogOut">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    @click="logMeOut"
                    class="d-block text-center mx-auto mb-9"
                    icon
                >
                    <v-icon>mdi-logout</v-icon>
                </v-btn></template
            >
            <span>Log Out</span>
        </v-tooltip>
        <v-tooltip right v-else>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    @click="toSignInPage"
                    class="d-block text-center mx-auto mb-9"
                    icon
                >
                    <v-icon>mdi-login</v-icon>
                </v-btn></template
            >
            <span>Log in</span>
        </v-tooltip>
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
    },
    toSignInPage () {
      this.$router.push('/login')
    }
  }
}
</script>

<style></style>
