<template>
  <div>
    <div class="mx-5 col-11 align-items-center display-4 bg-dark text-primary">
      <h1 class="display-4 text-primary">Football Players</h1>
    </div>
    <div class="bg-dark col-2 mt-3 ml-3 text-primary">
      <router-link to="/cart"
        ><svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-bag-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"
          />
        </svg>
        Cart</router-link
      >
    </div>
    <CardPlayers></CardPlayers>
  </div>
</template>

<script>
import CardPlayers from "../components/CardPlayers";
export default {
  components: {
    CardPlayers,
  },
};
</script>

<style>
</style>
