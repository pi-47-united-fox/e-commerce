<template>
    <div class="container">
        <div class="row text-left ml-2 mt-2">
            <p class="">Home > Products</p>
        </div>
        <hr>
            <div
              class="alert col-12 alert-warning alert-dismissible fade show"
              v-if="errMessage.length > 1"
              role="alert"
            >
              {{ errMessage }}
              <button
                type="button"
                class="close"
                @click="closeAlert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
        <h2>All Products</h2>
        <div class="row">
            <div class="col-3 sidebar">
                <hr>
                    <h4>Filter Product</h4>
                <hr>
                <ul class="list-group">
                    <li @click="changeFilter('all')" class="list-group-item " :class="{active:filter == ''}">
                        All Product
                    </li>
                    <li  @click="changeFilter(category.name)"
                        v-for="category in categories"
                        :class="{active:filter == category.name}"
                        :key="category.id"
                        class="list-group-item ">
                        {{category.name}}
                    </li>
                </ul>
            </div>
            <div class="col-9 bg-light d-flex flex-wrap">
                <CardProduct
                    v-for="(product, i) in filteredProducts"
                    :key="i"
                    :product="product"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'
export default {
  name: 'Products',
  components: {
    CardProduct
  },
  data () {
    return {
      filter: ''
    }
  },
  methods: {
    changeFilter (payload) {
      this.$router.push({ path: 'products', query: { category: payload } })
    }
  },
  computed: {
    filteredProducts () {
      if (this.filter === '' || this.filter === 'all') {
        return this.$store.state.products
      } else {
        const catId = this.categories.filter(cat => cat.name === this.filter)
        const products = this.$store.state.products.filter(product => product.CategoryId === catId[0].id)
        return products
      }
    },
    errMessage () {
      return this.$store.state.errMessage
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    // console.log(this.$route);
    const cat = this.$route.query.category || ''
    this.filter = cat
  },
  watch: {
    '$route.query.category': function (category) {
      console.log(this.$route.query.category, '<<')
      const payload = this.$route.query.category || ''
      this.filter = payload
    }
  }

}
</script>

<style scoped>
li {
    cursor: pointer;
}
li:hover {

  box-shadow: 0px 5px 15px inset #a5791b;
}
.sidebar {
    background-size: cover;
    background-position: center;
    background-repeat: repeat-y;
    min-height: 213px;
}
.active {
    background-color: #8b6719;
}
.container {
    min-height: 65vh;
}
</style>
