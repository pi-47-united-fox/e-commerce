import Vue from 'vue'
import Vuex from 'vuex' 
import server from '@/api/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlists: [],
    cart: [],
    isLoggedIn:false,
    userEmail:'',
    errMessage: '',
    loginForm:false,
    banners: [],
    products: [],
    categories: [],
    wishlists: [],
    cart: []
  },
  mutations: {
    SET_USEREMAIL (state, payload) {
      state.userEmail = payload
    },
    SET_ERRMSG (state, payload) {
      state.errMessage = payload
    },
    CLEAR_ERRMSG (state, payload) {
      state.errMessage = ''
    },
    TOOGLE_LOGINFORM (state) {
      state.loginForm = !state.loginForm
    },
    TOOGLE_LOGGEDIN (state) {
      state.isLoggedIn = !state.isLoggedIn
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
    FETCH_WISHLISTS (state, payload) {
      state.wishlists = payload
    },
    FETCH_CART (state, payload) {
      state.cart = payload
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
    fetch_wishlists (context) {
      server
        .get('/wishlists',{
          headers: {
            access_token:localStorage.access_token
          }
        })
        .then(result => {
          console.log(result.data)
          context.commit('FETCH_WISHLISTS', result.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetch_cart (context) {
      server
        .get('/carts',{
          headers: {
            access_token:localStorage.access_token
          }
        })
        .then(result => {
          console.log(result.data)
          context.commit('FETCH_CART', result.data.carts)
          context.commit('SET_USEREMAIL', result.data.userEmail)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetch_all ({dispatch}) {
      dispatch('fetch_banners')
      dispatch('fetch_categories')
      dispatch('fetch_products')
      dispatch('fetch_wishlists')
      dispatch('fetch_cart')
    }
  },
  modules: {
  }
})
