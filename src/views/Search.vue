<template>
  <div class="wraper">
    <Navbar />
    <Banner />
    <DashboardSearch :keywords="keywords" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import DashboardSearch from "@/components/DashboardSearch.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "search",
  components: {
    Navbar,
    Banner,
    DashboardSearch,
    Footer,
  },
  data() {
    return {
      keywords: "",
    };
  },
  created() {
    this.getKeyword();
  },
  watch: {
    keywords: function (newKeyboard, oldKeyboard) {
      console.log(newKeyboard, oldKeyboard);
      this.getKeyword();
    },
  },
  methods: {
    getKeyword() {
      this.keywords = this.$route.params.key;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>