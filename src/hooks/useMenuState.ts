import { computed, ComputedRef, inject, onMounted, reactive, Ref, ref, toRefs, watch } from 'vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import type { ContentWidth, Layout, MenuTheme } from '@/types/store/app'
import { xor } from 'lodash-es'
import { asyncRoutes } from '@/router/router.config'
import { RouteProps } from '@/types/router'

export interface MenuState {
  collapsed?: boolean;
  selectedKeys?: string[];
  openKeys?: string[];
  current?: string;
  isMobile?: Ref<boolean>;
}

export interface Breadcrumb {
  path: string;
  breadcrumbName: string;
}

type LayoutState = {
  layout: Ref<Layout>;
  theme: Ref<MenuTheme>;
  contentWidth: ComputedRef<ContentWidth>;
  fixedSidebar: Ref<boolean>;
  fixedHeader: Ref<boolean>;
  splitMenus: Ref<boolean>;
  transitionName: Ref<string>;
  multiTab: Ref<boolean>;
  multiTabFixed: Ref<boolean>;
}

interface MenuStated extends LayoutState {
  isMobile: Ref<boolean>;
  hasSideMenu: ComputedRef<boolean>;
  isTopMenu: ComputedRef<boolean>;
  sideWidth: ComputedRef<number | undefined>;
  secondSideWidth: Ref<number>;
  collapsedWidth: number;
  breadcrumb: Ref<Breadcrumb[]>;
  collapsed: Ref<boolean | undefined> | undefined;
  selectedKeys: Ref<string[]> | undefined;
  openKeys: Ref<string[]> | undefined;
  updateSelectKeys: (keys: string[]) => void;
  updateCollapsed: (collapsed: boolean) => void;
}

interface MenuMap {
  parentKeys?: string[];
}

type MenuKeyMap = Record<string, MenuMap>;

interface MenuInfo {
  menus: RouteProps[];
  menuKeyMap: MenuKeyMap;
}

const sideWidth = 208 // 导航宽度
const collapsedWidth = 48 // 收缩状态导航宽度
const firstSideWidth = 140 // 左侧混合布局一级菜单宽度
const secondSideWidth = 160 // 左侧混合布局二级菜单宽度

const state = reactive<MenuState>({
  collapsed: false,
  openKeys: [],
  selectedKeys: [],
  current: undefined
})

let res: MenuStated | null = null

export const MenuStateSymbol = 'proGlobalMenuState'

/**
 * 获取菜单信息
 * @param routes
 */
export function getMenuInfo (routes: RouteRecordRaw[]): MenuInfo {
  const menuKeyMap: MenuKeyMap = {}

  function generateMenuInfo (routes: RouteRecordRaw[], parentKeys: string[] = []): RouteProps[] {
    return routes.map(route => {
      const currentRouter: RouteProps = { ...route }
      menuKeyMap[currentRouter.path] = { parentKeys }
      if (route.meta?.hideChildrenInMenu) {
        route.children
          ?.map(item => item.path)
          .forEach(value => (menuKeyMap[value] = { parentKeys: [...parentKeys, currentRouter.path] }))
      }
      // 是否有子菜单，并递归处理
      if (route?.children?.length && !route.meta?.hideChildrenInMenu) {
        currentRouter.children = generateMenuInfo(route.children, [...parentKeys, currentRouter.path])
      } else {
        currentRouter.children = []
      }
      return currentRouter
    })
  }

  const menus = generateMenuInfo(routes, [])

  return {
    menus,
    menuKeyMap
  }
}

/**
 * 获取子菜单列表
 * @param menus
 */
export function getMenuFirstChildren (menus: RouteProps[]): RouteProps[] {
  return menus.map(menu => {
    const { children, ...rest } = menu
    return rest
  })
}

/**
 * 查找特定子菜单
 * @param menus
 * @param key
 */
export function findMenuChildren (menus: RouteProps[], key: string | symbol): RouteProps[] {
  return (menus?.find(item => item.name === key)?.children) || []
}

/**
 * 过滤菜单路由
 * @param routes
 */
export function filterMenu (routes: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
  return routes.find(item => item.name === 'index')?.children || []
}

/**
 * 获取菜单数据
 */
