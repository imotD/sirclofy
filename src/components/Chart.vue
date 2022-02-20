<template>
  <div class="dashboard mb-5">
    <v-container>
      <div class="mb-10">
        <h2>
          <v-icon color="blue accent-2 text-capitalize"> mdi-music </v-icon>
          {{ title }}
        </h2>
        <p class="text--secondary">
          Best <span class="text-lowercase">{{ title }}</span> of the year
        </p>
      </div>

      <TopList :items="items" />
      <div v-if="items" class="text-center">
        <v-pagination v-model="page" :length="4" circle></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import TopList from "@/components/TopList.vue";
export default {
  name: "Chart",
  props: {
    title: String,
    items: Array,
  },
  components: {
    TopList,
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>