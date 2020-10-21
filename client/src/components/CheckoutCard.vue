<template>
  <div class="mb-4">
      <v-card>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="cart.title"></v-card-title>

            <v-card-subtitle>{{ cart.price }}</v-card-subtitle>

            <v-card-actions>
              <v-btn class="ml-2 mt-3" icon>
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
              <v-btn class="ml-2 mt-3" icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn class="ml-2 mt-3" icon>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
                <v-text-field

                    value="10"
                    type="number"
                    placeholder="Placeholder"
                ></v-text-field>
              <v-btn class="ml-2 mt-3" icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="cart.imgUrl"></v-img>
          </v-avatar>
        </div>
      </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['cart']
}
</script>

<style></style>>
