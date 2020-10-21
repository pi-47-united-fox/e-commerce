<template>
  <div>
    <div class="row">
      <div class="col-sm-12 mb-3 mgtype">
        <div
          class="card mb-3"
          style="max-width: 820px;"
          v-for="cart in carts"
          :key="cart.id"
        >
          <div class="row no-gutters border-primary">
            <div class="col-md-4">
              <img
                :src="`${cart.Product.image_url}`"
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <i
                  class="fa fa-trash-alt float-right"
                  aria-label="Close"
                  @click="deletedCart(cart.id)"
                >
                </i>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item bg-transparent">
                    {{ cart.Product.name }}
                  </li>
                  <li class="list-group-item bg-transparent">
                    Quantity {{ cart.qty }} cups
                  </li>
                  <li class="list-group-item bg-transparent">
                    Total Rp {{ cart.qty * cart.Product.price }}
                  </li>
                  <li class="list-group-item bg-transparent">
                    <input
                      type="number"
                      placeholder="update qty"
                      class="border-danger"
                      v-model="qty"
                    />
                    <button
                      class="btn btn-outline-danger"
                      @click="updateCart(cart.id)"
                    >
                      Update Qty
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-dark btn-md">
      Checkout
    </button>
  </div>
</template>

<script>
export default {
  name: "listcart",
  data() {
    return {
      qty: "",
    };
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    // totals() {
    //   let totol = 0;
    //   this.carts.forEach((el) => {
    //     total = el.qty;
    //   });
    //   return total;
    // },
  },
  methods: {
    updateCart(CartId) {
      let payload = {
        id: CartId,
        qty: this.qty,
      };
      //   console.log(payload);
      this.$store
        .dispatch("updateCart", payload)
        .then(({ data }) => {
          this.$store.dispatch("fecthCart");
        })
        .catch((err) => {
          console.log(err.response.data.errors);
        });
      this.qty = "";
    },
    deletedCart(id) {
      //   console.log(id);
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete?", {
          title: "Please Confirm",
          size: "md",
          buttonSize: "md",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
          bodyBgVariant: "light",
          bodyTextVariant: "dark",
          headerBgVariant: "light",
          headerTextVariant: "dark",
        })
        .then((value) => {
          console.log(value);
          if (value) {
            return this.$store.dispatch("deleteProduct", id);
          }
        })
        .then(({ data }) => {
          this.deleteMessage = data.message;
          this.$store.dispatch("fecthCart");
          this.$store.dispatch("fetchProduct");
        })
        .catch((err) => {
          // An error occurred
          console.log(err.response);
        });
    },
  },
  created() {
    this.$store.dispatch("fecthCart");
  },
};
</script>

<style scoped>
input[type="number"] {
  width: 90px;
  margin-right: 5px;
  border-radius: 10px;
  border-top: none;
  border-color: red;
}
</style>
