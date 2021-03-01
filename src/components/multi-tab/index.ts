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
  const route = useRoute()

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
      .replace({ path: state.cacheList[targetIndex].route.path })
      .then(() => { state.cacheList.splice(currentPageIndex, 1) })
      .catch()
  }

  // 打开页面
  function open (path: CacheKey): void {
    router.push({ path }).then().catch()
  }

  // 获取缓存
  function getCaches (): Map<CacheKey, CacheItem> {
    return state.caches
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
        .replace({ path: (cacheItem?.route.path || path) as string })
        .finally(() => {
          // 模拟loading效果，加载太快，loading 不明显，主动加个延时 ，如不需要可删除延迟
          setTimeout(() => {
            resolve()
          }, 900)
        })
    })
  }

  // 关闭所有
  function closeAll () {
    state.cacheList = []
    state.caches = new Map<CacheKey, CacheItem>()
  }

  // 清除缓存
  function deleteCaches (start: number, index: number): void {
    const closed = state.cacheList.splice(start, index)
    closed.forEach(item => {
      state.caches.delete(item.path)
    })
  }

  // 关闭左侧
  function closeLeft (selectedPath: CacheKey): void {
    const index = state.cacheList.findIndex(item => item.path === selectedPath)
    const currentIndex = state.cacheList.findIndex(item => item.path === route.path)
    if (currentIndex < index) {
      router
        .replace({ path: selectedPath })
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
        .replace({ path: selectedPath })
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
      .replace({ path: selectedPath })
      .then(() => {
        deleteCaches(index + 1, state.cacheList.length - index - 1)
        deleteCaches(0, index)
      })
      .catch()
  }

  return { open, close, getCaches, clearCache, closeAll, closeLeft, closeRight, closeOther, refresh }
}
