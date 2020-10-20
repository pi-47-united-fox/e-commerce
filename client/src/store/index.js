import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogedIn: true,
    products: [],
    banners: [],
    carts: [],
    wishlist: []
  },
  mutations: {
    LOGIN (state, token) {
      state.userLogedIn = true
      localStorage.setItem('access_token', token)
    },
    REGISTER (state, token) {
      state.userLogedIn = true
      localStorage.setItem('access_token', token)
    },
    LOGOUT () {
      state.userLogedIn = false
      return localStorage.removeItem('access_token')
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
    },
    ADD_CART (state, data) {

    },
    DELETE_CART (state, date) {

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
    }
  },
  modules: {
  }
})
