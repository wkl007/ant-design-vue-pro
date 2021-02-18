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
        component: () => import('@/views/user/login.vue'),
        meta: { title: '登录' }
      }
    ]
  }
]
