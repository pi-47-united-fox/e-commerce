<template>
    <div class="container">
        <div class="row text-left ml-2 mt-2">
            <p class="">Home > Cart</p>
        </div>
        <hr>
        <h2>Your Purchase History</h2>
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
                        <th scope="col">Total</th> 
                        <th scope="col">Purchase Date</th> 
                        </tr>
                    </thead>
                    <tbody> 
                        <tr 
                        v-for="(item,i) in history" 
                        :key="i"
                        >
                          <td>{{i+1}}</td>
                          <td>
                            <img :src="item.Product.image_url" style="max-height:150px" width="150px" alt="">
                          </td>
                          <td>
                            {{item.Product.name}}
                          </td>
                          <td>
                            Rp. {{item.Product.price.toLocaleString('id')}}
                          </td>
                          <td>{{item.quantity}}</td>
                          <td>Rp. {{(item.quantity*item.Product.price).toLocaleString('id')}}</td>
                          <td>
                            {{(new Date(item.updatedAt)).toLocaleString('id')}}
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
export default {
  name: 'History',
  components: { 
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
  },
  computed: {
    history () {
      return this.$store.state.history
    }, 
    errMessage () {
      return this.$store.state.errMessage
    }
  },
  created () { 
    console.log("fetching");
    this.$store.dispatch('fetch_history')
  },


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
