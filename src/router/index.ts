import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from '@/router/router.config'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }
})

/**
 * vue-router 配置
 * @param app
 */
export function setupRouter (app: App<Element>): void {
  app.use(router)
}

export default router
