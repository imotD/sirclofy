<template>
  <div>
    <div class="mb-5">
      <v-toolbar flat>
        <v-toolbar-title class="font-weight-medium">
          <v-icon color="red accent-2"> mdi-fire </v-icon>
          {{ title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn text plain rounded :to="`/${more}`"> See All </v-btn>
      </v-toolbar>
    </div>
    <v-row class="mb-10">
      <v-col v-for="i in 8" :key="i" cols="3">
        <v-hover v-slot="{ hover }">
          <v-card
            dark
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            to="/about"
          >
            <v-img
              class="white--text align-end"
              src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              lazy-src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              gradient="to bottom, rgba(0,0,0,.1),rgb(34 150 203)"
              height="200"
              width="350"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>

              <v-card-actions width="40px" height="40px">
                <v-btn
                  fab
                  icon
                  :class="{ 'show-btns': hover }"
                  :color="transparent"
                >
                  <v-icon :class="{ 'show-btns': hover }" :color="transparent">
                    mdi-play
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-title>The Weeknd</v-card-title>
              <v-card-subtitle class="text-caption">
                {{ formatPrice(2427690) }} listeners
              </v-card-subtitle>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TopList",
  props: {
    title: String,
    more: String,
    items: Array,
  },
  data() {
    return {
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>


<style lang="scss" scoped>
v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>