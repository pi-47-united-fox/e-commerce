<template>
  <div class="container">
    <div class="row">
      <div class="col-4 my-5" v-for="player in players" :key="player.id">
        <div class="card" style="width: 18rem">
          <div class="crop">
            <img
              :src="player.image_url"
              class="card-img-top"
              :alt="player.name"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ player.name }}</h5>
            <table class="table table-sm table-dark">
              <tbody>
                <tr>
                  <td>Price:</td>
                  <td>€ {{ player.price.toLocaleString("eur") }}</td>
                </tr>
                <tr>
                  <td>Position:</td>
                  <td>{{ player.category }}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <a href="#" @click.prevent="addToCart(player.id)">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-bag-plus-fill col-6 text-primary"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                  />
                </svg>
                </a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(id) {
      console.log(id)
      this.$store.dispatch("addToCart", id)
    },
    editPlayer(id) {
      let chosenPlayer = {};
      this.players.forEach((el) => {
        if (el.id === id) {
          chosenPlayer = el;
        }
      });
      this.$store.commit("EDIT_PLAYER", chosenPlayer);
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style>
.crop {
  padding: 5px;
  width: 286px;
  height: 353px;
  overflow: hidden;
}
.remove {
  border: none;
  background: white;
}
</style>
