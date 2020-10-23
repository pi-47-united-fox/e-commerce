<template>
	<div class="home-page">
		<NavBar />
		<router-view />
	</div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
	name: "Home",
	components: {
		NavBar,
	},
	created() {
		this.$store.commit("SET_DISPLAY_NAME");
	},
};
</script>

<style></style>
