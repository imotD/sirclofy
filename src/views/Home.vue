<template>
  <div>
    <Navbar />
    <MyMusic />
    <v-container fluid>
      <v-main> Top Music </v-main>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MyMusic from "../components/MyMusic.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    MyMusic,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>