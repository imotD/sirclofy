<template>
  <div class="dashboard my-10">
    <v-container>
      <div class="mb-10">
        <h2>Trending Now</h2>
        <p class="text--secondary">
          Always keeping you up to date on the hottest hits
        </p>
      </div>
      <TopList title="Top Artists" more="about" />
      <TopList title="Top Tracks" more="about" />
    </v-container>
  </div>
</template>

<script>
import TopList from "@/components/TopList.vue";
export default {
  name: "Dashboard",
  components: {
    TopList,
  },
  data() {
    return {
      items: [
        {
          name: "The Weeknd",
          playcount: "258665615",
          listeners: "2427690",
          mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
          url: "https://www.last.fm/music/The+Weeknd",
          streamable: "0",
        },
      ],
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
};
</script>
