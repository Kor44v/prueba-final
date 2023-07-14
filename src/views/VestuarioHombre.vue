<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <CarritoTable :products="carrito" :total="cart_total" />
      </v-col>
      <v-col cols="12" sm="8">
        <Card :productos="data" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import CarritoTable from "@/components/CarritoTable.vue";
import Card from "@/components/CardVestuario.vue";

export default {
  name: "hombre-view",
  created() {
    this.fetchMen();
  },
  data() {
    return {
      data: [],
      loading: false,
      selection: 1,
    };
  },
  props: {},
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["cart_total"]),
  },
  methods: {
    ...mapActions(["add_carrito"]),
    fetchMen() {
      fetch("/ropaHombre.json")
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          return (this.data = data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    CarritoTable,
    Card,
  },
};
</script>

<style scoped>
.altura {
  height: 150px;
}
</style>
