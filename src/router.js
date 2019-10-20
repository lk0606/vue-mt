import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'foot',
      component: () => import('@/components/Foot.vue'),
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          hidden: true,
          component: () => import('@/views/index/Index.vue')
        },
        {
          path: 'ord',
          name: 'ord',
          hidden: true,
          component: () => import('@/views/ord/Index.vue'),
          meta: { title: '订单', noCache: false }
        },
        { path: 'me', name: 'me', component: () => import('@/views/me/Index.vue') }
      ]
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
      path: '/map',
      name: 'map',
      component: () => import('@/components/Map.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/components/Table.vue')
    }
  ]
})
