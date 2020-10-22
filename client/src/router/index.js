import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/RegisterPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !localStorage.getItem('access_token')) next({ name: 'Login' })
//   else next()
// })

// router.beforeEach((to, from, next) => {
//   if (to.name === 'Login' && localStorage.getItem('access_token')) next({ name: 'Home' })
//   else next()
// })

export default router
