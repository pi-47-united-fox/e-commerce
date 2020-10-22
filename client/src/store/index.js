import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    myCart: [],
    myTransaction: [],
    myWishlist: []
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
    },

    GET_MY_CART (state, payload) {
      state.myCart = payload
    },

    GET_MY_TRANSACTION(state, payload) {
      state.myTransaction = payload
    },

    GET_MY_WISHLIST(state, payload) {
      state.myWishlist = payload
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
    },

    getMyCart (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/mycart',
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        context.commit('GET_MY_CART', data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    addToMyCart(context, payload) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/carts/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        console.log("success")
        router.push({ path: '/checkout' })
      })
      .catch(err => {
        console.log(err)
      })
    },

    removeFromMyCart(context, payload) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/carts/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        console.log("success")
        context.dispatch("getMyCart")
        
      })
      .catch(err => {
        console.log(err)
      })
    },

    checkout(context, payload) {
      axios({
        method: 'PUT',
        url: 'http://localhost:3000/checkout',
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        console.log("success")
        router.push({ path: '/' })
      })
      .catch(err => {
        console.log(err)
      })
    },

    getMyTransaction(context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/transactions',
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        context.commit('GET_MY_TRANSACTION', data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    getMyWishlist(context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/wishlists',
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        context.commit('GET_MY_WISHLIST', data)
      })
      .catch(err => {
        console.log(err)
      })
    },

    addToCartFromWishlist(context, payload) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/wishlists/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        console.log("success")
        router.push({ path: '/checkout' })
      })
      .catch(err => {
        console.log(err)
      })
    },

    addToMyWishlist(context, payload) {
      axios({
        method: 'POST',
        url: `http://localhost:3000/wishlists/${payload}`,
        headers: { access_token: localStorage.access_token }
      })
      .then(({ data }) => {
        console.log("success")
        router.push({ path: '/wishlists' })
      })
      .catch(err => {
        console.log(err)
      })
    }



  },
  modules: {
  }
})
