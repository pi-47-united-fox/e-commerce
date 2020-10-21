import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios/axiosInstance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    FETCH_PRODUCTS(state, payload) {
      this.state.products = payload;
    }
  },
  actions: {
    login(context, payload) {
      axios({
        method: "POST",
        url: "http://localhost:3000/login",
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("userName", data.username);
          // context.dispatch("fetchProduct");
        })
        .catch(err => {
          console.log(err, "err login");
        });
    },
    register(context, payload) {
      axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: payload
      })
        .then(({ data }) => {
          console.log(data, "registerdata");
          // context.dispatch("fetchProduct");
        })
        .catch(err => {
          console.log(err, "err register");
        });
    },
    fetchProducts(context, payload) {
      axios({
        method: "GET",
        url: "http://localhost:3000/products",
        data: payload
      })
        .then(({ data }) => {
          console.log(data, "success fetch");
          context.commit("FETCH_PRODUCTS", data);
        })
        .catch(err => {
          console.log(err, "err fetch product");
        });
    }
  },

  modules: {}
});
