/*
 * @Author: hdq
 * @Date: 2023-06-29 23:10:48
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-30 19:57:27
 */
import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/index.vue'),
    children: [
      {
        path: '/home/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index/index.vue')
      },
      {
        path: '/home/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '@/views/about/index.vue')
      },
      {
        path: '/home/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Cart" */ '@/views/cart/index.vue')
      },
      {
        path: '/home/my',
        name: 'My',
        component: () => import(/* webpackChunkName: "My" */ '@/views/my/index.vue')
      }
    ]
  },

  {
    path: '/user/login',
    name: 'UserLogin',
    component: () => import(/* webpackChunkName: "UserLogin" */ '@/views/user/login.vue')
  },
  {
    path: '/user/registry',
    name: 'Registry',
    component: () => import(/* webpackChunkName: "Registry" */ '@/views/user/registry.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/common/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]
