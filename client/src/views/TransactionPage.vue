<template>
  <section class="ab-info-main py-5">
    <div class="container py-lg-3">
      <div class="ab-info-grids">
        <h3 class="tittle text-center mb-lg-5 mb-3">My History</h3>
        <div id="products" class="row view-group">
          <Transaction 
            v-for="allIsPaid in allIsPaids"
              :key="allIsPaid.id"
              :allIsPaid="allIsPaid"></Transaction>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Transaction from '../components/Transaction'

export default {
  name: "TransactionPage",
  components: {
    Transaction
  },
  created() {
    this.$store.dispatch("fetchTransaction");
  },
  computed: {
    allIsPaids() {
      return this.$store.state.allIsPaids;
    },
  },
};
</script>

<style>
</style>