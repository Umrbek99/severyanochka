import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: () => import('../views/pages/TheProducts.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/pages/TheOrders.vue'),
    },
    {
      path: '/liked',
      name: 'liked',
      component: () => import('../views/pages/TheLiked.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/pages/TheCart.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/pages/TheLogin.vue'),
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/pages/TheCatalog.vue'),
    }
  ]
})

export default router
