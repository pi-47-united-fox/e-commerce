import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import(/* webpackChunkName: "wishlist" */ '../views/Wishlist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach ((to, from, next) => {
  if((to.name === 'Login') && localStorage.access_token){
    next({path:'/home'})
  }
  else if((to.name === 'Register') && localStorage.access_token){
    next({path:'/home'})
  }
  else if((to.name === 'Home') && !localStorage.access_token){
    next({path:'/'})
  }
  else if((to.name === 'Cart') && !localStorage.access_token){
    next({path:'/'})
  }
  else if((to.name === 'Wishlist') && !localStorage.access_token){
    next({path:'/'})
  }
  else{
    next()
  }
})

export default router
