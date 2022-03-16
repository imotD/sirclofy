<template>
  <div class="mt-16">
    <Navbar />
    <Banner />
    <Chart :title="title" :items="data" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import Chart from "@/components/Chart.vue";
import Footer from "@/components/Footer.vue";

export default {
  props: ["type"],
  name: "ExplorChart",
  components: {
    Navbar,
    Banner,
    Chart,
    Footer,
  },
  data() {
    return {
      title: this.type,
      data: null,
    };
  },
  created() {
    if (this.type == "Top Tracks") {
      this.data = JSON.parse(localStorage.getItem("dataTrack"));
    } else {
      this.data = JSON.parse(localStorage.getItem("dataArtist"));
    }
  },
};
</script>

<style lang="scss" scoped>
</style>