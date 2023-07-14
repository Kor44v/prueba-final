<template>
<div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products"
          :key="product.id"
        >
          <td>{{ product.title }}</td>
          <td>${{ product.price }}</td>
          <td><v-btn icon @click="delete_carrito(product.id)"><v-icon >mdi-delete</v-icon></v-btn></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <div class="mt-5 text-center">
    <h4>Subtotal: ${{total}}</h4>
    <h4>descuentos: ${{Math.round(this.sales)}}</h4>
    <h2 class="mt-5">Total:${{descuentos(total)}}</h2>
    <v-btn color="primary" class="mt-5" @click="redirect()">Pagar</v-btn>
  </div>
</div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex'

  export default {
    data () {
      return {
        sales:'',
        show:true
      }
    },
    computed:{
      ...mapGetters(['cart_lenght'])
    },
    methods:{
      ...mapActions(['delete_carrito']),
      descuentos(total){
        if(total<500){
          let totalDesc=(total-total*0.05)
          let descuentos = (total*0.05)
          this.sales = descuentos
          return totalDesc
        }else if(total>=500){
          let totalDesc = (total-total*0.11)
          let descuentos = (total*0.11)
          this.sales =descuentos
          return totalDesc
        }
        console.log(this.sales)
      },
      redirect(){
        console.log(this.cart_lenght)
        if(this.cart_lenght>0){
          this.$router.push('/checkout').catch(()=>{})
        }
      }
    },
    props:{
      products:{
        type:Array,
        required:true
      },
      total:{
        type:Number,
        required:true
      }
    }
  }
</script>

<style lang="scss" scoped></style>