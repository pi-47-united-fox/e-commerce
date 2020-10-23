import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../config/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    FETCH_DATA(state, payload) {
      state.products = payload
    },
    SET_CART(state, payload) {
      state.carts = payload
    },
  },
  actions: {
    login(context, payload) {
      const { email, password } = payload
      console.log(payload, '<---ini payload login store')
      Axios({
        method: 'POST',
        url: '/login',
        data: {
          email: email,
          password: password
        }
      })
        .then(({ data }) => {
          console.log(data, '<---ini data di login store')
          localStorage.setItem('access_token', data.access_token)
          context.dispatch('fetchData')
          router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchData(context) {
      // console.log('ini fetch data')
      Axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCH_DATA', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchCarts({ commit }) {
      Axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data);
          commit('SET_CART', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart({ commit }, payload) {
      // console.log(id, 'id di addtocart store')
      Axios({
        method: 'POST',
        url: `/carts/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          price: payload.price
        }
      })
        .then(({ data }) => {
          console.log(data);
          console.log(data, 'ini add tocard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteFromCart({ commit }, id) {
      Swal.fire({
        title: 'Are you sure want to delete this item?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then(() => {
        Axios({
          method: 'DELETE',
          url: `/carts/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({ data }) => {
            console.log(data, 'ini delete di store')
            commit('SET_DELETE_CART', data)
            this.dispatch('fetchCarts')
            Swal.fire('', 'Successfull deleted', 'success')
            return data
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    updateCart({ dispatch }, payload) {
      Axios({
        method: 'PUT',
        url: `/carts/${id}${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then(({ data }) => {
          dispatch('fetchCarts')
          return data
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout({ commit }) {
      Swal.fire({
        title: 'Are you sure to logout?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, let me logout!'
      }).then((result) => {
        if (result.value) {
          localStorage.clear()
          commit('SET_LOGIN', false)
          Swal.fire('Bye', "You've been signed out", 'success')
        }
      })
    },
    register(context, payload) {
      console.log('ini di register', payload);
      Axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          // console.log(data.email)
          Swal.fire(
            'Successfully Register!',
            'Please click login instead anchor!',
            'success'
          )
          router.push('/login')

        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
