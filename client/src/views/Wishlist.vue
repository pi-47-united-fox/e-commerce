<template>
 <div>
      <!-- Untuk card Product -->
      <v-container grid-list-s>
      <h2 class="display-1 ml-4">My Wishlist:</h2>
      <v-row>
        <v-col v-for="(wish) in loved" :key="wish.id">
          <WishlistCard 
            :product='wish.Product' 
            :wish='wish'
            :id='wish.id'
          />
        </v-col>
      </v-row>
      </v-container>
    </div>
</template>

<script>
import WishlistCard from '../components/WishlistCard'

export default {
  components: {
    WishlistCard
  },
  computed: {
    loved () {
      return this.$store.state.loved
    }
  },
  created() {
    this.$store.dispatch('fetchWishlist')
  },
}
</script>

<style>

</style>>
