import Vue from 'vue'
import Vuex from 'vuex' 
import server from '@/api/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlists: [],
    cart: [],
    isLoggedIn:false,
    userEmail:'fadzim018@gmail.com',
    errMessage: '',
    loginForm:false,
    banners: [],
    products: [],
    categories: []
  },
  mutations: {
    TOOGLE_LOGINFORM (state) {
      state.loginForm = !state.loginForm
    },
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    FETCH_BANNERS (state, payload) {
      state.banners = payload
    },
    FETCH_CATEGORIES (state, payload) {
      state.categories = payload
    },
  },
  actions: {
    fetch_products (context) {
      server
        .get('/products')
        .then(result => {
          console.log(result.data)
          context.commit('FETCH_PRODUCTS', result.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetch_categories (context) {
      server
        .get('/categories')
        .then(result => {
          console.log(result.data)
          context.commit('FETCH_CATEGORIES', result.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetch_banners (context) {
      server
        .get('/banners')
        .then(result => {
          console.log(result.data)
          context.commit('FETCH_BANNERS', result.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
  },
  modules: {
  }
})
