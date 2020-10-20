import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wishlists: [],
    cart: [],
    isLoggedIn:false,
    userEmail:'fadzim018@gmail.com',
    errMessage: '',
    loginForm:false
  },
  mutations: {
    TOOGLE_LOGINFORM (state) {
      state.loginForm = !state.loginForm
    }
  },
  actions: {
  },
  modules: {
  }
})
