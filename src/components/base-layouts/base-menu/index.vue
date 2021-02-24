<template>
  <a-menu
    :theme="theme"
    :mode="mode"
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    v-bind="dynamicProps"
    @openChange="handleOpenChange"
    @select="handleSelect"
    @mouseenter="$emit('mouseenter',$event)"
    @mouseleave="$emit('mouseleave',$event)"
  >
    <template
      v-for="(menu,index) in menus"
      :key="index"
    >
      <transform-v-node
        v-if="(!menu.children?.length || menu.meta?.hideChildrenInMenu) && !menu.meta?.hideInMenu"
        :key="menu.path"
        :by="customItem"
        :opt="menu"
      >
        <a-menu-item
          :key="menu.path"
          @mouseenter="$emit('itemHover',$event)"
        >
          <component
            v-if="menu.meta.icon"
            :is="menu.meta.icon"
          />
          <component
            v-else-if="collapsed && menu.meta.collapsedIcon"
            :is="menu.meta.collapsedIcon"
          />
          <span>{{ i18n ? i18n(menu.meta.title) : menu.meta.title }}</span>
        </a-menu-item>
      </transform-v-node>
      <sub-menu
        v-else-if="menu.children?.length"
        :menu="menu"
        :key="menu.path"
        :i18n="i18n"
        :collapsed="collapsed"
        @itemHover="$emit('itemHover',$event)"
      />
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, PropType, ref } from 'vue'
import SubMenu from './sub-menu.vue'
import type { RouteProps } from '@/types/router'

export const BaseMenuProps = {
  locale: {
    type: Boolean,
    default: false
  },
  menus: {
    type: Array as PropType<RouteProps[]>,
    required: true
  },
  mode: {
    type: String,
    default: 'inline'
  },
  theme: {
    type: String,
    default: 'dark'
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  openKeys: {
    type: Array,
    required: true
  },
  selectedKeys: {
    type: Array,
    required: true
  },
  customItem: {
    type: Function,
    default: undefined
  }
}

export default defineComponent({
  name: 'BaseMenu',
  components: {
    SubMenu
  },
  props: Object.assign(
    {},
    {
      i18n: {
        type: Function,
        default: (t: any): any => t
      }
    },
    BaseMenuProps
  ),
  emits: ['update:openKeys', 'update:selectedKeys', 'mouseenter', 'mouseleave', 'itemHover'],
  setup (props, { emit }) {
    const isInline = props.mode === 'inline'
    const dynamicProps = ref({ inlineCollapsed: isInline ? props.collapsed : undefined })

    function handleOpenChange (openKeys: string[]): void {
      emit('update:openKeys', openKeys)
    }

    function handleSelect (ctx: { [key: string]: any }): void {
      emit('update:selectedKeys', ctx.selectedKeys)
    }

    return {
      isInline,
      dynamicProps,
      handleOpenChange,
      handleSelect
    }
  }
})
</script>
