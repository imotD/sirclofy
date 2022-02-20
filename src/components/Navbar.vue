<template>
  <div>
    <v-app-bar fixed elevate-on-scroll dark>
      <v-toolbar flat>
        <v-app-bar-nav-icon color="primary" to="/">
          <v-toolbar-title>
            <v-img max-width="50" src="../assets/logo.png"></v-img>
          </v-toolbar-title>
        </v-app-bar-nav-icon>

        <v-btn text rounded> Now Playing </v-btn>
        <v-btn text rounded> Explore Station </v-btn>

        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-text-field
            solo
            hide-details
            v-model.lazy="searchInput"
            label="Search for music..."
            append-icon="mdi-magnify"
            clearable
            @keyup.enter="goToSearch"
          ></v-text-field>
        </v-col>
      </v-toolbar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    goToSearch() {
      const url = this.$route.name;
      if (url !== "Search") {
        this.$router.push(`/search/${this.searchInput}`);
      } else {
        // this.$router.replace(`/search/${this.searchInput}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>