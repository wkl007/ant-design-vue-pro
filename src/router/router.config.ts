import type { MenuDataItem } from '@/types'
import UserLayout from '@/layouts/user-layout.vue'

/**
 * 基础路由
 */
export const constantRoutes: Array<MenuDataItem> = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */'@/views/user/login.vue'),
        meta: { title: '登录' }
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */'@/views/user/register.vue'),
        meta: { title: '注册' }
      },
      {
        path: '/user/registerResult',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "registerResult" */'@/views/user/register-result.vue'),
        meta: { title: '注册结果' }
      }
    ]
  }
]
