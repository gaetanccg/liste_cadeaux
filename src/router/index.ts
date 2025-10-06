import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Secret from '../views/Secret.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/secret', name: 'Secret', component: Secret }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
