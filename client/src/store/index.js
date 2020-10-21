import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios/axiosInstance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    wishlist: []
  },
  mutations: {
    FETCH_PRODUCTS(state, payload) {
      this.state.products = payload;
    },
    FETCH_CARTS(state, payload) {
      this.state.carts = payload;
    },
    FETCH_WISHLIST(state, payload) {
      this.state.wishlist = payload;
    },
    ADD_CART(state, payload) {
      this.$state.carts = payload;
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
          localStorage.setItem("UserID", data.iduser);
          // localStorage.setItem("UserId", data.UserID);
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
    },

    fetchCart(context, payload) {
      axios({
        method: "GET",
        url: "http://localhost:3000/carts",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          console.log(data, "success fetch cart");
          context.commit("FETCH_CARTS", data);
        })
        .catch(err => {
          console.log(err, "err fetch product");
        });
    },
    // http://localhost:3000/carts/34
    deleteCart(context, payload) {
      axios({
        method: "DELETE",
        url: `http://localhost:3000/carts/${payload}`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          console.log(data, "success delete cart");
          context.dispatch("fetchCart");
        })
        .catch(err => {
          console.log(err, "err delete cart");
        });
    },

    addToCart(context, payload) {
      axios({
        method: "POST",
        url: `http://localhost:3000/carts/${payload.ProductId}`,
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: payload
      })
        .then(({ data }) => {
          console.log(data, "success add cart");
          context.commit("ADD_CART", data);
          context.dispatch("fetchCart");
        })
        .catch(err => {
          console.log(err, "err delete cart");
        });
    },

    editQuantity(context, payload) {
      axios({
        method: "PATCH",
        url: `http://localhost:3000/carts/${payload.id}`,
        headers: {
          access_token: localStorage.getItem("access_token")
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then(({ data }) => {
          console.log(data, "success edit cart");
          // context.commit("EDIT", data);
          context.dispatch("fetchCart");
        })
        .catch(err => {
          console.log(err, "err edit cart qty");
        });
    }
  },

  modules: {}
});
