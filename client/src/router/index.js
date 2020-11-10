import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",

    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/cart",
    name: "Cart",

    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "/wishlist",
    name: "Whishlist",

    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Wishlist.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    (to.name === "Login" || to.name === "Register") &&
    localStorage.access_token
  ) {
    next({ path: "/" });
  } else if (!localStorage.access_token) {
    if (to.name !== "Home") {
      next();
    } else {
      next({ path: "/login" });
    }
  } else next();
});

export default router;
