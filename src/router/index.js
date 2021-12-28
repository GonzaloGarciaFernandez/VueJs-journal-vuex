import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import daybookRouter from '@/modules/daybook/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/daybook',
    ...daybookRouter //operador spread para obtener el contenido
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
