<template>
<v-container>
  <v-row>
    <v-col>
      <Carousel/>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <Card :productos="tiposProductos"/>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/CardHome.vue'
import {mapActions,mapState} from 'vuex'


  export default {
    name: 'home-view',
    created(){
      this.fetchHome()
    },
    computed:{
      ...mapState(['tiposProductos'])

    },
    methods:{
      ...mapActions(['fetchHome']),

    },

    components: {
      Carousel,
      Card
    },
  }
</script>
