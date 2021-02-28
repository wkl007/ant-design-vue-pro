<template>
  <a-layout-header
    v-if="needFixedHeader"
    :style="{
      height: `${headerHeight}px`,
      lineHeight: `${headerHeight}px`,
      background: 'transparent'
    }"
  />
  <a-layout-header
    :class="classNames"
    :style="{
      padding: 0,
      height: `${headerHeight}px`,
      lineHeight: `${headerHeight}px`,
      width,
      zIndex: isMix ? 99 : 9,
      right,
    }"
  >
    <top-nav-header
      v-if="(isTop || isMix) && !isMobile"
      mode="horizontal"
      :theme="theme"
      :layout="layout"
      :menus="needShowMenu ? computedMenus : []"
      :open-keys="openKeys"
      :selected-keys="splitMenus ? openKeys : selectedKeys"
      @update:openKeys="handleOpenKeys"
      @update:selectedKeys="handleSelectedKeys"
    >
      <template #rightContent>
        <slot/>
      </template>
    </top-nav-header>
    <global-header
      v-else
      :is-mobile="isMobile"
      :layout="layout"
      :collapsed="collapsed"
      :collapsed-button="collapsedButton"
      @collapse="handleCollapse"
    >
      <template #rightContent>
        <slot/>
      </template>
    </global-header>
  </a-layout-header>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue'
import { injectProProvider } from '@/components'
import { getMenuFirstChildren } from '@/hooks/useMenuState'
import type { RouteProps } from '@/types/router'
import GlobalHeader from '../global-header/index.vue'
import TopNavHeader from '../top-nav-header/index.vue'

export default defineComponent({
  name: 'HeaderView',
  components: {
    GlobalHeader,
    TopNavHeader
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    layout: {
      type: String,
      default: 'side'
    },
    theme: {
      type: String,
      default: 'dark'
    },
    menus: {
      type: Array as PropType<RouteProps[]>,
      default: (): RouteProps[] => []
    },
    openKeys: {
      type: Array as PropType<string[]>,
      default: (): string[] => []
    },
    selectedKeys: {
      type: Array as PropType<string[]>,
      default: (): string[] => []
    },
    hasSideMenu: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: (): boolean => false
    },
    sideWidth: {
      type: Number,
      default: 208
    },
    collapsedWidth: {
      type: Number,
      default: 48
    },
    collapsedButton: {
      type: Boolean,
      default: true
    },
    headerHeight: {
      type: Number,
      default: 48
    },
    splitMenus: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: ''
    }
  },
  emits: ['update:openKeys', 'update:selectedKeys', 'update:collapsed'],
  setup (props, { emit }) {
    const { prefixCls: propPrefixCls, collapsed, fixedHeader, hasSideMenu, sideWidth, collapsedWidth, splitMenus, isMobile } = toRefs(props)
    const { i18n, getPrefixCls } = injectProProvider()
    const prefixCls = propPrefixCls.value || getPrefixCls()
    const isMix = computed(() => props.layout === 'mix')
    const isTop = computed(() => props.layout === 'top')
    const isLeft = computed(() => props.layout === 'left')
    const needShowMenu = computed(() => (isMix.value ? splitMenus.value : true))
    const needFixedHeader = computed(() => fixedHeader.value || isMix.value)
    const needSettingWidth = computed(() => needFixedHeader.value && hasSideMenu.value && !isTop.value && !isMobile.value)
    const computedMenus = computed(() => splitMenus.value ? getMenuFirstChildren(props.menus) : props.menus)

    const classNames = ref({
      [`${prefixCls}-fixed-header`]: needFixedHeader,
      [`${prefixCls}-top-menu`]: isTop.value
    })
    const width = computed(() =>
      // 收起状态 或是 left 布局模式时，计算收起宽度
      !isMix.value && needSettingWidth.value && !isMobile.value
        ? `calc(100% - ${
          collapsed.value || isLeft.value ? collapsedWidth.value : sideWidth.value
        }px)`
        : '100%'
    )
    const right = computed(() => (needFixedHeader.value ? 0 : undefined))

    // menu 选中
    function handleSelectedKeys (selectedKeys: string[]): void {
      emit('update:selectedKeys', selectedKeys)
    }

    // SubMenu 展开/关闭
    function handleOpenKeys (openKeys: string[]): void {
      emit('update:openKeys', openKeys)
    }

    // 收缩展开按钮点击
    function handleCollapse (collapsed: boolean): void {
      emit('update:collapsed', collapsed)
    }

    return {
      i18n,
      classNames,
      width,
      right,
      needFixedHeader,
      isTop,
      isMix,
      isLeft,
      needShowMenu,
      needSettingWidth,
      computedMenus,

      handleSelectedKeys,
      handleOpenKeys,
      handleCollapse
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.@{pro-layout-fixed-header-prefix-cls} {
  z-index: 9;
  width: 100%;
}
</style>
