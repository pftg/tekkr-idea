import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
