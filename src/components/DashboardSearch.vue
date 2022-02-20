<template>
  <div class="dashboard mb-5">
    <v-container>
      <div class="mb-10">
        <h2>
          Search results for
          <span class="text-capitalize font-weight-bold blue--text darken-4">
            "{{ keywords }}"</span
          >
        </h2>
        <p class="text--secondary">
          Have you found the <i class="font-weight-bold">{{ keywords }}</i> you
          are referring to?
        </p>
      </div>
      <v-tabs v-model="tab">
        <v-tabs-slider></v-tabs-slider>

        <v-tab href="#tab-1"> Artist </v-tab>

        <v-tab href="#tab-2"> Albums </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
          <TopList :loading="loading" :items="data.slice(0, 12)" more="link" />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </div>
</template>

<script>
import TopList from "@/components/TopList.vue";
// import data from "../../public/artis.json";
export default {
  name: "search",
  components: {
    TopList,
  },
  props: {
    keywords: String,
  },
  data() {
    return {
      tab: null,
      data: null,
      loading: false,
      //   data: data.artists.artist,
    };
  },
  created() {
    this.data = JSON.parse(localStorage.getItem("dataTrack"));
  },
};
</script>

<style lang="scss" scoped>
</style>