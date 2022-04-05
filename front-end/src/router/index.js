import Vue from 'vue'
import VueRouter from 'vue-router'
import Help from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Browse from '../views/Browse.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Browse
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
