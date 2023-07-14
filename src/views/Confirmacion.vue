<template>
  <div class=" text-center mt-10">
    <h1>Confirmación</h1>
    <p>La orden <span>N°{{numero}}</span> ha sido confirmada y ya la estamos preparando</p>

    <v-btn color="primary" to="/">Volver al inicio</v-btn>
  </div>
</template>

<script>
export default {
  name: "confirmacion-view",
  created() {
    this.orden()
  },
  data() {
    return {
      numero:''
    };
  },
  props: {},
  methods: {
    orden(){
      let numero = (Math.random())*100000
      return this.numero = Math.round(numero)

    }
  },
};
</script>

<style lang="scss" scoped></style>