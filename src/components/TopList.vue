<template>
  <div>
    <div class="mb-5">
      <v-toolbar flat v-if="title">
        <v-toolbar-title class="font-weight-medium">
          <v-icon color="blue darken-1"> mdi-chevron-double-up </v-icon>
          {{ title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn
          text
          plain
          rounded
          :disabled="items ? false : true"
          :to="`explor/${title}`"
        >
          See All
        </v-btn>
      </v-toolbar>
    </div>
    <v-row class="mb-10" v-if="items">
      <v-col v-for="(item, i) in items" :key="i" cols="3">
        <v-skeleton-loader :loading="loading" type="image">
          <v-hover v-slot="{ hover }">
            <v-card
              dark
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              @click="goTo(item.url)"
            >
              <v-img
                class="white--text align-end"
                :src="item.image[2]['#text']"
                lazy-src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                gradient="to bottom, rgba(0,0,0,.1),rgb(34 150 203)"
                height="200"
                width="350"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
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
                    <v-icon
                      :class="{ 'show-btns': hover }"
                      :color="transparent"
                    >
                      mdi-play
                    </v-icon>
                  </v-btn>
                </v-card-actions>
                <v-card-title
                  class="d-inline-block text-truncate"
                  style="max-width: 12em"
                >
                  {{ item.name }}
                </v-card-title>

                <v-card-subtitle class="text-caption">
                  <p v-if="item.artist" class="mb-0">
                    {{ item.artist.name }}
                  </p>
                  {{ formatPrice(item.listeners) }} listeners
                </v-card-subtitle>
              </v-img>
            </v-card>
          </v-hover>
        </v-skeleton-loader>
      </v-col>
      <v-toolbar v-if="more" flat>
        <v-spacer></v-spacer>
        <v-btn
          text
          plain
          rounded
          :disabled="items ? false : true"
          :to="`explor/${more}`"
        >
          More <v-icon> mdi-chevron-double-right </v-icon>
        </v-btn>
      </v-toolbar>
    </v-row>
    <p v-else>
      <v-icon> mdi-emoticon-sad-outline </v-icon>
      Oops Sorry, data failed to load...
    </p>
  </div>
</template>

<script>
export default {
  name: "TopList",
  props: {
    title: String,
    more: String,
    items: Array,
    loading: Boolean,
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
    goTo(url) {
      window.open(url, "_black");
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