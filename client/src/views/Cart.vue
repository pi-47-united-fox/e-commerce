<template>
  <div>
    <div class="ml-5 mr-5 col-11 align-items-center fix-top bg-dark ">
      <h1 class="display-4 text-primary">Cart</h1>
    </div>
    <div>
    <div class="bg-dark col-1 mt-3 ml-3 py-1 text-primary">
      <router-link to="/footballPlayers"
        ><svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-house-door-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"
          />
          <path
            fill-rule="evenodd"
            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
        </svg></router-link>
    </div>
    <CartCard></CartCard>
  </div>
  </div>
</template>


<script>
import CartCard from "../components/CartCard";
export default {
  components: {
    CartCard
  }

}
</script>

<style>

</style>