import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router/router.config'
import { MenuDataItem } from '@/types/router'

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

/**
 * 过滤菜单路由
 * @param routes
 */
export function filterMenu (routes: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
  return routes.find(item => item.name === 'index')?.children || []
}

/**
 * 使用meta.role确定当前用户是否具有权限
 * @param roles 角色数组
 * @param route 路由信息
 */
export function hasPermission (roles: Array<string>, route: MenuDataItem): boolean {
  if (route.meta?.roles) {
    return roles.some(role => {
      return route.meta?.roles?.includes(role)
    })
  } else {
    return true
  }
}

/**
 * 通过递归过滤异步路由表
 * @param routes 异步路由
 * @param roles 角色数组
 */
export function filterAsyncRoutes (routes: Array<RouteRecordRaw>, roles: Array<string>): Array<RouteRecordRaw> {
  const result: Array<RouteRecordRaw> = []
  routes.forEach(route => {
    const temp = { ...route }
    if (hasPermission(roles, temp)) {
      if (temp.children) temp.children = filterAsyncRoutes(temp.children, roles)
      result.push(temp)
    }
  })
  return result
}

/**
 * 获取可访问的路由
 * @param roles
 */
export function generateRoutes (roles: Array<string>): Promise<Array<RouteRecordRaw>> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      let accessedRoutes: Array<RouteRecordRaw> = []
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      resolve(accessedRoutes)
    } catch (err) {
      reject(err)
    }
  })
}

export default router
