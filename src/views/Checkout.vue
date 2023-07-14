<template>
  <v-container>
    <v-row>
      <v-col>
        <direccion-form/>
      </v-col>
      <v-col>
        <carrito-table :products="carrito" :total="cart_total"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DireccionForm from '@/components/DireccionForm.vue'
import CarritoTable from '@/components/CarritoTable.vue'
import { mapState,mapGetters} from 'vuex'

export default {
  name: "checkout-view",
  created() {},
  computed:{
    ...mapState(['carrito']),
    ...mapGetters(['cart_total'])
  },
  data() {
    return {};
  },
  props: {},
  methods: {},
  components:{
    DireccionForm,
    CarritoTable
  }
};
</script>

<style lang="scss" scoped></style>