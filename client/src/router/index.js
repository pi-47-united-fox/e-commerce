import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Agama from '../views/Agama'
import Fiksi from '../views/Fiksi'
import Hukum from '../views/Hukum'
import Komik from '../views/Komik'
import Pendidikan from '../views/Pendidikan'
import Psikologi from '../views/Psikologi'
import Sejarah from '../views/Sejarah'
import Teknologi from '../views/Teknologi'
import Carts from '../views/Carts'
import History from '../views/History'

Vue.use(VueRouter)

const routes = [{
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
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/agama',
  name: 'Agama',
  component: Agama
},
{
  path: '/fiksi',
  name: 'Fiksi',
  component: Fiksi
},
{
  path: '/hukum',
  name: 'Hukum',
  component: Hukum
},
{
  path: '/komik',
  name: 'Komik',
  component: Komik
},
{
  path: '/pendidikan',
  name: 'Pendidikan',
  component: Pendidikan
},
{
  path: '/psikologi',
  name: 'Psikologi',
  component: Psikologi
},
{
  path: '/sejarah',
  name: 'Sejarah',
  component: Sejarah
},
{
  path: '/teknologi',
  name: 'Teknologi',
  component: Teknologi
},
{
  path: '/carts',
  name: 'Carts',
  component: Carts
},
{
  path: '/history',
  name: 'History',
  component: History
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ '../views/About.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) next({ name: 'Carts' })
  else if (to.name === 'Carts' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.access_token) next({ name: 'History' })
  else if (to.name === 'History' && !localStorage.access_token) next({ name: 'Login' })
  else if (to.name === 'Register' && localStorage.access_token) next({ name: 'Carts' })
  else next()
})

export default router