export function injectMenuState (): MenuStated {
  return inject(MenuStateSymbol, {} as MenuStated)
}

/**
 * 菜单状态管理 hooks
 * @param initialState
 */
export function useMenuState (initialState?: MenuState): MenuStated {
  const { t, locale } = useI18n()
  const route = useRoute()
  const router = useRouter()
  const store = useStore()
  const isMobile = initialState?.isMobile || inject('isMobile', ref(false))
  Object.assign(state, res ? {} : initialState)

  const layoutState = reactive<LayoutState>({
    layout: computed(() => (isMobile.value ? 'side' : store.getters.layout)),
    theme: computed(() => {
      const { navTheme } = store.getters
      return navTheme === 'realDark' ? 'dark' : navTheme
    }),
    fixedSidebar: computed(() => store.getters.fixedSidebar),
    fixedHeader: computed(() => store.getters.fixedHeader),
    contentWidth: computed(() => store.getters.contentWidth),
    splitMenus: computed(() => store.getters.splitMenus),
    transitionName: computed(() => store.getters.transitionName),
    multiTab: computed(() => store.getters.multiTab),
    multiTabFixed: computed(() => store.getters.multiTabFixed)
  })

  const hasSideMenu = computed(() => layoutState.layout !== 'top')
  const isTopMenu = computed(() => layoutState.layout === 'top')

  const menuWidth = computed(() => {
    if (isMobile.value) return sideWidth
    const width = layoutState.layout === 'left' ? firstSideWidth : sideWidth
    return hasSideMenu.value ? (state.collapsed ? collapsedWidth : width) : 0
  })

  const { menuKeyMap } = getMenuInfo(filterMenu(asyncRoutes))

  const breadcrumb = ref<Breadcrumb[]>([])

  // 获取展开的菜单
  function getOpenKeysBySelectKey (key: string): string[] {
    return menuKeyMap[key]?.parentKeys || []
  }

  // 更新菜单状态
  function updateMenuState (path: string) {
    const cachedKeys = getOpenKeysBySelectKey(path)
    state.selectedKeys = [...cachedKeys, path]
  }

  // 更新面包屑导航
  function updateBreadcrumb () {
    breadcrumb.value = route.matched.concat().map(r => {
      return {
        path: r.path,
        breadcrumbName: r.path === '/' ? t('pages.home') : t(`${r.meta.title}`)
      }
    })
  }

  // 更新选中菜单
  function updateSelectKeys (keys: string[]) {
    state.selectedKeys = keys
  }

  // 更新收缩展开状态
  function updateCollapsed (collapsed: boolean) {
    state.collapsed = !collapsed
  }

  // 设置展开菜单
  watch(
    () => state.collapsed,
    () => {
      if (state.collapsed && !isMobile.value) {
        state.openKeys = []
      } else {
        state.openKeys = getOpenKeysBySelectKey(route.path)
      }
    }
  )

  // 布局发生变化展开的菜单置空
  watch([computed(() => layoutState.layout), computed(() => layoutState.splitMenus)], () => {
    state.openKeys = []
  })

  watch(
    () => state.selectedKeys,
    () => {
      if (state.selectedKeys) {
        if (isMobile.value) state.collapsed = true
        const path = state.selectedKeys[state.selectedKeys.length - 1]

        if (!state.collapsed &&
          layoutState.layout !== 'left' &&
          (layoutState.layout === 'side' || layoutState.layout === 'mix' || layoutState.splitMenus === true)
        ) {
          const openKeys = getOpenKeysBySelectKey(path)
          if (xor(state.openKeys, openKeys).length) {
            state.openKeys = openKeys || []
          }
        }

        router.push({
          path
        })
      }
    }
  )

  onMounted(() => {
    watch(
      () => route.path,
      () => {
        updateMenuState(route.path)
        updateBreadcrumb()
      }
    )

    watch(
      () => locale.value,
      () => updateBreadcrumb()
    )
  })

  res = {
    ...toRefs(state),
    ...toRefs(layoutState),
    isMobile,
    hasSideMenu,
    isTopMenu,
    sideWidth: menuWidth,
    secondSideWidth: ref(secondSideWidth),
    breadcrumb,
    collapsedWidth,
    updateSelectKeys,
    updateCollapsed
  } as MenuStated

  return res
}
