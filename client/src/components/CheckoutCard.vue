<template>
  <div class="mb-4">
      <v-card>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="product.name"></v-card-title>

            <v-card-subtitle bold>Rp {{ product.price }}</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ml-2 mt-3" icon @click="deleteCart">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
              <!-- <v-btn class="ml-2 mt-3" icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
              <v-spacer></v-spacer>
              <!-- <v-btn class="ml-2 mt-3" icon @click="minQuantity">
                <v-icon>mdi-minus</v-icon>
              </v-btn> -->
                <v-text-field
                    :rules="minMaxRules"
                    v-model="quantity"
                    type="number"
                    placeholder="Quantity"
                    @blur="editQtyCart"
                ></v-text-field>
              <!-- <v-btn class="ml-2 mt-3" icon @click="addQuantity">
                <v-icon>mdi-plus</v-icon>
              </v-btn> -->
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="product.image_url"></v-img>
          </v-avatar>
        </div>
      </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      minMaxRules: [
        v => !!v || 'This field is required',
        v => (v && v > 0) || 'gak bisa beli barang jumlah minus',
        v => (v && v < this.product.stock) || 'Produk terbatas, jumlah permintaan terlalu banyak'
      ]
    }
  },
  props: ['product', 'cart', 'idx'],
  computed: {
    errorInputCart () {
      return this.$store.state.errorInputCart
    },
    quantity: {
      // return this.$store.state.carts[this.idx].quantity
      get () {
        return this.$store.state.carts[this.idx].quantity
      },
      set (value) {
        this.$store.commit('UPDATE_QTY_FORM', {
          value: value,
          idx: this.idx
        })
      }
    }
  },
  methods: {
    deleteCart () {
      this.$store.dispatch('deleteCart', this.cart.id)
    },
    minQuantity () {
      console.log('dari methos', this.cart.id)
      this.$store.commit('DEC_QUANTITY', this.cart.id)
    },
    addQuantity () {
      // console.log('quantity tambah 1')
      this.$store.commit('INC_QUANTITY', this.cart.id)
    },
    editQtyCart () {
      // console.log ('masuk sini tinggal kirim ke action', this.quantity)
      this.$store.dispatch('updateCart', {
        id: this.cart.id,
        ProductId: this.cart.ProductId,
        quantity: this.quantity
      }).then(() => {
        this.$store.dispatch('fetchCarts')
      })
    }
  },
  created () {
    // console.log(this.cart)
  },
  updated () {
    // console.log(this.quantity)
  }
}
</script>

<style></style>>
