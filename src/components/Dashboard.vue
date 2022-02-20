<template>
  <div class="dashboard">
    <v-container>
      <div class="mb-10">
        <h2>Trending Now</h2>
        <p class="text--secondary">
          Always keeping you up to date on the hottest hits
        </p>
      </div>
      <TopList title="Top Artists" more="explor" :items="data" />
      <TopList title="Top Tracks" more="about" :items="items" />
    </v-container>
  </div>
</template>

<script>
import topArtist from "../../public/artis.json";
import topTrack from "../../public/track.json";
import TopList from "@/components/TopList.vue";
export default {
  name: "Dashboard",
  components: {
    TopList,
  },
  data() {
    return {
      items: topArtist.artists.artist,
      data: topTrack.tracks.track,
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  // mounted() {
  //   this.$axios
  //     .get(
  //       `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=68459665473b2bbde3b815086020419b&format=json&limit=8`
  //     )
  //     .then((response) => (this.items = response));
  // },
};
</script>
