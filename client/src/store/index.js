import Vue from "vue";
import Vuex from "vuex";
import axios from '../config/axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: '',
    carts: ''
  },
  mutations: {
    'FECTH-PRODUCT'(state, data) {
      state.products = data
    },
    'FECTH-CART'(state, data) {
      state.carts = data
    }
  },
  actions: {
    login({ commit }, payload) {

      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
    },
    register({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })


    },
    fecthProduct({ commit }) {
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
      })
        .then(({ data }) => {
          commit('FECTH-PRODUCT', data)
        }).catch((err) => {
          console.log(err.response);
        });
    },
    fecthCart({ commit }) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('FECTH-CART', data)
        }).catch((err) => {
          console.log(err.response)
        });
    },
    addToCart({ commit }, payload) {
      console.log(payload);
      return axios({
        method: 'POST',
        url: `/cart/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          qty: payload.qty
        }
      })

    },
    updateCart({ commit }, payload) {
      return axios({
        method: 'PUT',
        url: `/cart/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          qty: payload.qty
        }
      })
    },
    deleteProduct({ commit }, id) {
      console.log(id);
      return axios({
        method: 'DELETE',
        url: `/cart/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }

  },
  modules: {}
});
