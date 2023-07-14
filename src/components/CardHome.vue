<template>
  <v-container>
    <v-row>
      <v-col v-for="producto in productos" :key="producto">
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="producto.image"
            height="200px"
            contain
          ></v-img>

          <v-card-title> {{producto.name}} </v-card-title>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Descripción </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <div class="altura">
                {{producto.text}}

                </div>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "card-comp",
  created() {},
  computed:{
  },
  data() {
    return {
      show: false,
    };
  },
  props: {
    productos:{
      type:Object,
      required:true
    }
  },
  methods: {
  },
};
</script>

<style scoped>

.altura{
  height: 150px;
}
</style>
