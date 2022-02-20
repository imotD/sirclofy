<template>
  <div class="header">
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-card class="mx-auto" max-width="350" flat>
            <v-img
              src="https://picsum.photos/500/300?image=1"
              lazy-src="https://picsum.photos/id/11/100/60"
              height="300"
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
            </v-img>
          </v-card>
        </v-col>
        <v-col>
          <div class="text--disabled font-weight-light">Current Station</div>
          <p class="text-h2 py-5">Judul Lagu</p>
          <p class="text--secondary text-continue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            aliquam?
          </p>
          <v-btn class="text-caption" outlined plain text>View More</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "playsit",
  data() {
    return {
      info: null,
    };
  },
  //   mounted() {
  //     this.$axios
  //       .get(
  //         "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=68459665473b2bbde3b815086020419b&format=json"
  //       )
  //       .then((response) => (this.info = response));
  //   },
};
</script>

<style lang="scss" scoped>
</style>