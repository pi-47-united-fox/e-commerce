import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Product",
    component: Product
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Carts")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && localStorage.access_token) {
    next({ path: '/' })
  } else if (!localStorage.access_token) {
    if (to.name !== 'login' && to.name !== 'register') {
      console.log('masuk sino');
      next({ name: 'login' })

    } else {
      next()
    }
    // console.log('masuk sini');
  } else {
    next()
  }
})
export default router;
