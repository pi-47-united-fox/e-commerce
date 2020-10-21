import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		display_name: "",
		products: [],
		cart: [],
		history: [],
	},
	mutations: {
		SET_DISPLAY_NAME(state) {
			state.display_name = localStorage.getItem("display_name");
		},
		GET_PRODUCTS(state, payload) {
			state.products = payload;
		},
		GET_CART(state, payload) {
			state.cart = payload;
		},
		GET_HISTORY(state, payload) {
			state.history = payload;
		},
	},
	actions: {
		postLogin(context, payload) {
			axios({
				method: "POST",
				url: "http://localhost:3000/users/login",
				headers: {
					"Content-type": "application/json",
				},
				data: payload,
			})
				.then((result) => {
					if (result.status === 201) {
						localStorage.setItem("access_token", result.data.access_token);
						localStorage.setItem("display_name", result.data.display_name);
						context.commit("SET_DISPLAY_NAME");
						router.push({ path: "/home" });
					} else {
						Swal.fire("Oops...", "Wrong Password/Email", "error");
					}
				})
				.catch(() => {
					Swal.fire("Oops...", "Wrong Password/Email", "error");
				});
		},

		postRegister(context, payload) {
			payload.is_admin = false;
			console.log(payload);
			axios({
				method: "POST",
				url: "http://localhost:3000/users/register",
				headers: {
					"Content-type": "application/json",
				},
				data: payload,
			})
				.then((result) => {
					if (result.status === 201) {
						router.push({ path: "/" });
					} else {
						console.log("Failed to create Account");
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},

		getAllProducts(context) {
			axios({
				method: "GET",
				url: "http://localhost:3000/products",
				headers: { access_token: localStorage.access_token },
			})
				.then((result) => {
					if (result.status === 200) {
						context.commit("GET_PRODUCTS", result.data);
					} else {
						console.log(result);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},

		getAllCart(context) {
			axios({
				method: "GET",
				url: "http://localhost:3000/cart",
				headers: { access_token: localStorage.access_token },
			})
				.then((result) => {
					if (result.status === 200) {
						context.commit("GET_CART", result.data);
					} else {
						console.log(result);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},

		addToCart(context, payload) {
			axios({
				method: "POST",
				url: "http://localhost:3000/cart",
				headers: { "Content-type": "application/json", access_token: localStorage.access_token },
				data: payload,
			})
				.then((result) => {
					if (result.status === 201) {
						router.push("/home/cart");
					} else {
						console.log(result);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},

		deleteFromCart(context, id) {
			axios({
				method: "DELETE",
				url: `http://localhost:3000/cart/${id}`,
				headers: { access_token: localStorage.access_token },
			})
				.then((result) => {
					if (result.status === 200) {
						context.dispatch("getAllCart");
					} else {
						console.log(result);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},

		updateQuantity(context, payload) {
			axios({
				method: "PATCH",
				url: `http://localhost:3000/cart/${payload.id}`,
				headers: { "Content-type": "application/json", access_token: localStorage.access_token },
				data: {
					quantity: payload.quantity,
				},
			})
				.then((result) => {
					if (result.status === 200) {
						context.dispatch("getAllCart");
					} else {
						console.log(result);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},

		checkOut() {
			axios({
				method: "PATCH",
				url: `http://localhost:3000/checkout`,
				headers: { access_token: localStorage.access_token },
			})
				.then((result) => {
					if (result.status === 200) {
						Swal.fire("Success", "Your item is alreadt processed", "success");
						router.push("/home");
					} else {
						Swal.fire("Oops...", "Failed to Checkout", "error");
					}
				})
				.catch((err) => {
					console.log(err);
					Swal.fire("Oops...", "Failed to Checkout", "error");
				});
		},

		getHistory(context) {
			axios({
				method: "GET",
				url: "http://localhost:3000/history",
				headers: { access_token: localStorage.access_token },
			})
				.then((result) => {
					if (result.status === 200) {
						context.commit("GET_HISTORY", result.data);
					} else {
						console.log(result);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
