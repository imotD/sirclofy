<template>
  <div>
    <Navbar />
    <!-- <MyMusic /> -->
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
// import MyMusic from "@/components/MyMusic.vue";
import Dashboard from "@/components/Dashboard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    // MyMusic,
    Dashboard,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>