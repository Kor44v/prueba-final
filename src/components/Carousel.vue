<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="(producto) in mejoresProductos"
      :key="producto.id"
      :src="producto.image"
      contain
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h5 text-white">
            {{producto.title}}
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "carousel-comp",
  created() {},
  computed:{
    ...mapState(['mejoresProductos'])
  },
  data() {
    return {
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>