import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    dataProduct:[],
    dataCart:[]
  },
  mutations: {
    SUCCESS_LOGIN(state,payload){
      state.isLogin = true
    },
    ON_LOGOUT(state,payload){
      state.isLogin = false
      localStorage.clear()
      router.push({path:'/login'})
    },
    SET_DATA_PRODUCT(state,payload){
      state.dataProduct = payload
    },
    SET_DATA_CART(state,payload){
      state.dataCart = payload
    }
  },
  actions: {
    ON_SUBMIT_LOGIN({commit},payload){
      axios.post('/login',payload)
        .then(({data})=>{
          localStorage.setItem('access_token',data.access_token)
          commit('SUCCESS_LOGIN')
          router.push({path:'/'})
        })
        .catch(err=>{
          console.log(err.response.data)
        })
    },
    ON_SUBMIT_REGISTER({commit},payload){
      axios.post('/register',payload)
        .then(()=>{
          router.push({path:'/login'})
        })
        .catch(err=>{
          console.log(err)
        })
    },
    GET_DATA_PRODUCT({commit},payload){
      axios.get('/product', {
        headers:{
          access_token:localStorage.access_token
        }
      })
      .then(({data})=>{
        commit('SET_DATA_PRODUCT', data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    GET_DATA_CART({commit},payload){
      axios.get('/cart', {
        headers : {
          access_token:localStorage.access_token
        }
      })
      .then(({data})=>{
        commit('SET_DATA_CART', data.cart)
      })
      .catch(err=>{
        console.log(err)
      })
    },
    ADD_CART({commit},payload){
      axios.post('/cart',{
        ProductId:payload
      },{
        headers:{
          access_token:localStorage.access_token
        }
      })
      .then(result=>{

      })
      .catch(err=>{
        console.log(err)
      })
    },
    UPDATE_CART({dispatch},payload){
      axios.patch(`/cart/${payload.id}`,{
        quantity:payload.quantity
      },{
        headers:{
          access_token:localStorage.access_token
        }
      })
      .then(result=>{
        dispatch('GET_DATA_CART')
      })
      .catch(err=>{
        console.log(err)
      })
    },
    DELETE_CART({dispatch},payload){
      axios.delete(`/cart/${payload.id}`,{
        headers:{
          access_token:localStorage.access_token
        }
      })
      .then(()=>{
        dispatch('GET_DATA_CART')
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  modules: {
  }
})
