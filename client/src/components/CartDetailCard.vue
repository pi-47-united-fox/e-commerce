<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-4 m-5" v-for="detail in detailCart" :key="detail.id">
          <div class="card" style="width: 18rem">
            <div class="crop">
              <img
                :src="detail.image_url"
                class="card-img-top"
                :alt="detail.name"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ detail.name }}</h5>
              <table class="table table-sm table-dark">
                <tbody>
                  <tr>
                    <td>Price:</td>
                    <td>€ {{ detail.price.toLocaleString("eur") }}</td>
                  </tr>
                  <tr>
                    <td>Position:</td>
                    <td>{{ detail.category }}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <!-- <a href="#" @click.prevent="addCart(player.id)">
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
                </a> -->
                <a href="#" @click.prevent="deletePlayer(detail.id)">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-dash col-6 text-primary"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </a>
              </div>
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
    deletePlayer(id) {
      console.log(id)
      this.$store.dispatch("deletePlayer", id);
      this.$router.push("/cart")
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
    detailCart() {
      return this.$store.state.detailCart;
    },
     carts() {
      return this.$store.state.carts;
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
