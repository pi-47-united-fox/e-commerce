import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    carts: []
  },
  mutations: {
    STATE_LOGIN (state, payload) {
      state.isLogin = true
    },
    STATE_LOGOUT (state, payload) {
      state.isLogin = false
      localStorage.clear()
      router.push('login')
    },
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    FETCH_CARTS (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        methods: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('STATE_LOGIN')
          router.push('/')
        })
        .catch(err => {
          swal('Sorry!', 'Invalid Email / Password, Please check again or Sign Up first!', 'error')
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/users/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('login')
        })
        .catch(err => {
          swal('Sorry!', 'Email Already Registered, Please try another email', 'error')
          console.log(err)
        })
    },
    fetchCart (context) {
      axios({
        methods: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCH_CARTS', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    editCart (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'PATCH',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
          swal('Success!', 'Quantity Updated', 'success')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
          swal('Success!', 'Product Removed from Cart', 'success')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          router.push('/carts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
