<template>
	<div class="container">
		<h1 class="title has-text-centered mb-6">All Product</h1>
		<div class="buttons is-centered">
			<button @click.prevent="checkOut()" class="button is-primary">Confirm Order</button>
		</div>
		<div class="columns banner-col is-centered">
			<div class="card column is-4 mx-3 mb-3" v-for="cart in carts" :key="cart.id">
				<div class="card-image">
					<figure class="image is-4by5">
						<img :src="cart.Product.img_url" alt="Product picture" />
					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-content">
							<p class="title is-4 has-text-centered" style="text-transform: capitalize">
								{{ cart.Product.name }}
							</p>
							<table class="table is-fullwidth">
								<tr>
									<th>Price:</th>
									<td>Rp. {{ cart.Product.price.toLocaleString("id") }}</td>
								</tr>
								<tr>
									<th>Category:</th>
									<td>{{ cart.Product.Category.name }}</td>
								</tr>
								<tr>
									<th>Amount:</th>
									<td>{{ cart.quantity }}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<footer class="card-footer">
					<a
						v-if="cart.quantity > 1"
						@click.prevent="updateQuantity(cart.id, cart.quantity - 1)"
						class="card-footer-item"
						>Decrease Amount (-)</a
					>
					<a @click.prevent="deleteFromCart(cart.id)" class="card-footer-item">Delete from Cart</a>
					<a @click.prevent="updateQuantity(cart.id, cart.quantity + 1)" class="card-footer-item"
						>Increse Amount (+)</a
					>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		getCarts() {
			this.$store.dispatch("getAllCart");
		},
		deleteFromCart(id) {
			this.$store.dispatch("deleteFromCart", id);
		},
		updateQuantity(id, newQuantity) {
			this.$store.dispatch("updateQuantity", { id, quantity: newQuantity });
		},
		checkOut() {
			this.$store.dispatch("checkOut");
		},
	},
	computed: {
		carts() {
			return this.$store.state.cart;
		},
	},
	created() {
		this.getCarts();
	},
};
</script>

<style></style>
