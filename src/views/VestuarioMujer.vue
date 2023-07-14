<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4">
        <CarritoTable :products="carrito" :total="cart_total" />
      </v-col>
      <v-col cols="12" sm="8">
        <Card :productos="this.data" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CarritoTable from '@/components/CarritoTable.vue'
import Card from '@/components/CardVestuario.vue'
import { mapState,mapGetters} from 'vuex';

export default {
  name: "vestuariomujer-view",
  created() {
    this.fetchWomen()
  },
  data() {
    return {
      data:{},
    };
  },
  computed:{
    ...mapState(['carrito']),
    ...mapGetters(['cart_total'])
  },
  props: {},
  methods: {

    fetchWomen(){
      fetch('/ropaMujer.json')
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data)
        return this.data=data
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  components:{
    CarritoTable,
    Card
  }
};
</script>

<style lang="scss" scoped></style>
