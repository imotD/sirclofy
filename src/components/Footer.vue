<template>
  <v-footer dark padless>
    <v-container fluid>
      <v-row justify="center" align="center" no-gutters>
        <v-col cols="6">
          <v-card-text class="white--text">
            <v-img max-width="200" src="../assets/logofull.png"></v-img>
            <p class="font-weight-light">
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
              amet. Mauris cursus commodo interdum. Praesent ut risus eget metus
              luctus
            </p>
          </v-card-text>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn
            class="font-weight-light text-font-global"
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
          >
            {{ link }}
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <div class="white--text text-caption text-center py-3">
        &copy; {{ new Date().getFullYear() }} — by
        <strong>
          <a
            class="text-decoration-none"
            href="https://www.linkedin.com/in/tommy-alhamra/"
            target="_blank"
          >
            ImotD
          </a>
        </strong>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: ["Home", "About Us", "Team", "Blog", "Hire me"],
  }),
};
</script>

<style lang="scss" scoped>
</style>