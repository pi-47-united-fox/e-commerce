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
    wishlist: []
  },
  mutations: {
    UPDATE_QTY_FORM (state, {value, idx}) {
      console.log('selesai edit form')
      state.carts[idx].quantity = value
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
      return localStorage.removeItem('access_token')
    },
    DEC_QUANTITY (state, payload) {
      console.log('masuk commit atas', payload)
      let idxEdited
      state.carts.forEach((c, idx) => {
        if (c.id === payload) {
          console.log('indexnya yaitu', idx)
          idxEdited = idx
        }
      })
      state.carts[idxEdited].quantity += 1
    },
    INC_QUANTITY (state, payload) {
      console.log('masuk commit atas', payload)
      let idxEdited
      state.carts.forEach((c, idx) => {
        console.log('indexnya yaitu', idx)
        if (c.id === payload) {
          idxEdited = idx
        }
      })
      state.carts[idxEdited].quantity += 1
    },
    FETCH_PRODUCTS (state, data) {
      if (localStorage.access_token) {
        state.userLogedIn = true
      } else {
        state.userLogedIn = false
      }
      state.products = data
    },
    FETCH_BANNERS (state, data) {
      state.banners = data
    },
    FETCH_CARTS (state, data) {
      state.carts = data
      let total = 0
      state.carts.forEach(c => {
        // console.log(c)
        total += (c.quantity * c.Product.price)
      })
      console.log('dari fetch cart', total)
      state.totalPay = total
    },
    ADD_CART (state, data) {

    },
    DELETE_CART (state, id) {
      let iRemoved
      state.carts.forEach((el, index) => {
        if (el.id === +id) {
          iRemoved = index
        }
      })
      state.carts.splice(iRemoved, 1)
    },
    EDIT_CART (state, data) {

    },
    FETCH_WISHLIST (state, data) {
      state.wishlist = data
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
          commit('ADD_CART', newCart)
          console.log(newCart)
        })
          .catch(err => {
            console.error(err)
          })
      }
    },
    fetchCarts ({ commit }) {
      console.log('masuk vuex')
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
    updateCart ({commit}, { id, quantity }) {
      return axios.put('/carts/' + id, {
        quantity: quantity
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({data}) => {
        // console.log(data)
        // commit sudah langsung dari seter
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
