import type { MenuDataItem } from '@/types/router'
import UserLayout from '@/layouts/user-layout.vue'
import BasicLayout from '@/layouts/basic-layout.vue'
import RouteView from '@/layouts/route-view.vue'

/**
 * 基础路由
 */
export const constantRoutes: Array<MenuDataItem> = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */'@/views/user/login.vue'),
        meta: { title: 'pages.user.login' }
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */'@/views/user/register.vue'),
        meta: { title: 'pages.user.register' }
      },
      {
        path: '/user/registerResult',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "registerResult" */'@/views/user/register-result.vue'),
        meta: { title: 'pages.user.registerResult' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import(/* webpackChunkName: "404" */'@/views/exception/404.vue')
  }
]

/**
 * 异步路由
 */
export const asyncRoutes: Array<MenuDataItem> = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/exception',
    children: [
      // exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: {
          title: 'pages.exception.title',
          icon: 'WarningOutlined'
        },
        children: [
          {
            path: '/exception/403',
            name: 'exception403',
            component: () => import(/* webpackChunkName: "403" */ '@/views/exception/403.vue'),
            meta: {
              title: 'pages.exception.403.title'
            }
          },
          {
            path: '/exception/404',
            name: 'exception404',
            component: () => import(/* webpackChunkName: "404" */ '@/views/exception/404.vue'),
            meta: { title: 'pages.exception.404.title' }
          },
          {
            path: '/exception/500',
            name: 'exception500',
            component: () => import(/* webpackChunkName: "500" */ '@/views/exception/500.vue'),
            meta: { title: 'pages.exception.500.title' }
          }
        ]
      }
    ]
  }
]
