import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    cart: {}, 
    edit: false,
    product_id: '',
    wishes: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload 
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setEdit (state, payload) {
      state.edit = payload.status
      state.product_id = payload.id
    },
    setCart (state, payload) {
      state.cart = payload
    },
    setWishes (state, payload) {
      state.wishes = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: `https://e-commerce-cms-uwu.herokuapp.com/login`,
        data: payload
        })
        .then(({ data }) => {
            localStorage.setItem('access_token', data.access_token)
            router.push({ name: 'Home' })
        })
        .catch(err => {
            console.log(err)
        })
    },
    register (context, payload) {
      axios({
        method: 'post',
        url: `https://e-commerce-cms-uwu.herokuapp.com/register`,
        data: payload
        })
        .then(({ data }) => {
            router.push({ name: 'Login' })
        })
        .catch(err => {
            console.log(err)
        })
    },
    fetchProducts (context) {
      axios({
        url: 'https://e-commerce-cms-uwu.herokuapp.com/stocks',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setProducts', data)
        })
        .catch(console.log)
    },
    fetchCarts (context) {
      axios({
        url: 'https://e-commerce-cms-uwu.herokuapp.com/carts',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setCarts', data)
        })
        .catch(console.log)
    },
    addCart (context, payload) {
      axios({
        method: 'post',
        url: `https://e-commerce-cms-uwu.herokuapp.com/carts/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        // context.commit('setFavorites', data)
        router.push({name: 'Cart'})
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteCart (context, payload) {
      axios({
        method: 'delete',
        url: `https://e-commerce-cms-uwu.herokuapp.com/carts/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // router.push({ name: 'Home' })
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCartById (context, payload) {
      axios({
        method: 'get',
        url: `https://e-commerce-cms-uwu.herokuapp.com/carts/${payload.id}`,
        headers: {
            access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setCart', data)
          console.log(data, 'Cart hasil hit axios fetchCartById')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editCart (context, payload) {
      let cartId = payload.id
      delete payload.id
      axios({
        method: 'put',
        url: `https://e-commerce-cms-uwu.herokuapp.com/carts/${cartId}`,
        data: payload,
        headers: {
            access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setEdit', {id: '', status: false})
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchWishes (context) {
      axios({
        url: 'https://e-commerce-cms-uwu.herokuapp.com/wishlists',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setWishes', data)
        })
        .catch(console.log)
    },
    deleteWish (context, payload) {
      axios({
        method: 'delete',
        url: `https://e-commerce-cms-uwu.herokuapp.com/wishlists/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // router.push({ name: 'Home' })
          context.dispatch('fetchWishes')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addWish (context, payload) {
      axios({
        method: 'post',
        url: `https://e-commerce-cms-uwu.herokuapp.com/wishlists/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
      .then(({data}) => {
        // context.commit('setFavorites', data)
        router.push({name: 'Wishlist'})
      })
      .catch(err => {
        console.log(err)
      })
    },
    checkout (context) {
      axios({
        method: 'put',
        url: `https://e-commerce-cms-uwu.herokuapp.com/carts/checkout`,
        headers: {
            access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
