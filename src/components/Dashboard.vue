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
      <TopList title="Top Tracks" :items="data" :loading="loading" />
    </v-container>
  </div>
</template>

<script>
import TopList from "@/components/TopList.vue";
import Service from "@/services/service";
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
    Service.getTopArtist()
      .then((response) => {
        this.loading = false;
        let dataArtist = response.data.artists.artist;
        localStorage.setItem("dataArtist", JSON.stringify(dataArtist));
        this.items = dataArtist.slice(0, 8);
      })
      .catch((err) => {
        this.loading = false;
        console.error("Error message", err);
      });

    Service.getTopTrack()
      .then((response) => {
        this.loading = false;
        let dataTrack = response.data.tracks.track;
        localStorage.setItem("dataTrack", JSON.stringify(dataTrack));
        this.data = dataTrack.slice(0, 8);
      })
      .catch((err) => {
        this.loading = false;
        console.error("Error message", err);
      });
  },
};
</script>
