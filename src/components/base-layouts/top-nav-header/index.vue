<template>
  <div :class="classNames">
    <div :class="headerClassName">
      <div
        :class="`${prefixedClassName}-main-left`"
        @click="handleMenuHeaderClick"
      >
        <div :class="`${prefixedClassName}-logo`">
          <slot v-if="hasLogoSlot" name="logo"/>
          <div v-else>
            <router-link :to="{ name: 'index' }">
              <img :src="images.base_logo" alt="logo"/>
              <h1>Admin Pro</h1>
            </router-link>
          </div>
        </div>
      </div>
      <div :style="{ flex: 1 }" :class="`${prefixedClassName}-menu`">
        <base-menu
          v-if="menus.length"
          mode="horizontal"
          :i18n="i18n"
          :theme="theme"
          :menus="menus"
          :open-keys="openKeys"
          :selected-keys="selectedKeys"
          @update:openKeys="handleOpenKeys"
          @update:selectedKeys="handleSelectedKeys"
        />
      </div>
      <right-content>
        <slot name="rightContent"/>
      </right-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, inject } from 'vue'
import BaseMenu from '@/components/base-layouts/base-menu/index.vue'
import RightContent from './right-content.vue'
import { useProProvider } from '../pro-provider'

export default defineComponent({
  name: 'TopNavHeader',
  props: {
    prefixCls: {
      type: String,
      default: undefined
    },
    layout: {
      type: String,
      default: 'side'
    },
    theme: {
      type: String,
      default: 'dark'
    },
    contentWidth: {
      type: String,
      default: 'Fluid'
    },
    // menu
    menus: {
      type: Array,
      default: (): Array<any> => []
    },
    openKeys: {
      type: Array,
      required: true
    },
    selectedKeys: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseMenu,
    RightContent
  },
  emits: ['update:openKeys', 'update:selectedKeys'],
  setup (props, { slots, emit }) {
    const { theme, contentWidth, prefixCls: customizePrefixCls } = toRefs(props)
    const { i18n, getPrefixCls } = useProProvider()
    const prefixedClassName = customizePrefixCls.value || getPrefixCls('top-nav-header')
    const hasMix = computed(() => props.layout === 'mix')
    const classNames = computed(() => {
      return {
        [prefixedClassName]: true,
        light: theme.value === 'light'
      }
    })
    const headerClassName = computed(() => {
      return {
        [`${prefixedClassName}-main`]: true,
        wide: contentWidth.value === 'Fixed'
      }
    })
    const { logo: hasLogoSlot } = slots

    function handleSelectedKeys (selectedKeys: string[]): void {
      emit('update:selectedKeys', selectedKeys)
    }

    function handleOpenKeys (openKeys: string[]): void {
      emit('update:openKeys', openKeys)
    }

    function handleMenuHeaderClick (): void {}

    return {
      images: inject('images'),
      i18n,
      classNames,
      headerClassName,
      prefixedClassName,
      hasMix,
      hasLogoSlot,

      handleSelectedKeys,
      handleOpenKeys,
      handleMenuHeaderClick
    }
  }
})
</script>

<style lang="less">
@import "../basic-layout";

@top-nav-header-prefix-cls: ~'@{ant-prefix}-pro-top-nav-header';

.@{top-nav-header-prefix-cls} {
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  transition: background 0.3s, width 0.2s;

  .@{ant-prefix}-menu {
    background: transparent;
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    color: @component-background;
  }

  .ant-menu {
    line-height: inherit;
  }

  .@{ant-prefix}-menu-submenu.@{ant-prefix}-menu-submenu-horizontal {
    height: 100%;

    .@{ant-prefix}-menu-submenu-title {
      height: 100%;
    }
  }

  &.light {
    background-color: @component-background;

    .@{top-nav-header-prefix-cls}-logo {
      h1 {
        color: @primary-color;
      }
    }

    .anticon {
      color: inherit;
    }
  }

  &-main {
    display: flex;
    height: 100%;
    padding-left: 16px;

    &-left {
      display: flex;
      min-width: 192px;
    }
  }

  .anticon {
    color: @btn-primary-color;
  }

  &-logo {
    position: relative;
    min-width: 165px;
    height: 100%;
    overflow: hidden;
    transition: all 0.3s;

    img {
      display: inline-block;
      height: 32px;
      vertical-align: middle;
    }

    h1 {
      display: inline-block;
      margin: 0 0 0 12px;
      color: @btn-primary-color;
      font-weight: 400;
      font-size: 16px;
      vertical-align: top;
    }
  }

  &-menu {
    min-width: 0;

    .@{ant-prefix}-menu.@{ant-prefix}-menu-horizontal {
      height: 100%;
      border: none;
    }
  }
}
</style>
