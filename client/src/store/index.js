import Vue from 'vue'
import Vuex from 'vuex'
import product from '../axios/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allDatas: [],
    allCarts: []
  },
  mutations: {
    FETCH_DATA (state, payload) {
      state.allDatas = payload
    },
    FETCH_CARTS (state, payload) {
      state.allCarts = payload
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
  },
  modules: {
  }
})
