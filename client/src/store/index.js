import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogedIn: false,
    totalPay: 0,
    errorInputCart: false,
    products: [],
    banners: [],
    carts: [],
    cartsUnpaid: [],
    loved: []
  },
  mutations: {
    UPDATE_QTY_FORM (state, { value, idx }) {
      console.log('selesai edit form')
      // if (value > state.carts[idx].quantity) {
      //   state.totalPay += (product.price * value)
      // } else {
      // }
      state.carts[idx].quantity = value
      // let product = state.products.filter ( e => {
      //   return e.id === state.carts[idx].ProductId
      // })
    },
    LOGIN (state, token) {
      state.userLogedIn = true
      localStorage.setItem('access_token', token)
    },
    REGISTER (state, token) {
      state.userLogedIn = true
      localStorage.setItem('access_token', token)
    },
    LOGOUT (state) {
      state.userLogedIn = false
      state.loved = []
      state.cartsUnpaid = []
      state.carts = []
      state.totalPay = []
      return localStorage.removeItem('access_token')
    },
    // DEC_QUANTITY (state, payload) {
    //   console.log('masuk commit atas', payload)
    //   let idxEdited
    //   state.carts.forEach((c, idx) => {
    //     if (c.id === payload) {
    //       console.log('indexnya yaitu', idx)
    //       idxEdited = idx
    //     }
    //   })
    //   state.carts[idxEdited].quantity += 1
    // },
    // INC_QUANTITY (state, payload) {
    //   console.log('masuk commit atas', payload)
    //   let idxEdited
    //   state.carts.forEach((c, idx) => {
    //     console.log('indexnya yaitu', idx)
    //     if (c.id === payload) {
    //       idxEdited = idx
    //     }
    //   })
    //   state.carts[idxEdited].quantity += 1
    // },
    FETCH_PRODUCTS (state, data) {
      state.carts = []
      if (localStorage.access_token) {
        state.userLogedIn = true
      } else {
        state.userLogedIn = false
      }
      state.products = data
    },
    FETCH_BANNERS (state, data) {
      const activeBanners = []
      data.forEach(e => {
        if (e.isActive === true) {
          activeBanners.push(e)
        }
      })
      state.banners = activeBanners
    },
    FETCH_CARTS (state, data) {
      console.log('masuk carts atas')
      const waitingCarts = []
      const unpaidCarts = []
      let total = 0
      data.forEach(c => {
        console.log('dari carts loop', c)
        if (c.status === 'waiting') {
          total += (c.quantity * c.Product.price)
          console.log('masuk sini')
          waitingCarts.push(c)
        } else {
          unpaidCarts.push(c)
        }
      })
      state.carts = waitingCarts
      state.cartsUnpaid = unpaidCarts
      // console.log('dari fetch cart', total)
      state.totalPay = total
    },
    DELETE_CART (state, id) {
      let iRemoved
      let total = 0
      state.carts.forEach((el, index) => {
        if (el.id === +id) {
          total = (el.quantity * el.Product.price)
          iRemoved = index
        }
      })
      state.totalPay -= total
      state.carts.splice(iRemoved, 1)
    },
    FETCH_WISHLIST (state, data) {
      state.loved = data
      console.log(state.loved)
    },
    CHEKOUT (state) {
      state.carts = []
      state.totalPay = 0
    },
    DELETE_WISHLIST (state, id) {
      let iRemoved
      state.carts.forEach((el, index) => {
        if (el.id === +id) {
          iRemoved = index
        }
      })
      state.loved.splice(iRemoved, 1)
    }
  },
  actions: {
    login ({ commit }, input) {
      /**
       * @note @input berbentuk object
       */
      return axios
        .post('/login', {
          email: input.email,
          password: input.password
        }).then(({ data }) => {
          commit('LOGIN', data.access_token)
        }).catch(err => {
          return err
        })
    },
    register ({ commit }, input) {
      /**
       * @note @input berbentuk object
       */
      return axios
        .post('/register', {
          email: input.email,
          password: input.password
        }).then(({ data }) => {
          console.log(data)
          commit('REGISTER', data.access_token)
        }).catch(err => {
          return err
        })
    },
    fetchProducts ({ commit }) {
      console.log('masuk vuex')
      return axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        }).then(({ data: products }) => {
          console.log(products)
          commit('FETCH_PRODUCTS', products)
        }).catch(err => {
          console.error(err)
        })
    },
    addToCart ({ commit }, idProduct) {
      if (!localStorage.access_token) {
        return 'to register or login'
      } else {
        return axios.post('/carts/' + idProduct, {}, {
          headers: {
            access_token: localStorage.access_token
          }
        }).then(({ data: newCart }) => {
          // commit('ADD_CART', newCart)
          console.log('selesai add', newCart)
        })
          .catch(err => {
            console.error(err)
          })
      }
    },
    fetchBanners ({ commit }) {
      // console.log('masuk vuex')
      return axios
        .get('/banners', {
          headers: {
            access_token: localStorage.access_token
          }
        }).then(({ data: banners }) => {
          console.log('selesai sudah banner', banners)
          commit('FETCH_BANNERS', banners)
        }).catch(err => {
          console.error(err)
        })
    },
    fetchCarts ({ commit }) {
      // console.log('masuk vuex')
      return axios
        .get('/carts', {
          headers: {
            access_token: localStorage.access_token
          }
        }).then(({ data: carts }) => {
          console.log(carts)
          commit('FETCH_CARTS', carts)
        }).catch(err => {
          console.error(err)
        })
    },
    deleteCart ({ commit }, id) {
      console.log('masuk vuex id cart ayng mau di delete', id)
      return axios
        .delete('/carts/' + id, {
          headers: {
            access_token: localStorage.access_token
          }
        }).then(({ data: carts }) => {
          // console.log(carts)
          commit('DELETE_CART', id)
        }).catch(err => {
          console.log(err)
        })
    },
    updateCart ({ commit }, { id, quantity, ProductId }) {
      return axios.put('/carts/' + id, {
        ProductId: ProductId,
        quantity: quantity
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        // console.log(data)
        // commit sudah langsung dari seter
      })
        .catch(err => {
          console.log(err)
        })
    },
    checkout ({ commit, state }) {
      return axios({
        method: 'patch',
        url: '/carts/checkout',
        headers: {
          access_token: localStorage.access_token
        }
      }).then((result) => {
        commit('CHEKOUT')
        console.log(result)
      }).catch((err) => {
        console.log(err)
      })
    },
    fetchWishlist ({ commit }) {
      axios.get('/wishlist', {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        commit('FETCH_WISHLIST', data)
      }).catch(err => {
        console.error(err)
      })
    },
    addToWishlist ({ commit }, id) {
      if (!localStorage.access_token) {
        return 'to register or login'
      } else {
        return axios.post('/wishlist/' + id, {}, {
          headers: {
            access_token: localStorage.access_token
          }
        }).then(({ data: newWishlist }) => {
          console.log('added new wishlist', newWishlist)
          // commit('ADD', newWishlist)
        }).catch(err => {
          console.error(err)
        })
      }
    },
    deleteWishlist ({ commit }, id) {
      axios.delete('/wishlist/' + id, {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(res => {
        commit('DELETE_WISHLIST', id)
      }).catch(err => {
        console.error(err)
      })
    }

  },
  modules: {
  }
})
