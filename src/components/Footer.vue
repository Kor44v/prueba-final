<template>
  <v-footer
    dark
    padless
    color="purple"
  >
    <v-card
      class="flex"
      flat
      tile
      color="purple darken-4"
    >
      <v-card-title >
        <strong class="subheading">Encuentra todo lo que necesitas!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "footer-comp",
  created() {},
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>