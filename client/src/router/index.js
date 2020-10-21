import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CartPage from '../views/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cartPage',
    name: 'CartPage',
    component: CartPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from, next) => {
//   if (to.name === 'Login' && localStorage.access_token) {
//     next({path: '/'})
//   }
//   else if (to.name === 'Register' && localStorage.access_token) {
//     next({path: '/'})
//   }
//   else if (to.name !== 'Register' && !localStorage.access_token) {
//     next({ path: '/register' })
//   } 
//   // else if (to.name !== 'Register' && !localStorage.access_token) {
//   //   next({ path: '/login' })
//   // } 
//   else {
//     next()
//   }
// })

export default router
