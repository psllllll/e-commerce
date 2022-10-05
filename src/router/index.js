import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//路由组件
import Login from '../pages/Login/index.vue'
import Register from '../pages/Register/index.vue'
import Home from '@/pages/Home'
import userInfo from '@/pages/UserInfo'
import userEdit from '@/pages/UserEdit'
import productClass from '@/pages/productClass'
import Detail from '@/pages/Detail/index.vue'
import ShopCart from '@/pages/ShopCart'
import PreOrder from '@/pages/PreOrder'
import OrderSuccess from '@/pages/ordersuccess'
import productClass2 from '@/pages/productClass2'
import passwordedit from '@/pages/passwordedit'


const router = new Router({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {
                show: true,
                header: true
            }
        },
        //路由重定向
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/user/login',
            component: Login,
            meta: {
                show: false,
                header: false
            }
        },
        {
            path: '/user/register',
            component: Register,
            meta: {
                show: false,
                header: false
            }
        },
        {
            path: '/user/info',
            component: userInfo,
            meta: {
                show: false,
                header: false
            }
        },
        {
            path: '/user/edit',
            component: userEdit,
            meta: {
                show: false,
                header: false
            }
        },
        {
            path: '/product/show',
            component: productClass,
            meta: {
                show: true,
                header: true
            }
        },
        {
            path: '/product/details/:pid',
            component: Detail,
            name: 'detail',
            meta: {
                show: true,
                header: true
            }
        },
        {
            path: '/shopcart',
            component: ShopCart,
            meta: {
                show: true,
                header: true
            }
        },
        {
            path: '/preorder',
            component: PreOrder,
            meta: {
                show: true,
                header: true
            }
        },
        {
            path: '/ordersuccess',
            component: OrderSuccess,
            meta: {
                show: true,
                header: true
            }
        },
        {
            path: '/productclass2',
            component: productClass2,
            meta: {
                show: true,
                header: true
            }
        },
        {
            path: '/passwordedit',
            component: passwordedit,
            meta: {
                show: false,
                header: false
            }
        }
    ],
    //解决页面定位问题
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})


//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    const token = window.localStorage.getItem('token')
    if ((!token) && (to.path !== '/home' && to.path !== '/user/login' && to.path !== '/user/register' && to.path !== '/product/show' && to.path !== '/productclass2' && to.path !== `/product/details/${to.params.pid}`)) {
        window.alert('请先登录')
        return next('user/login')
    } else if ((token) && (to.path === '/user/login' || to.path === '/user/register')) {
        window.alert('您已经登陆')
    }
    else {
        next()
    }
})

export default router