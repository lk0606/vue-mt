import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('@/views/index/components/Nav.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart/Index.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/shop/Index.vue')
    },
    {
      path: '/ord',
      name: 'ord',
      component: () => import('@/views/ord/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Index.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('@/views/reg/Index.vue')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/views/me/Index.vue')
    }
  ]
})
