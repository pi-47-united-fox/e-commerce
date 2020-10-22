import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    carts: [],
    detailCart: []
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.players = payload
    },
    FETCH_CARTS (state, payload) {
      state.carts = payload
    },
    DETAIL_CART (state, payload) {
      state.detailCart = payload
    },

  },
  actions: {
    register(context, payload) {
      Axios
      .post('http://localhost:3000/register', {
        email: payload.email,
        password: payload.password
      })
      .then(({data})=> {
      })
      .catch(err=> {
        console.log(err)
      })
    },
    login(context, payload) {
      Axios
      .post('http://localhost:3000/login',{
        email: payload.email,
        password: payload.password
      })
      .then(({data})=> {
        localStorage.setItem('access_token', data.access_token)
      })
      .catch(err=> {
        console.log(err)
      })
    },
    fetchProducts ({ commit }) {
      Axios
        .get('http://localhost:3000/products', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts ({ commit }) {
      Axios
        .get('http://localhost:3000/cart', {
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
    addToCart (context, payload) {
      console.log(payload)
      Axios
        .get(`http://localhost:3000/cart/${payload}`,  {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      Axios
        .delete(`http://localhost:3000/cart/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deletePlayer (context, payload) {
      console.log('sdd')
      Axios
        .delete(`http://localhost:3000/cart/product/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
        })
        .catch(err => {
          console.log(err)
        })
    },
    detailCart({commit}, payload) {
      commit('DETAIL_CART', payload)
    }
  },
  modules: {
  }
})
