<template>
  <div class="container">
    <div class="row">
      <div class="col-4 my-5 mx-5" v-for="cart in carts" :key="cart.id">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ cart.category }}</h5>
            <table class="table table-sm table-dark">
              <tbody>
                <tr>
                  <td>Status:</td>
                  <td>{{ cart.status }}</td>
                </tr>
                <tr>
                  <td>Quantity:</td>
                  <td>{{ cart.quantity }}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <a href="#" @click.prevent="detailCart(cart.Products, cart.id)">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-lines-fill col-6 text-primary"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </a>
              <a href="#" @click.prevent="deleteCart(cart.id)">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-trash2-fill col-6 text-primary"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"
                  />
                </svg>
              </a>
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
    detailCart(products, id) {
      this.$store.dispatch("detailCart", products);
      this.$router.push(`/cart/detail/${id}`)
    },
    deleteCart(id) {
     this.$store.dispatch("deleteCart", id)
    },
  },
  created() {
    this.$store.dispatch("fetchCarts");
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
  },
};
</script>

<style>
</style>