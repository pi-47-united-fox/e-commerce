<template>
    <div class="container">
        <div class="row text-left ml-2 mt-2">
            <p class="">Home > Cart</p>
        </div>
        <hr>
        <h2>Your Cart</h2>
        <div class="row">
            <div
              class="alert col-12 alert-warning alert-dismissible fade show"
              v-if="errMessage.length > 1"
              role="alert"
            >
              {{ errMessage }}
              <button
                type="button"
                class="close"
                @click="closeAlert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="col-12 bg-light">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RowCart
                        v-for="(item, i) in cart"
                        :item="item"
                        :key="item.ProductId"
                        :count="i"
                        />
                        <tr>
                            <td colspan="4">
                            </td>
                            <td >
                                Total : Rp. {{totalPayment.toLocaleString('id')}}
                            </td>
                            <td>
                                <button @click="checkout" class="btn btn-warning pl-5 pr-5 pt-2 pb-2">
                                    Checkout
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    </table>

            </div>
        </div>
    </div>
</template>

<script>
import server from '@/api/server'
import RowCart from '@/components/RowCart.vue'
export default {
  name: 'Cart',
  components: {
    RowCart
  },
  data () {
    return {
      // errMessage:''
    }
  },
  methods: {
    closeAlert () {
      this.$store.commit('CLEAR_ERRMSG')
    },
    checkout () {
      server
        .get('checkout', {
          headers: {
            access_token: localStorage.access_token
          }
        }
        )
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('fetch_all')
        })
        .catch((err) => {
          console.log(err.response)
          if (err.response) {
            this.$store.commit('SET_ERRMSG', err.response.data.msg)
          }
        })
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    totalPayment () {
      let total = 0
      this.cart.forEach(element => {
        total += element.quantity * element.Product.price
      })
      return total
    },
    errMessage () {
      return this.$store.state.errMessage
    }
  },
  destroyed () {
    this.closeAlert()
  }

}
</script>

<style scoped>

.sidebar {
    background-image: url('../assets/wishlist-logo-2.png') ;
    background-size: cover;
    background-position: center;
    background-repeat: repeat-y;
    min-height: 213px;

}
.container {
    min-height: 65vh;
}
</style>
