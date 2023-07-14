<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <Carrito :products="carrito" :total="cart_total"/>
      </v-col>
      <v-col cols="12" sm="8">
        <Card  :productos="this.data" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carrito from "@/components/CarritoTable.vue";
import Card from "@/components/CardVestuario.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "electronic-view",
  created() {
    this.fetchElectronics();
  },
  data() {
    return {
      data:{}
    };
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["cart_total"]),
  },
  props: {},
  methods: {
    fetchElectronics() {
      fetch("/electronica.json")
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
    Carrito,
    Card,
  },
};
</script>

<style lang="scss" scoped></style>
