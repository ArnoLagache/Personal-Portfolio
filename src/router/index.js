import Index from '@/Pages/'
import Home from '@/Pages/Home/'
import Contact from '@/Pages/Contact/'

import VueRouter from 'vue-router'

export const myRoutes = [
    {
        path: '/', component: Index, exact: true, children: [
            { path: '', component: Home, exact: true },
            { path: '/contact', component: Contact, exact: true },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes: myRoutes
})

/*
router.beforeEach(() => {
    document.querySelector('details').removeAttribute('open')
})
*/
export default router