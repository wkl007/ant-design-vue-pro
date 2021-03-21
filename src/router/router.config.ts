import type { MenuDataItem } from '@/types/router'
import { UserLayout, GlobalLayout, RouteView } from '@/layouts'

/**
 * 基础路由
 */
export const constantRoutes: Array<MenuDataItem> = [
  {
    path: '/user',
    name: 'user',
    component: UserLayout,
    redirect: '/user/login',
    meta: { title: 'pages.layout.userLayout.title' },
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */'@/views/user/login.vue'),
        meta: { title: 'pages.login.accountLogin.tab' }
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */'@/views/user/register.vue'),
        meta: { title: 'pages.login.registerAccount' }
      },
      {
        path: '/user/registerResult',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "registerResult" */'@/views/user/register-result.vue'),
        meta: { title: 'pages.login.registerAccount' }
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
    component: GlobalLayout,
    redirect: '/dashboard',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouteView,
        redirect: '/dashboard/workplace',
        meta: {
          icon: 'HeartOutlined',
          title: 'pages.dashboard.title'
        },
        children: [
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: () => import(/* webpackChunkName: "workplace" */ '@/views/dashboard/workplace/index.vue'),
            meta: {
              icon: 'HistoryOutlined',
              title: 'pages.dashboard.workplace.title'
            }
          }
        ]
      },
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
      },
      // nested
      {
        path: '/nested',
        name: 'nested',
        component: RouteView,
        redirect: '/nested/menu1',
        meta: {
          title: 'pages.nested.title',
          icon: 'AppstoreAddOutlined'
        },
        children: [
          {
            path: '/nested/menu1',
            name: 'menu1',
            component: () => import(/* webpackChunkName: "menu1" */ '@/views/examples/nested/menu1.vue'),
            redirect: '/nested/menu1/menu1-1',
            meta: { title: 'pages.nested.menu1.title' },
            children: [
              {
                path: '/nested/menu1/menu1-1',
                name: 'menu1-1',
                component: () => import(/* webpackChunkName: "menu1-1" */'@/views/examples/nested/menu1-1.vue'),
                meta: { title: 'pages.nested.menu1-1.title' }
              },
              {
                path: '/nested/menu1/menu1-2',
                name: 'menu1-2',
                component: () => import(/* webpackChunkName: "menu1-2" */'@/views/examples/nested/menu1-2.vue'),
                redirect: '/nested/menu1/menu1-2/menu1-2-1',
                meta: { title: 'pages.nested.menu1-2.title' },
                children: [
                  {
                    path: '/nested/menu1/menu1-2/menu1-2-1',
                    name: 'menu1-2-1',
                    component: () => import(/* webpackChunkName: "menu1-2-1" */'@/views/examples/nested/menu1-2-1.vue'),
                    meta: { title: 'pages.nested.menu1-2-1.title' }
                  }
                ]
              }
            ]
          },
          {
            path: '/nested/menu2',
            name: 'menu2',
            component: () => import(/* webpackChunkName: "menu2" */ '@/views/examples/nested/menu2.vue'),
            meta: { title: 'pages.nested.menu2.title' }
          },
          {
            path: '/nested/menu3',
            name: 'menu3',
            component: () => import(/* webpackChunkName: "menu3" */ '@/views/examples/nested/menu3.vue'),
            redirect: '/nested/menu3/menu3-1',
            meta: { title: 'pages.nested.menu3.title', hideChildrenInMenu: true },
            children: [
              {
                path: '/nested/menu3/menu3-1',
                name: 'menu3-1',
                component: () => import(/* webpackChunkName: "menu3-1" */ '@/views/examples/nested/menu3-1.vue'),
                meta: { title: 'pages.nested.menu3-1.title' }
              }
            ]
          }
        ]
      },
      // jump url
      {
        path: '/jumpUrl',
        name: 'jumpUrl',
        component: RouteView,
        redirect: '/jumpUrl/router',
        meta: {
          title: 'pages.jumpUrl.title',
          icon: 'LinkOutlined'
        },
        children: [
          {
            path: '/jumpUrl/router',
            name: 'router',
            component: () => import(/* webpackChunkName: "router" */'@/views/examples/jump-url/router.vue'),
            meta: {
              title: 'pages.jumpUrl.router.title'
            }
          },
          {
            path: 'https://github.com/vueComponent/ant-design-vue',
            name: 'github',
            meta: {
              title: 'pages.jumpUrl.github.title',
              target: '_blank'
            },
            component: () => null
          }
        ]
      }
    ]
  }
]
