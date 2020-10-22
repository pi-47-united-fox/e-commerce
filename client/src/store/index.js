import Vue from 'vue'
import Vuex from 'vuex'
import product from '../axios/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allDatas: [],
    allCarts: [],
    allIsPaids: [],
    allWishlists: []
  },
  mutations: {
    FETCH_DATA (state, payload) {
      state.allDatas = payload
    },
    FETCH_CARTS (state, payload) {
      state.allCarts = payload
    },
    FETCH_TRANSACTION (state, payload) {
      state.allIsPaids = payload
    },
    FETCH_WISHLIST (state, payload) {
      state.allWishlists = payload
    },
  },
  actions: {
    fetchAll ({ commit }) {
      product
        .get('/product')
        .then(({ data }) => {
          commit('FETCH_DATA', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts ({ commit }) {
      product
        .get('/cart', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          commit('FETCH_CARTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchTransaction ({ commit }) {
      product
        .get('/history', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          commit('FETCH_TRANSACTION', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchWishlist ({ commit }) {
      product
        .get('/wishlist', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          commit('FETCH_WISHLIST', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCarts ({ dispatch }, payload) {
      product
        .post(`/cart/${payload}`, {}, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchCarts')
          router.push({ path: '/cartPage' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addWishlist ({ dispatch }, payload) {
      product
        .post(`/wishlist/${payload}`, {}, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchWishlist')
          router.push({ path: '/wishlistPage' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    minusCarts ({ dispatch }, payload) {
      product
        .post(`/cart/${payload.ProductId}`, {
          quantity: payload.quantity
        }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCarts ({ dispatch }, payload) {
      product
        .delete(`/cart/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteWishlist ({ dispatch }, payload) {
      product
        .delete(`/wishlist/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchWishlist')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkOut ({ dispatch }) {
      product
        .get('/checkout', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login ({ commit }, payload) {
      product
        .post('/login', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ path: '/' })
        })
    },
    register ({ commit }, payload) {
      product
        .post('/register', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          router.push({ path: '/login' })
        })
    },
  },
  modules: {
  }
})
