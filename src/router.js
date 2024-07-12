import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Step from '@/pages/Step.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/step/:id', component: Step },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
