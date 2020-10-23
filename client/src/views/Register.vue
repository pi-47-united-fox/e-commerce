<template>
	<section id="registration-form" class="container mt-6" style="width: 60%">
		<h1 class="title is-2 has-text-centered">Registration</h1>
		<form @submit.prevent="postRegister">
			<div class="field">
				<label class="label">Email</label>
				<div class="control has-icons-left has-icons-right">
					<input class="input" type="email" placeholder="Email input" required v-model="email" />
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
				</div>
			</div>

			<div class="field">
				<label class="label">Password</label>
				<p class="control has-icons-left has-icons-right">
					<input class="input" type="password" placeholder="Password" required v-model="password" />
					<span class="icon is-small is-left">
						<i class="fas fa-lock"></i>
					</span>
				</p>
			</div>

			<div class="field">
				<label class="label">Display Name</label>
				<div class="control has-icons-left has-icons-right">
					<input
						class="input"
						type="text"
						placeholder="Display Name"
						required
						v-model="display_name"
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-user"></i>
					</span>
				</div>
			</div>

			<div class="field is-grouped">
				<div class="control">
					<button type="submit" class="button is-primary">Submit</button>
				</div>
				<div class="control">
					<router-link class="button is-primary" to="/">Cancel</router-link>
				</div>
			</div>
		</form>
	</section>
</template>

<script>
export default {
	name: "Register",
	data() {
		return {
			email: "",
			password: "",
			display_name: "",
		};
	},
	methods: {
		postRegister() {
			this.$store.dispatch("postRegister", {
				email: this.email,
				password: this.password,
				display_name: this.display_name,
			});
		},
	},
};
</script>

<style></style>
