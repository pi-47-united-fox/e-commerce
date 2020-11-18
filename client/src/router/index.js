import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import(/* webpackChunkName: "transactions" */ '../views/Transactions.vue')
  },
  {
    path: '/wishlists',
    name: 'Wishlists',
    component: () => import(/* webpackChunkName: "transactions" */ '../views/Wishlists.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/' && !localStorage.getItem('access_token')) {
    next({ path: '/login' })
  } else if (to.path === '/register' && !localStorage.getItem('access_token')) {
    next()
  } else if (to.path === '/login' && localStorage.getItem('access_token')) {
    next({ path: '/' })
  } else if (to.path !== '/login' && !localStorage.getItem('access_token')) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
