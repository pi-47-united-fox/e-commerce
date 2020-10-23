<template>
  <!-- itemCard loop -->
  <div>
    <div class="container-x">
      <div class="box-homes">
        <div class="container">
          <div class="row row-cols-3">
            <!-- itemCard loop -->
            <div class="col mt-5" v-for="cart in carts" :key="cart.ProductId">
              <div class="itemCard">
                <div class="image">
                  <img :src="cart.Product.image_url" alt="" srcset="" />
                </div>

                <div class="itemCard-text">
                  <div class="text-Title">
                    <h2 style="font-weight: bolder;">
                      {{ cart.Product.name }}
                    </h2>
                  </div>
                </div>
                <div class="display">
                  <div class="qty">
                    {{ cart.quantity }}
                  </div>
                  <div class="status">Status : {{ cart.status }}</div>
                </div>

                <div class="edit-qty">
                  <input
                    class="input-edit"
                    type="number"
                    name="qty"
                    id="quantity"
                    min="0"
                    :max="cart.Product.stock"
                    v-model="quantity"
                    :placeholder="cart.quantity"
                  />
                  <button
                    class="button-edit"
                    @click.prevent="editQuantity(cart.id)"
                  >
                    Edit
                  </button>
                </div>

                <button
                  class="btn btn-danger"
                  @click.prevent="
                    deleteCart({
                      id: cart.id,
                      ProductId: cart.ProductId,
                      quantity: cart.quantity
                    })
                  "
                >
                  Remove Data
                </button>
              </div>
            </div>
            <!-- itemCard end -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- itemCard end -->
</template>

<script>
export default {
  name: "ListCart",
  data() {
    return {
      quantity: 0,
      status: false
    };
  },
  methods: {
    fetchCart() {
      this.$store.dispatch("fetchCart");
      this.$store.dispatch("fetchProducts");
    },
    deleteCart(payload) {
      this.$store.dispatch("deleteCart", payload);
    },
    editQuantity(id) {
      let payload = {
        id: id,
        quantity: this.quantity
      };
      console.log(id);
      this.$store.dispatch("editQuantity", payload);
    }
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    data() {
      return this.$store.state.products;
    }
  },
  created() {
    this.fetchCart();
  }
};
</script>

<style scoped>
/* itemcard */
.container-x {
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 0, 0);
}

.box-homes {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.itemCard {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: saddlebrown;
  border-radius: 10px;
  overflow: hidden;
}
.itemCard p {
  color: black;
}

.itemCard-image {
  width: 100%;
  background-color: seashell;
}
img {
  width: 100%;
  height: 220px;
  background-color: seashell;
}

.itemCard-text {
  width: 100%;
  height: 15%;
  background-color: seashell;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid black;
}

.display {
  width: 100%;
  height: 20%;
  background-color: red;
  display: flex;
}
.qty {
  width: 30%;
  background-color: rgb(6, 20, 63);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  color: white;
  font-size: 1.5rem;
}

.edit-qty {
  width: 100%;
  height: 10%;
  background-color: pink;
  display: flex;
}

.button-edit {
  all: unset;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-weight: bold;

  width: 30%;
  height: 50px;
}

.button-edit :hover {
  background-color: burlywood;
}

.input-edit {
  width: 70%;
  height: 50px;
}

.status {
  width: 70%;
  background-color: slategray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: normal;
}

.text-inner {
  width: 100%;
  height: 80%;
  background: transparent;
  line-height: 5px;
  text-align: center;
  color: black;
}

.action {
  width: 100%;
  height: 20%;
  background-color: rgb(70, 43, 43);
  display: flex;
}

.addCart {
  width: 75%;
  height: 100%;
  background-color: #0d1b2a;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
}

.wistlist {
  width: 25%;
  height: 100%;
  background-color: #415a77;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.wistlist,
i {
  color: white;
}
</style>
