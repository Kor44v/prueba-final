<template>
  <v-form ref="form" v-model="valid">
    <h1>Datos comprador</h1>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="Remail"
      :rules="RemailRules"
      label="Repetir e-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :rules="phoneRules"
      label="telefono"
    ></v-text-field>
    <h1>Datos del despacho</h1>
    <v-divider></v-divider>
    <v-text-field
      v-model="address"
      :counter="10"
      :rules="addressRules"
      label="Dirección"
      required
    ></v-text-field>

    <v-text-field
      v-model="address2"
      :rules="address2Rules"
      label="Comuna"
      required
    ></v-text-field>

    <h2>Forma de pago</h2>
    <v-divider></v-divider>
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in formasPago"
        :key="n"
        :label="n.name"
        :value="n.name"
        required
      ></v-radio>
    </v-radio-group>
    <v-btn color="primary" @click="redirectTo()">Confirmar</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    radioGroup: 1,
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "El nombre es requerido"],
    email: "",
    emailRules: [
      (v) => !!v || "El e-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser valido",
    ],
    Remail: "",
    RemailRules: [
      (v) => !!v || "El e-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail debe ser valido",
    ],
    phone: "",
    phoneRules: [
      (v) => !!v || "Teléfono requerido",
      (v) => !!v || "El teléfono debe ser valido",
    ],
    address: "",
    addressRules: [(v) => !!v || "La dirección es requerida"],
    address2: "",
    address2Rules: [(v) => !!v || "La comuna es requerida"],
    formasPago: [
      {
        name: "Transferencia Bancaria",
      },
      {
        name: "Servipag",
      },
      {
        name: "Contra entrega",
      },
      {
        name: "WebPay",
      },
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    redirectTo() {
      if (this.valid) {
        return this.$router.push("/confirm");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
