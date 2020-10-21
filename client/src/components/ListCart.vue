<template>
  <!-- itemCard loop -->
  <div>
    <div class="container-x">
      <div class="box-homes">
        <div class="container">
          <div class="row row-cols-3">
            <!-- itemCard loop -->
            <div class="col mt-5" v-for="cart in carts" :key="cart.id">
              <div class="itemCard">
                <div class="image">
                  <img src="#" alt="" srcset="" />
                </div>
                <!-- {{ data.products }} -->
                <div class="itemCard-text">
                  <div class="text-inner">
                    <h2 style="font-weight: bolder;">
                      {{ cart.ProductId }}
                    </h2>
                    <p>{{ cart.quantity }}</p>
                    <p>{{ cart.status }}</p>
                  </div>
                </div>
                <input type="number" name="" id="quantity" v-model="quantity" />
                <button @click.prevent="editQuantity(cart.id)">
                  Edit Quantity
                </button>
                <button @click.prevent="deleteCart(cart.id)">
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
    deleteCart(id) {
      this.$store.dispatch("deleteCart", id);
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

<style>
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
  height: 400px;
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

.itemCard-text {
  width: 100%;
  height: auto;
  background-color: seashell;
  display: flex;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
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
  background-color: red;
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
