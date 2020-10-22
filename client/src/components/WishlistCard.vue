<template>
  <v-hover v-slot:default="{ hover }" >
    <v-card class="mx-auto" min-width="300" max-width="300">
      <v-img
        class="white--text align-end"
        :aspect-ratio="16 / 16"
        :src="product.image_url"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
          >
            <v-btn rounded color="green" @click="addToCart">Add to Cart</v-btn>
          </div>
        </v-expand-transition>
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
            Stock: {{product.stock}}
          <v-spacer></v-spacer>
          <v-btn color="grey" icon @click="deleteFromWishlist">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </v-app-bar>
      </v-img>

      <v-card-title primary-title>
          {{ product.name }}
      </v-card-title>

      <!-- <v-card-subtitle class="pb-0">
      </v-card-subtitle> -->

      <v-card-text class="text--primary">
        Rp {{ product.price }}
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'Card',
  props: ['product', 'id', 'wish'],
  methods: {
    addToCart () {
      const { id } = this.product
      this.$store.dispatch('addToCart', id)
        .then(result => {
          if (result === 'to register or login') {
            // GOTO Register page
            this.$router.push('/register')
          }
        })
    },
    deleteFromWishlist () {
      this.$store.dispatch('deleteWishlist', this.wish.id)
    }
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
