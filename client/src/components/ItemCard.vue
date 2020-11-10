<template>
  <!-- itemCard loop -->
  <div>
    <div class="container-x">
      <div class="box-homes">
        <div class="container">
          <div class="row row-cols-3">
            <!-- itemCard loop -->
            <div
              class="col mt-5"
              v-for="product in data.products"
              :key="product.id"
            >
              <div class="itemCard">
                <div class="image">
                  <img :src="product.image_url" alt="" srcset="" />
                </div>
                <div class="itemCard-text">
                  <div class="text-inner">
                    <h2 style="font-weight: bolder;">{{ product.name }}</h2>
                    <p>{{ product.category }}</p>
                    <p>Rp. {{ product.price }}</p>
                    <p>Stock :{{ product.stock }}</p>
                  </div>
                </div>
                <div class="action">
                  <div class="addCart" @click.prevent="addToCart(product.id)">
                    <i class="fa fa-shopping-cart"></i>Add To Cart
                  </div>
                  <div class="wistlist"><i class="fa fa-heart"></i></div>
                </div>
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
  name: "ItemCard",
  data() {
    return {};
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },
    addToCart(id) {
      // console.log(id);
      let payload = {
        ProductId: id,
        UserId: localStorage.getItem("UserID"),
        quantity: 1
      };
      this.$store.dispatch("addToCart", payload);
    }
  },
  computed: {
    data() {
      return this.$store.state.products;
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
/* itemcard */
.container-x {
  width: 100%;
  height: auto;
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

.itemCard img {
  width: 100%;
  height: 220px;
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
