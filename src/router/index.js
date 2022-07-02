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
        component: () => import(/* webpackChunkName: "vehicles" */ '../views/Falcon.vue'),
        meta: {
            hideNavOnDesktop: true
        }
    },
    {
        path: '/human-spaceflight',
        name: 'spaceflight',
        component: () => import(/* webpackChunkName: "vehicles" */ '../views/HumanSpaceFlight.vue'),
        meta: {
            hideNavOnDesktop: true
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
})
export default router