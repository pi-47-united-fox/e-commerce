<template>
  <v-carousel
    cycle
    height="60vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ slide }} Banner
          </div>
        </v-row>
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
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ]
    }
  },
  components: {}
}
</script>
