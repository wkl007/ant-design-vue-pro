import { defineAsyncComponent, h } from 'vue'
import type { MenuDataItem } from '@/types/router'
import { GlobalLayout, RouteView, UserLayout } from '@/layouts'

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

const AsyncWorkplace = defineAsyncComponent(() => import(/* webpackChunkName: "workplace" */ '@/views/workplace/index.vue'))
/**
 * 异步路由
 */
export const asyncRoutes: Array<MenuDataItem> = [
  {
    path: '/',
    name: 'Index',
    component: GlobalLayout,
    redirect: '/workplace',
    children: [
      {
        path: '/workplace',
        name: 'Workplace',
        component: h(RouteView, {}, () => h(AsyncWorkplace)), // 一级菜单并且开启多标签需要作此处理
        meta: {
          icon: 'HistoryOutlined',
          title: 'pages.workplace.title',
          lock: true
        }
      },
      // dashboard
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: RouteView,
        redirect: '/dashboard/welcome',
        meta: {
          icon: 'HeartOutlined',
          title: 'pages.dashboard.title'
        },
        children: [
          {
            path: '/dashboard/welcome',
            name: 'Welcome',
            component: () => import(/* webpackChunkName: "welcome" */ '@/views/dashboard/welcome/index.vue'),
            meta: {
              icon: 'HistoryOutlined',
              title: 'pages.dashboard.welcome.title',
              keepAlive: false
            }
          },
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            component: () => import(/* webpackChunkName: "analysis" */ '@/views/dashboard/analysis/index.vue'),
            meta: {
              icon: 'HeartOutlined',
              title: 'pages.dashboard.analysis.title'
            }
          },
          {
            path: '/dashboard/monitor',
            name: 'Monitor',
            component: () => import(/* webpackChunkName: "monitor" */ '@/views/dashboard/monitor/index.vue'),
            meta: {
              icon: 'HeartOutlined',
              title: 'pages.dashboard.monitor.title'
            }
          }
        ]
      },
      // form
      {
        path: '/form',
        name: 'Form',
        component: RouteView,
        redirect: '/form/basic-form',
        meta: {
          title: 'pages.form.title',
          icon: 'FormOutlined'
        },
        children: [
          {
            path: '/form/basic-form',
            name: 'BasicForm',
            component: () => import(/* webpackChunkName: "basicForm" */ '@/views/form/basic-form/index.vue'),
            meta: {
              title: 'pages.form.basicForm.title',
              keepAlive: false
            }
          },
          {
            path: '/form/step-form',
            name: 'StepForm',
            component: () => import(/* webpackChunkName: "stepForm" */ '@/views/form/step-form/index.vue'),
            meta: {
              title: 'pages.form.stepForm.title',
              keepAlive: false
            }
          },
          {
            path: '/form/advance-form',
            name: 'AdvanceForm',
            component: () => import(/* webpackChunkName: "advanceForm" */ '@/views/form/advance-form/index.vue'),
            meta: {
              title: 'pages.form.advanceForm.title',
              keepAlive: false
            }
          }
        ]
      },
      // list
      {
        path: '/list',
        name: 'List',
        component: RouteView,
        redirect: '/list/table-list',
        meta: {
          title: 'pages.list.title',
          icon: 'TableOutlined'
        },
        children: [
          {
            path: '/list/table-list',
            name: 'TableList',
            component: () => import(/* webpackChunkName: "tableList" */'@/views/list/table-list/index.vue'),
            meta: {
              title: 'pages.list.tableList.title'
            }
          },
          {
            path: '/list/basic-list',
            name: 'BasicList',
            component: () => import(/* webpackChunkName: "BasicList" */'@/views/list/basic-list/index.vue'),
            meta: {
              title: 'pages.list.basicList.title'
            }
          },
          {
            path: '/list/card-list',
            name: 'CardList',
            component: () => import(/* webpackChunkName: "CardList" */'@/views/list/card-list/index.vue'),
            meta: {
              title: 'pages.list.cardList.title'
            }
          }
        ]
      },
      // profile
      {
        path: '/profile',
        name: 'Profile',
        component: RouteView,
        redirect: '/profile/basic',
        meta: {
          title: 'pages.profile.title',
          icon: 'UnorderedListOutlined'
        },
        children: [
          {
            path: '/profile/basic',
            name: 'BasicProfile',
            component: () => import(/* webpackChunkName: "BasicProfile" */'@/views/profile/basic-profile/index.vue'),
            meta: {
              title: 'pages.profile.basicProfile.title'
            }
          },
          {
            path: '/profile/advance',
            name: 'AdvanceProfile',
            component: () => import(/* webpackChunkName: "AdvanceProfile" */'@/views/profile/advance-profile/index.vue'),
            meta: {
              title: 'pages.profile.advanceProfile.title'
            }
          }
        ]
      },
      // exception
      {
        path: '/exception',
        name: 'Exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: {
          title: 'pages.exception.title',
          icon: 'WarningOutlined'
        },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "403" */ '@/views/exception/403.vue'),
            meta: {
              title: 'pages.exception.403.title'
            }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "404" */ '@/views/exception/404.vue'),
            meta: { title: 'pages.exception.404.title' }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "500" */ '@/views/exception/500.vue'),
            meta: { title: 'pages.exception.500.title' }
          }
        ]
      },
      // result
      {
        path: '/result',
        name: 'Result',
        component: RouteView,
        redirect: '/result/success',
        meta: {
          title: 'pages.result.title',
          icon: 'CheckCircleOutlined'
        },
        children: [
          {
            path: '/result/success',
            name: 'Success',
            component: () => import(/* webpackChunkName: "success" */'@/views/result/success/index.vue'),
            meta: {
              title: 'pages.result.success.title'
            }
          },
          {
            path: '/result/fail',
            name: 'Fail',
            component: () => import(/* webpackChunkName: "fail" */'@/views/result/fail/index.vue'),
            meta: {
              title: 'pages.result.fail.title'
            }
          }
        ]
      },
      // account
      {
        path: '/account',
        name: 'Account',
        component: RouteView,
        redirect: '/account/center',
        meta: {
          title: 'pages.account.title',
          icon: 'AppstoreAddOutlined'
        },
        children: [
          {
            path: '/account/center',
            name: 'Center',
            component: () => import(/* webpackChunkName: "center" */'@/views/account/center/index.vue'),
            meta: {
              title: 'pages.account.center.title'
            }
          },
          {
            path: '/account/settings',
            name: 'Settings',
            component: () => import(/* webpackChunkName: "settings" */'@/views/account/settings/index.vue'),
            redirect: '/account/settings/base',
            meta: {
              title: 'pages.account.settings.title',
              hideChildrenInMenu: true
            },
            children: [
              {
                path: '/account/settings/base',
                name: 'Base',
                component: () => import(/* webpackChunkName: "base" */'@/views/account/settings/base/index.vue'),
                meta: {
                  title: 'pages.account.settings.base.title'
                }
              },
              {
                path: '/account/settings/security',
                name: 'Security',
                component: () => import(/* webpackChunkName: "security" */'@/views/account/settings/security/index.vue'),
                meta: {
                  title: 'pages.account.settings.security.title'
                }
              },
              {
                path: '/account/settings/custom',
                name: 'Custom',
                component: () => import(/* webpackChunkName: "custom" */'@/views/account/settings/custom/index.vue'),
                meta: {
                  title: 'pages.account.settings.custom.title'
                }
              },
              {
                path: '/account/settings/binding',
                name: 'Binding',
                component: () => import(/* webpackChunkName: "binding" */'@/views/account/settings/binding/index.vue'),
                meta: {
                  title: 'pages.account.settings.binding.title'
                }
              },
              {
                path: '/account/settings/notification',
                name: 'Notification',
                component: () => import(/* webpackChunkName: "notification" */'@/views/account/settings/notification/index.vue'),
                meta: {
                  title: 'pages.account.settings.notification.title'
                }
              }
            ]
          }
        ]
      },
      // system
      {
        path: '/system',
        name: 'System',
        component: RouteView,
        redirect: 'system/role-list',
        meta: {
          title: 'pages.system.title',
          icon: 'TableOutlined'
        },
        children: [
          {
            path: '/system/role-list',
            name: 'RoleList',
            component: () => import(/* webpackChunkName: "roleList" */'@/views/system/role-list/index.vue'),
            meta: {
              title: 'pages.system.roleList.title'
            }
          },
          {
            path: '/system/permission-list',
            name: 'PermissionList',
            component: () => import(/* webpackChunkName: "permissionList" */'@/views/system/permission-list/index.vue'),
            meta: {
              title: 'pages.system.permissionList.title'
            }
          }
        ]
      },
      // jump url
      {
        path: '/jumpUrl',
        name: 'JumpUrl',
        component: RouteView,
        redirect: '/jumpUrl/router',
        meta: {
          title: 'pages.jumpUrl.title',
          icon: 'LinkOutlined'
        },
        children: [
          {
            path: '/jumpUrl/router',
            name: 'Router',
            component: () => import(/* webpackChunkName: "router" */'@/views/examples/jump-url/router.vue'),
            meta: {
              title: 'pages.jumpUrl.router.title'
            }
          },
          {
            path: 'https://github.com/vueComponent/ant-design-vue',
            name: 'Github',
            meta: {
              title: 'pages.jumpUrl.github.title',
              target: '_blank'
            },
            component: () => null
          }
        ]
      },
      // examples
      {
        path: '/examples',
        name: 'Examples',
        component: RouteView,
        redirect: '/examples/button',
        meta: {
          title: 'pages.examples.title',
          icon: 'AppstoreAddOutlined'
        },
        children: [
          {
            path: '/examples/button',
            name: 'Button',
            component: () => import(/* webpackChunkName: "button" */'@/views/examples/button/index.vue'),
            meta: {
              title: 'pages.examples.button.title'
            }
          },
          {
            path: '/examples/input',
            name: 'Input',
            component: () => import(/* webpackChunkName: "button" */'@/views/examples/input/index.vue'),
            meta: {
              title: 'pages.examples.input.title'
            }
          },
          {
            path: '/examples/rate',
            name: 'Rate',
            component: () => import(/* webpackChunkName: "rate" */'@/views/examples/rate/index.vue'),
            meta: {
              title: 'pages.examples.rate.title'
            }
          }
        ]
      },
      // nested
      {
        path: '/nested',
        name: 'Nested',
        component: RouteView,
        redirect: '/nested/menu1',
        meta: {
          title: 'pages.nested.title',
          icon: 'AppstoreAddOutlined'
        },
        children: [
          {
            path: '/nested/menu1',
            name: 'Menu1',
            component: () => import(/* webpackChunkName: "menu1" */ '@/views/examples/nested/menu1.vue'),
            redirect: '/nested/menu1/menu1-1',
            meta: { title: 'pages.nested.menu1.title' },
            children: [
              {
                path: '/nested/menu1/menu1-1',
                name: 'Menu1-1',
                component: () => import(/* webpackChunkName: "menu1-1" */'@/views/examples/nested/menu1-1.vue'),
                meta: { title: 'pages.nested.menu1-1.title' }
              },
              {
                path: '/nested/menu1/menu1-2',
                name: 'Menu1-2',
                component: () => import(/* webpackChunkName: "menu1-2" */'@/views/examples/nested/menu1-2.vue'),
                redirect: '/nested/menu1/menu1-2/menu1-2-1',
                meta: { title: 'pages.nested.menu1-2.title' },
                children: [
                  {
                    path: '/nested/menu1/menu1-2/menu1-2-1',
                    name: 'Menu1-2-1',
                    component: () => import(/* webpackChunkName: "menu1-2-1" */'@/views/examples/nested/menu1-2-1.vue'),
                    meta: { title: 'pages.nested.menu1-2-1.title' }
                  }
                ]
              }
            ]
          },
          {
            path: '/nested/menu2',
            name: 'Menu2',
            component: () => import(/* webpackChunkName: "menu2" */ '@/views/examples/nested/menu2.vue'),
            meta: { title: 'pages.nested.menu2.title' }
          },
          {
            path: '/nested/menu3',
            name: 'Menu3',
            component: () => import(/* webpackChunkName: "menu3" */ '@/views/examples/nested/menu3.vue'),
            redirect: '/nested/menu3/menu3-1',
            meta: {
              title: 'pages.nested.menu3.title',
              hideChildrenInMenu: true
            },
            children: [
              {
                path: '/nested/menu3/menu3-1',
                name: 'Menu3-1',
                component: () => import(/* webpackChunkName: "menu3-1" */ '@/views/examples/nested/menu3-1.vue'),
                meta: { title: 'pages.nested.menu3-1.title' }
              }
            ]
          }
        ]
      }
    ]
  }
]
