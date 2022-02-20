<template>
  <div class="mt-16">
    <Navbar />
    <Banner />
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import Dashboard from "@/components/Dashboard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Dashboard,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>