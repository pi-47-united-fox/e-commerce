<template>
	<div class="container">
		<table class="table is-fullwidth is-hoverable">
			<thead>
				<tr>
					<th style="width: 5%">ID</th>
					<th style="width: 25%">Product Name</th>
					<th style="width: 22%">Category</th>
					<th style="width: 10%">Quantity</th>
					<th style="width: 18%">Price</th>
					<th style="width: 20%">Date</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th style="width: 5%">ID</th>
					<th style="width: 25%">Product Name</th>
					<th style="width: 22%">Category</th>
					<th style="width: 10%">Quantity</th>
					<th style="width: 18%">Price</th>
					<th style="width: 20%">Date</th>
				</tr>
			</tfoot>
			<tbody>
				<tr v-for="history in histories" :key="history.id">
					<th>{{ history.id }}</th>
					<td>
						<a href="#">{{ history.Product.name }}</a>
					</td>
					<td>{{ history.Product.Category.name }}</td>
					<td>{{ history.quantity }}</td>
					<td>Rp. {{ history.Product.price.toLocaleString("id") }}</td>
					<td>{{ new Date(history.updatedAt).toLocaleDateString("id") }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	methods: {
		getHistory() {
			this.$store.dispatch("getHistory");
		},
	},
	computed: {
		histories() {
			return this.$store.state.history;
		},
	},
	created() {
		this.getHistory();
	},
};
</script>

<style></style>
