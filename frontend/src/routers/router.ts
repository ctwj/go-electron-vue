import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

import Home from '@/pages/index/home.vue'
import Schema from '@/pages/index/schema.vue'

import Login from '@/pages/auth/login.vue'

import MainLayout from '@/layout/main.vue'
import SingleLayout from '@/layout/single.vue'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/main/index'
    },
    {
        path: '/main',
        component: MainLayout,
        children: [
            {
                path: 'index',
                name: 'home',
                component: Home,
            },
            {
                path: 'schema',
                name: 'schema',
                component: Schema,
            }

        ]
    },
    {
        path: '/auth',
        component: SingleLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router