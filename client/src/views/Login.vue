<template>
	<div class="loginPage">
		<section class="hero is-fullheight">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-centered">
						<div class="column is-6">
							<p class="title has-text-centered mb-3">
								Welcome to Going Out of Bussiness
							</p>
							<p class="subtitle-5 has-text-centered mb-2">Please Login</p>
							<form class="box" @submit.prevent="postLogin">
								<div class="field">
									<label for="" class="label">Email</label>
									<div class="control has-icons-left">
										<input
											type="email"
											placeholder="user1@mail.com"
											class="input"
											required
											v-model="email"
										/>
										<span class="icon is-small is-left">
											<i class="fa fa-envelope"></i>
										</span>
									</div>
								</div>
								<div class="field">
									<label for="" class="label">Password</label>
									<div class="control has-icons-left">
										<input
											type="password"
											placeholder="1234"
											class="input"
											required
											v-model="password"
										/>
										<span class="icon is-small is-left">
											<i class="fa fa-lock"></i>
										</span>
									</div>
								</div>
								<div class="field is-grouped">
									<p class="control">
										<button type="submit" class="button is-primary">
											Login
										</button>
									</p>
									<p class="control">
										<router-link class="button is-primary" to="/register">Register</router-link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		postLogin() {
			this.$store.dispatch("postLogin", {
				email: this.email,
				password: this.password,
			});
		},
	},
};
</script>

<style></style>
