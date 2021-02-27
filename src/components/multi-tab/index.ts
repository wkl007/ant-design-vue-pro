import { cloneVNode, createVNode, defineComponent, KeepAlive, reactive, toRaw, watch } from 'vue'
import { RouteMeta, useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { flattenChildren } from '@/utils/vnode-util'
import { generateUuid } from '@/utils'

export type CacheKey = string;

export type CacheRoute = {
  path: string;
  meta: RouteMeta
} & Record<string, any>

export interface CacheItem {
  path: CacheKey;
  route: CacheRoute;
  name?: string;
  key?: string;
  lock?: boolean;
}

export interface MultiTabStore {
  caches: Map<CacheKey, CacheItem>;
  cacheList: CacheItem[];
  current: CacheKey;
  include: string[];
  exclude: string[];
  add: (item: CacheItem) => void;
}

export type CallerFunction = {
  open: (path: CacheKey) => void;
  close: (path: CacheKey) => void;
  closeAll: () => void;
  closeLeft: (selectedPath: CacheKey) => void;
  closeRight: (selectedPath: CacheKey) => void;
  closeOther: (selectedPath: CacheKey) => void;
  getCaches: () => void;
  clearCache: (path: CacheKey) => void;
  refresh: (path?: CacheKey | undefined) => void;
}

export type Options = {
  defaultHomePage?: string;
  allowCloseAll?: boolean;
}

export type MultiTabType = CallerFunction;

function hasCache (path: CacheKey): CacheItem | undefined {
  return state.cacheList.find(item => item.path === path)
}

const state = reactive<MultiTabStore>({
  cacheList: [],
  caches: new Map<CacheKey, CacheItem>(),
  current: '',
  exclude: [],
  include: [],
  add: (item: CacheItem) => {
    if (!state.cacheList.find(c => c.path === item.path)) state.cacheList.push(item)
  }
})

// 创建生产者
export const MultiTabStoreProducer = defineComponent({
  name: 'MultiTabStoreProducer',
  setup (props, { slots }) {
    const route = useRoute()

    watch(
      () => route.path,
      () => { state.current = route.path },
      { immediate: true }
    )

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
          key: generateUuid()
        }
        state.cacheList.push(cacheItem)
      }

      newVNode.type.displayName = name
      const key = `${name}-${cacheItem.key}`
      return createVNode(
        KeepAlive,
        { exclude: state.exclude },
        { default: () => cloneVNode(newVNode, { key }) }
      )
    }
  }
})

let initStore = false

export function createMultiTabStoreProducer (initCacheList: Omit<CacheItem, 'component' | 'key'>[] = []): MultiTabStore {
  if (initStore) return state
  state.cacheList.push(...initCacheList.map(item => ({ ...item, key: generateUuid() } as CacheItem)))
  initStore = true
  return state
}

export function useMultiTab (): MultiTabType {
  const router = useRouter()

  function clearCache (path: CacheKey): void {
    const cacheItem = state.cacheList.find(item => item.path === path) || ({ name: '' } as CacheItem)
    state.exclude = [cacheItem?.name as string]
    setTimeout(() => {
      state.exclude = []
    })
  }

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
      .replace({ path: state.cacheList[targetIndex].route.path })
      .then(() => { state.cacheList.splice(currentPageIndex, 1) })
      .catch()
  }

  function open (path: CacheKey): void {
    router.push({ path }).then().catch()
  }

  function getCaches (): Map<CacheKey, CacheItem> {
    return state.caches
  }

  function refresh (path?: CacheKey | undefined): Promise<void> {
    if (!path) path = state.current
    clearCache(path)
    const cacheItemIndex = state.cacheList.findIndex(item => item.path === path)
    const cacheItem = state.cacheList[cacheItemIndex]

    state.cacheList[cacheItemIndex] = { ...toRaw(cacheItem), key: generateUuid() }

    return new Promise<void>(resolve => {
      router
        .replace({ path: (cacheItem?.route.path || path) as string })
        .finally(() => {
          // 模拟loading效果，加载太快，loading 不明显，主动加个延时 ，如不需要可删除延迟
          setTimeout(() => {
            resolve()
          }, 900)
        })
    })
  }

  function closeAll () {
    state.cacheList = []
    state.caches = new Map<CacheKey, CacheItem>()
  }

  function closeLeft (selectedPath: CacheKey): void {
    const index = state.cacheList.findIndex(item => item.path === selectedPath)
    const closed = state.cacheList.splice(0, index)
    closed.forEach(item => {
      state.caches.delete(item.path)
    })
  }

  function closeRight (selectedPath: CacheKey): void {
    const index = state.cacheList.findIndex(item => item.path === selectedPath)
    const closed = state.cacheList.splice(index, state.cacheList.length - index)
    closed.forEach(item => {
      state.caches.delete(item.path)
    })
  }

  function closeOther (selectedPath: CacheKey): void {
    const index = state.cacheList.findIndex(cached => cached.path === selectedPath)
    const cacheItem = state.cacheList[index]
    const cachedComponent = state.caches.get(selectedPath) as CacheItem
    // 设置到剩下的最后一个标签页
    router
      .replace({ path: cacheItem.path })
      .then(() => {
        state.cacheList = [cacheItem]
        state.caches = new Map<CacheKey, CacheItem>()
        state.caches.set(selectedPath, cachedComponent)
      })
      .catch()
  }

  return { open, close, getCaches, clearCache, closeAll, closeLeft, closeRight, closeOther, refresh }
}
