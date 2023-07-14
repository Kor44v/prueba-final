<template>
  <v-row>

    <v-col cols="12" sm="4" v-for="producto in productos" :key="producto.id">
      <v-card class="mx-auto my-12" max-width="374">
        <v-img height="250" :src="producto.image" contain></v-img>

        <v-card-title>{{ producto.title }}</v-card-title>

        <v-card-text class="altura">
          <v-row align="center" class="mx-0">
            <v-rating
              :value="producto.rating.rate"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ producto.rating.rate }} ({{ producto.rating.count }})
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ {{ producto.price }}</div>

          <div class="overflow" >{{ producto.description }}.</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="green lighten-2" @click="add_carrito(producto)">
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "cardV-comp",
  created() {},
  data() {
    return {};
  },
  props: {
    productos: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["add_carrito"]),
  },
};
</script>

<style scoped>
.altura{
  height: 300px;
}

</style>
