<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="https://bulma.io">
				<img src="https://avatars.dicebear.com/api/gridy/1234.svg" width="36" height="28" />
				<p>Welcome {{this.$store.state.display_name}}</p>
			</a>

			<a
				role="button"
				class="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item"> Home </a>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<a class="navbar-item"><i class="fas fa-cloud"></i> History </a>
					<a class="navbar-item"><i class="fas fa-cloud"></i> WishList </a>
					<a class="navbar-item mr-2"><i class="fas fa-shopping-cart"></i> Cart </a>
					<div class="buttons">
						<a class="button is-primary"> Log Out </a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
};
</script>

<style></style>
