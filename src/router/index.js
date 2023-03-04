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
      path: '/',
      name: 'catalog',
      component: () => import('../views/pages/catalog/TheMainCatalog.vue'),
      redirect:'catalog',
      children:[
        {
          path: '/catalog',
          name: 'catalog',
          component: () => import('../views/pages/catalog/TheCatalog.vue'),
        },
        {
          path:'/catalog/item',
          name:'item',
          component: () => import('../views/pages/catalog/TheCatalogItem.vue')
        }
      ]
    }
  ]
})

export default router
