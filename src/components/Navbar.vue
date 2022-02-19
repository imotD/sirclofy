<template>
  <div>
    <v-toolbar flat dark>
      <v-toolbar-title>
        <v-img max-width="50" src="../assets/logo.png"></v-img>
      </v-toolbar-title>

      <v-btn text rounded> Now Playing </v-btn>

      <v-btn text rounded> Explore Station </v-btn>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <v-text-field
          solo
          hide-details
          label="Artist or Song"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped>
</style>