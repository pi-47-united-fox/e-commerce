<template>
  <v-carousel
    cycle
    height="50vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(banner) in banners"
      :key="banner.id"
    >
      <v-sheet
        height="100%"
      >
        <!-- <v-row
          class="fill-height"
          align="center"
          justify="center"
          background-color="transparent"
        >
            {{banner.title}}
        </v-row> -->
        <v-img
          :src="banner.image_url"
        ></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Banner',
  data () {
    return {
    }
  },
  components: {},
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  mounted () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>
