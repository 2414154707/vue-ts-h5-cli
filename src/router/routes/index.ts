/*
 * @Author: hdq
 * @Date: 2023-06-29 23:10:52
 * @Last Modified by:   hdq
 * @Last Modified time: 2023-06-29 23:10:52
 */
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
