<template>
    <tr>
        <th scope="row">{{count+1}}</th>
        <td>
            <img :src="item.Product.image_url" width="200px" alt="">
        </td>
        <td>{{item.Product.name}}</td>
        <td>
            Rp. {{item.Product.price.toLocaleString('id')}}
        </td>
        <td>
            <button class="btn btn-outline-warning" v-if="item.quantity>1" @click="decQty"> - </button>
            {{item.quantity}}
            <button class="btn btn-outline-warning" @click="incQty"> + </button>
        </td>
        <td>
            <button @click="toWishlist" class="btn btn-warning mr-2">
                Move to Wishlist
            </button>
            <button @click="removeCart" class="btn btn-outline-danger">
                Remove
            </button>
        </td>
    </tr>
</template>

<script>
import server from '@/api/server'
export default {
  name: 'WL-ROW',
  props: ['item', 'count'],
  methods: {
    removeCart () {
      const productId = this.item.ProductId
      console.log(productId)
      server
        .delete(`cart/${productId}`, {
          headers: {
            access_token: localStorage.access_token
          }
        }
        )
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('fetch_cart')
        })
        .catch((err) => {
          console.log(err.response)
          if (err.response) {
            this.$store.commit('SET_ERRMSG', err.response.data.msg)
          }
        })
    },
    toWishlist () {
      server
        .post('wishlist', {
          productId: this.item.ProductId
        }, {
          headers: {
            access_token: localStorage.access_token
          }
        }
        )
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('fetch_wishlists')
          this.removeCart()
        })
        .catch((err) => {
          console.log(err.response)
          if (err.response) {
            this.$store.commit('SET_ERRMSG', err.response.data.msg)
          }
        })
    },
    incQty () {
      const productId = this.item.ProductId
      console.log(this.item.quantity, this.item.Product.stock)
      if (this.item.quantity >= this.item.Product.stock) {
        console.log('limited Stock')
        this.$store.dispatch('fetch_cart')
        this.$store.commit('SET_ERRMSG', 'Cannot add item, Limited Stock!')
      } else {
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
            this.$store.dispatch('fetch_cart')
          })
          .catch((err) => {
            console.log(err.response)
            if (err.response) {
              this.$store.commit('SET_ERRMSG', err.response.data.msg)
            }
          })
      }
    },
    decQty () {
      const productId = this.item.ProductId
      console.log(productId)
      server
        .post('cart', {
          productId,
          qty: -1
        }, {
          headers: {
            access_token: localStorage.access_token
          }
        }
        )
        .then(({ data }) => {
          console.log(data)
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
