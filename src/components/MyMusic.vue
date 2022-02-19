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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            praesentium facilis eum a. Nostrum eligendi delectus nihil atque non
            ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Officiis iusto molestiae dolorum pariatur accusantium laudantium
            alias consectetur facere, ad, quos ipsam ipsum excepturi eos vel,
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
};
</script>

<style lang="scss" scoped>
</style>