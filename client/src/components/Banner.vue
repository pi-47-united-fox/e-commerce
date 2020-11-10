<template>
  <!-- jumbotron banner -->
  <div class="banner-big-home">
    <div class="banner-text-left">
      <img
        src="https://www.inspirationde.com/media/2017/07/ss-by-michael-spitz-dribbble-1500273217nk84g.png"
        alt=""
        srcset=""
      />
      <h1>It Never Gets Easier, You Just Go Faster <br /></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style>
/* banner */
.banner-big-home {
  width: 100%;
  height: 900px;
  background-image: url(https://mk0bikesocietyop74ul.kinstacdn.com/wp-content/uploads/2020/06/MTB-2197-Home-Hero-2880x1620-Product-scaled.jpg);
  background-size: cover;
  background-position: top;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
}

.banner-text-left {
  width: 15%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: 100px;
  color: white;
  flex-direction: column;
  text-align: center;
}

.banner-text-left h1 {
  color: white;
  font-weight: bolder;
}
</style>
