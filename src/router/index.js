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



import Shop from '../views/Shop/Shop.vue';
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods.vue';
import ShopRatings from '../views/Shop/ShopRatings/ShopRatings.vue';
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo.vue';
const routes = [{
        path: '/',
        name: 'MSite',
        component: MSite,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/msite',
        name: 'MSite',
        component: MSite,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            showFooter: false
        }
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            showFooter: true
        }
    }, {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop,
        meta: {
            showFooter: false
        },
        children: [{
            path: '/',
            redirect: '/shop/goods'
        }, {
            path: '/shop/goods',
            name: 'ShopGoods',
            component: ShopGoods,
        }, {
            path: '/shop/ratings',
            name: 'ShopRatings',
            component: ShopRatings,
        }, {
            path: '/shop/info',
            name: 'ShopInfo',
            component: ShopInfo,
        }]
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router