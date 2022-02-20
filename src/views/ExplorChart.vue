<template>
  <div class="mt-16">
    <Navbar />
    <Banner />
    <Chart :title="title" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import Chart from "@/components/Chart.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ExplorChart",
  components: {
    Navbar,
    Banner,
    Chart,
    Footer,
  },
  data() {
    return {
      title: null,
    };
  },
  created() {
    this.title = this.$route.params.type;
  },
};
</script>

<style lang="scss" scoped>
</style>