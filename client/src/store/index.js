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
    product_id: ''
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
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: `http://localhost:3000/login`,
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
        url: `http://localhost:3000/register`,
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
        url: 'http://localhost:3000/stocks',
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
        url: 'http://localhost:3000/carts',
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
        url: `http://localhost:3000/carts/${payload.id}`,
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
        url: `http://localhost:3000/carts/${payload.id}`,
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
        url: `http://localhost:3000/carts/${payload.id}`,
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
        url: `http://localhost:3000/carts/${cartId}`,
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
    }
  },
  modules: {
  }
})
