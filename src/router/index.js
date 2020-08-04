import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Order = () =>
    import ('../views/Order/Order.vue')
const MSite = () =>
    import ('../views/MSite/MSite.vue')
const Profile = () =>
    import ('../views/Profile/Proder.vue')
const Search = () =>
    import ('../views/Search/Search.vue')
const Login = () =>
    import ('../views/Login/Login.vue')
const routes = [{
        path: '/',
        name: 'MSite',
        component: MSite,
        meta: { showFooter: true }
    },
    {
        path: '/msite',
        name: 'MSite',
        component: MSite,
        meta: { showFooter: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { showFooter: false }
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
        meta: { showFooter: true }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { showFooter: true }
    }, {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: { showFooter: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router