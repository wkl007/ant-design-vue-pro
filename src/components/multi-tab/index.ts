import {
  cloneVNode,
  createVNode,
  defineComponent,
  inject,
  KeepAlive,
  provide,
  reactive,
  toRaw,
  UnwrapRef,
  watch
} from 'vue'
import { RouteLocationNormalized, useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { flattenChildren } from '@/utils/vnode-util'
import { generateUuid } from '@/utils'

export type CacheKey = string;

export interface CacheItem {
  path: CacheKey;
  route: RouteLocationNormalized;
  name?: string;
  key?: string;
  lock?: boolean;
}

export interface MultiTabStore {
  cacheList: CacheItem[];
  current: CacheKey;
  include: string[];
  exclude: string[];
}

export type CallerFunction = {
  close: (path: CacheKey) => void;
  closeLeft: (selectedPath: CacheKey) => void;
  closeRight: (selectedPath: CacheKey) => void;
  closeOther: (selectedPath: CacheKey) => void;
  getCaches: () => void;
  clearCache: (path: CacheKey) => void;
  refresh: (path?: CacheKey | undefined) => void;
}

export type Options = {
  defaultHomePage?: string;
}

export type MultiTabType = CallerFunction;

// const MULTI_TAB_STORE_KEY: InjectionKey<MultiTabStore> = Symbol('multiTabStore')
const MULTI_TAB_STORE_KEY = 'multiTabStore'

// 创建生产者
export function useMultiTabStateProvider (initCacheList: Omit<CacheItem, 'component' | 'key'>[] = []): UnwrapRef<MultiTabStore> {
  // 定义保留的多标签状态
  const state = reactive<MultiTabStore>({
    cacheList: [],
    current: '',
    exclude: [],
    include: []
  })
  state.cacheList.push(...initCacheList.map(item => ({
    ...item,
    key: generateUuid()
  } as CacheItem)))
  provide(MULTI_TAB_STORE_KEY, state)
  return state
}

// 提供多标签数据
export function injectMultiTabStore (): MultiTabStore {
  return inject(MULTI_TAB_STORE_KEY, {} as MultiTabStore)
}

// 创建消费端
export const MultiTabStoreConsumer = defineComponent({
  name: 'MultiTabStoreConsumer',
  setup (props, { slots = {} }) {
    const route = useRoute()
    const state = injectMultiTabStore()

    watch(
      () => route.fullPath,
      () => {
        state.current = route.path
        const index = state.cacheList.findIndex(item => item.path === route.path)
        if (state.cacheList[index]) state.cacheList[index].route = { ...route }
      },
      { immediate: true }
    )

    function hasCache (path: CacheKey): CacheItem | undefined {
      return state.cacheList.find(item => item.path === path)
    }

    return () => {
      const component = flattenChildren((slots.default && slots.default()) || [])[0]
      if (!component) return null
      const comp: any = component.type
      let name: any = comp.displayName || comp.name
      const newVNode = component as any
      if (!name && newVNode) {
        // 没有设置组件名字
        name = route.name
      }
      // 是否存在cache
      let cacheItem = hasCache(route.path)
      if (!cacheItem) {
        cacheItem = {
          path: route.path,
          route: { ...route },
          name,
          key: generateUuid(),
          lock: !!route.meta.lock
        }
        state.cacheList.push(cacheItem)
      }
      newVNode.type.name = name
      const key = `${name}-${cacheItem.key}-${route.fullPath}`
      if (route.meta.keepAlive === false && cacheItem.name && state.exclude.indexOf(cacheItem.name) < 0) {
        state.exclude.push(cacheItem.name)
      }
      return createVNode(KeepAlive, { exclude: state.exclude }, { default: () => cloneVNode(newVNode, { key }) }
      )
    }
  }
})

// 多标签封装
export function useMultiTab (): MultiTabType {
  const router = useRouter()
  const route = useRoute()
  const state = injectMultiTabStore()

  // 清除缓存
  function clearCache (path: CacheKey): void {
    const cacheItem = state.cacheList.find(item => item.path === path) || ({ name: '' } as CacheItem)
    state.exclude = [cacheItem?.name as string]
    setTimeout(() => {
      state.exclude = []
    })
  }

  // 关闭页签
  function close (path?: CacheKey): void {
    if (!path) path = state.current
    const currentPageIndex = state.cacheList.findIndex(item => item.path === path)
    if (state.cacheList.length === 1) {
      message.info('这是最后一个标签了, 无法被关闭')
      return
    }
    clearCache(path)
    if (path !== state.current) {
      state.cacheList.splice(currentPageIndex, 1)
      return
    }
    const targetIndex = currentPageIndex === 0 ? currentPageIndex + 1 : currentPageIndex - 1
    router
      .replace(state.cacheList[targetIndex].route)
      .then(() => { state.cacheList.splice(currentPageIndex, 1) })
      .catch()
  }

  // 获取缓存
  function getCaches (): CacheItem[] {
    return state.cacheList
  }

  // 刷新页面
  function refresh (path?: CacheKey | undefined): Promise<void> {
    if (!path) path = state.current
    clearCache(path)
    const cacheItemIndex = state.cacheList.findIndex(item => item.path === path)
    const cacheItem = state.cacheList[cacheItemIndex]

    state.cacheList[cacheItemIndex] = { ...toRaw(cacheItem), key: generateUuid() }

    return new Promise<void>(resolve => {
      router
        .replace(cacheItem?.route || { path })
        .finally(() => {
          // 模拟loading效果，加载太快，loading 不明显，主动加个延时 ，如不需要可删除延迟
          setTimeout(() => {
            resolve()
          }, 900)
        })
    })
  }

  // 清除缓存
  function deleteCaches (start: number, num: number): void {
    const list = state.cacheList
    const end = start + num
    const newList = []
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      if (i < start || i >= end || item.lock) {
        newList.push(item)
      }
    }
    state.cacheList = newList
  }

  // 关闭左侧
  function closeLeft (selectedPath: CacheKey): void {
    const index = state.cacheList.findIndex(item => item.path === selectedPath)
    const currentIndex = state.cacheList.findIndex(item => item.path === route.path)
    if (currentIndex < index) {
      router
        .replace(state.cacheList[index].route)
        .then(() => {
          deleteCaches(0, index)
        })
        .catch()
    } else {
      deleteCaches(0, index)
    }
  }

  // 关闭右侧
  function closeRight (selectedPath: CacheKey): void {
    const index = state.cacheList.findIndex(item => item.path === selectedPath)
    const currentIndex = state.cacheList.findIndex(item => item.path === route.path)
    if (currentIndex > index) {
      router
        .replace(state.cacheList[index].route)
        .then(() => {
          deleteCaches(index + 1, state.cacheList.length - index - 1)
        })
        .catch()
    } else {
      deleteCaches(index + 1, state.cacheList.length - index - 1)
    }
  }

  // 关闭其他
  function closeOther (selectedPath: CacheKey): void {
    const index = state.cacheList.findIndex(cached => cached.path === selectedPath)
    router
      .replace(state.cacheList[index].route)
      .then(() => {
        deleteCaches(index + 1, state.cacheList.length - index - 1)
        deleteCaches(0, index)
      })
      .catch()
  }

  return {
    close,
    getCaches,
    clearCache,
    closeLeft,
    closeRight,
    closeOther,
    refresh
  }
}
