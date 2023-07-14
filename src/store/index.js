import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresProductos:[],
    tiposProductos:[],
    carrito:[],
  },
  getters: {
    cart_total(state){
      return state.carrito.reduce((acumulado,prod)=>{
          let total = (acumulado + prod.price)
          return total
      },0)
    },
    cart_lenght(state){
      return state.carrito.length
    }
  },
  mutations: {
    SET_MEJORES_PRODUCTOS(state,productos){
      state.mejoresProductos=productos
    },
    SET_TIPOS_PRODUCTOS(state,productos){
      state.tiposProductos=productos
    },
    ADD_CARRITO(state,producto){
      state.carrito.push(producto)
    },
    DELETE_CARRITO(state,productoId){
      let index = state.carrito.findIndex(p=>p.id==productoId)
      state.carrito.splice(index,1)
    }
  },
  actions: {
    fetchHome({commit}){
      fetch('/home.json')
      .then(resp=>resp.json())
      .then(data=> {
        let {mejoresproductos,tiposproductos}= data
        console.log(mejoresproductos,tiposproductos)
        commit('SET_MEJORES_PRODUCTOS',mejoresproductos)
        commit('SET_TIPOS_PRODUCTOS',tiposproductos)
      })
      .catch(error=>{
        console.log(error)
      })
    },
    add_carrito({commit},producto){
      commit('ADD_CARRITO',producto)
    },
    delete_carrito({commit},producto){
      commit('DELETE_CARRITO',producto)
    }

  },
  modules: {
  }
})
