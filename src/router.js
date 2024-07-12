import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topic/:id',
    name: 'Topic',
    component: Home // Using Home component to handle topic display
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
