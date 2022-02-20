<template>
  <div class="dashboard">
    <v-container>
      <div class="mb-10">
        <h2>Trending Now</h2>
        <p class="text--secondary">
          Always keeping you up to date on the hottest hits
        </p>
      </div>
      <TopList title="Top Artists" :items="items" :loading="loading" />
      <TopList title="Top Tracks" :loading="loading" :items="data" />
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
      loading: false,
      items: null,
      data: null,
    };
  },
  mounted() {
    this.loading = true;

    this.$axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=68459665473b2bbde3b815086020419b&format=json"
      )
      .then((response) => {
        this.loading = false;
        let dataArtist = response.data.artists.artist;
        localStorage.setItem("dataArtist", JSON.stringify(dataArtist));
        this.items = dataArtist.slice(0, 8);
      })
      .catch((err) => {
        this.loading = false;
        console.error("Terkendala", err);
      });

    this.$axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=68459665473b2bbde3b815086020419b&format=json"
      )
      .then((response) => {
        this.loading = false;
        let dataTrack = response.data.tracks.track;
        localStorage.setItem("dataTrack", JSON.stringify(dataTrack));
        this.data = dataTrack.slice(0, 8);
      })
      .catch((err) => {
        this.loading = false;
        console.error("Terkendala", err);
      });
  },
};
</script>
