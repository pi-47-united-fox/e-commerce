import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import DisplayAll from "../views/DisplayAll.vue";
import DisplayCart from "../views/DisplayCart.vue";
import DisplayHistory from "../views/DisplayHistory.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/home",
		component: Home,
		children: [
			{ path: "", name: "Home", component: DisplayAll },
			{ path: "cart", name: "Cart", component: DisplayCart },
			{ path: "history", name: "History", component: DisplayHistory },
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (!localStorage.getItem("access_token")) {
		to.path === "/" || to.path === "/register" ? next() : next("/");
	} else {
		to.path === "/" || to.path === "/register" ? next("/home") : next();
	}
});

export default router;
