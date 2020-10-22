<template>
    <tr>
        <th scope="row">{{count+1}}</th>
        <td>
            <img :src="wishlist.Product.image_url" width="200px" alt="">
        </td>
        <td>{{wishlist.Product.name}}</td>
        <td>
            <button @click="toCart" class="btn btn-warning mr-2">
                Move to Cart
            </button>
            <button @click="removeWl" class="btn btn-outline-danger">
                Remove
            </button>
        </td>
    </tr>
</template>

<script>
import server from '@/api/server'
export default {
  name: 'WL-ROW',
  props: ['wishlist', 'count'],
  methods: {
    removeWl () {
      const productId = this.wishlist.ProductId
      console.log(productId)
      server
        .delete(`wishlist/${productId}`, {
          headers: {
            access_token: localStorage.access_token
          }
        }
        )
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('fetch_wishlists')
        })
        .catch((err) => {
          console.log(err.response)
          if (err.response) {
            this.$store.commit('SET_ERRMSG', err.response.data.msg)
          }
        })
    },
    toCart () {
      const productId = this.wishlist.ProductId
      console.log(productId)
      server
        .post('cart', {
          productId
        }, {
          headers: {
            access_token: localStorage.access_token
          }
        }
        )
        .then(({ data }) => {
          console.log(data)
          this.removeWl()
          this.$store.dispatch('fetch_cart')
        })
        .catch((err) => {
          console.log(err.response)
          if (err.response) {
            this.$store.commit('SET_ERRMSG', err.response.data.msg)
          }
        })
    }
  }
}
</script>

<style>

</style>
