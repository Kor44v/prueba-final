import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/404.vue'
import Men from '@/views/VestuarioHombre.vue'
import Checkout from '@/views/Checkout.vue'
import Confirm from '@/views/Confirmacion.vue'
import Women from '@/views/VestuarioMujer.vue'
import Electronic from '@/views/Electronic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/men',
    name:'men',
    component:Men
  },
  {
    path:'/women',
    name:'women',
    component:Women
  },
  {
    path:'/electronic',
    name:'electronic',
    component:Electronic
  },
  {
    path:'/checkout',
    name:'checkout',
    component:Checkout
  },
  {
    path:'/confirm',
    name:'confirm',
    component:Confirm

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'*',
    name:'NotFound',
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
