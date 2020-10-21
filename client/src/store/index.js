import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: []
  },


  // MUTATIONS
  mutations: {
    LOGIN (state, payload) {
      state.isLogin = true
    },

    LOGOUT (state, payload) {
      state.isLogin = false
    },

    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    }
  },

  // ACTIONS
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('LOGIN', payload)
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
        .then(() => {
          this.email = ''
          this.password = ''
        })
    },

    register (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: payload
      })
        .then(({ data }) => {
          router.push({ path: '/login' })
        })
        .catch(err => {
          console.log(err)
        })
        .then(() => {
          this.email = ''
          this.password = ''
        })
    },

    

    logout (context, payload) {
      localStorage.removeItem('access_token')
      context.commit('LOGOUT')
      router.push({ path: '/login' })
    },

    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    }


  },
  modules: {
  }
})
