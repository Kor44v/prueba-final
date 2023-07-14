<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Tienda DeTodito</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="route in routes"
            :key="route.name"
            @click="redirectTo(route.name)"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "navbar-comp",
  created() {},
  data() {
    return {
      drawer: false,
      group: null,
      routes: [
        {
          title: "Inicio",
          name: "home",
          icon: "mdi-home",
        },
        {
          title: "Vestuario Hombre",
          name: "men",
          icon: "mdi-human-male",
        },
        {
          title: "Vestuario Mujer",
          name: "women",
          icon: "mdi-human-female",
        },
        {
          title: "Electronica",
          name: "electronic",
          icon: "mdi-lightning-bolt",
        },
      ],
    };
  },
  props: {},
  methods: {
    redirectTo(nameRoute) {
      this.$router.push({ name: nameRoute }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
