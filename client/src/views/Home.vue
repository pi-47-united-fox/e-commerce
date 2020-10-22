<template>
  <div>
    <!-- mian-content -->
    <!--//main-content-->
    <!-- banner -->
    <section class="ab-info-main py-md-5">
      <div class="container py-md-3">
        <div class="left-ads-display container col-lg-8">
          <div class="row">
            <Card
              v-for="allData in allDatas"
              :key="allData.id"
              :allData="allData"
            ></Card>
          </div>
          <div class="grid-img-right mt-4 text-right">
            <span class="money">Flat 50% Off</span>
            <a href="shop-single.html" class="btn">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Card,
  },
  created() {
    this.$store.dispatch("fetchAll");
  },
  computed: {
    allDatas() {
      return this.$store.state.allDatas;
    },
  },
};
</script>

<style>
.dropbtn {
  background-color: #414b52;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #414b52;
}
</style>
