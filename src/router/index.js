import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/vehicles/falcon-9',
        name: 'falcon9',
        component: () => import(/* webpackChunkName: "vehicles" */ '../views/Falcon.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router