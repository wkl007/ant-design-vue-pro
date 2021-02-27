<template>
  <div v-if="cacheListLength">
    <div class="ant-pro-multi-tab-fixed" v-if="fixed"></div>
    <a-tabs
      type="editable-card"
      v-bind="$attrs"
      :activeKey="activeKey"
      :style="{
        margin: 0,
        paddingTop: '6px',
        width: sideWidth,
      }"
      hide-add
      :class="{ 'ant-pro-multi-tab-wrap': true, 'ant-pro-multi-tab-wrap-fixed': fixed }"
      @change="handleActiveKeyChange"
      @edit="handleEdit"
    >
      <template #tabBarExtraContent>
        <a-dropdown>
          <ellipsis-outlined
            :rotate="90"
            class="ant-dropdown-link ant-pro-multi-tab-dropdown-menu-btn"
          />
          <template #overlay>
            <a-menu>
              <!-- <a-menu-item
                key="close-all"
                @click="handleCloseAll"
                :disabled="cacheListLength === 1"
              >
                关闭全部
              </a-menu-item> -->
              <a-menu-item
                key="close-other"
                @click="closeOther(route.path)"
                :disabled="cacheListLength === 1"
              >
                关闭其他
              </a-menu-item>
              <a-menu-item
                key="refresh"
                @click="handleReloadPage(undefined)"
              >
                刷新当前页
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
      <a-tab-pane
        class="contextmenu-wrap"
        v-for="(item, index) in store.cacheList"
        :key="item.route.path"
        :closable="cacheListLength > 1 && !item.lock"
      >
        <template #tab>
          <a-dropdown :trigger="['contextmenu']">
            <span>
              {{ t(`${item.route.meta.title}`) }}
              <reload-outlined
                v-if="store.current === item.route.path"
                class="ant-pro-multi-tab-reload-btn"
                :spin="spin"
                @click="handleReloadPage(item.route.path)"
              />
            </span>
            <template #overlay>
              <a-menu>
                <a-menu-item
                  :disabled="cacheListLength === 1"
                  key="close-other"
                  @click="closeOther(item.route.path)"
                >
                  关闭其他
                </a-menu-item>
                <a-menu-item
                  key="close-left"
                  :disabled="index === 0"
                  @click="closeLeft(item.route.path)"
                >
                  关闭到左侧
                </a-menu-item>
                <a-menu-item
                  :disabled="index + 1 === cacheListLength"
                  key="close-right"
                  @click="closeRight(item.route.path)"
                >
                  关闭到右侧
                </a-menu-item>
                <!-- <a-menu-item @click="handleCloseAll" :disabled="cacheListLength === 1">
                  关闭全部
                </a-menu-item> -->
                <a-menu-item
                  @click="handleReloadPage(item.route.path)"
                >
                  刷新当前页
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed, inject, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { MultiTabStore, useMultiTab } from './index'
import { injectMenuState } from '@/hooks/useMenuState'
import { injectProProvider } from '@/components/base-layouts/pro-provider'

export default defineComponent({
  name: 'MultiTab',
  inheritAttrs: false,
  props: {
    store: {
      type: Object as PropType<MultiTabStore>,
      default: () => undefined
    },
    fixed: {
      type: Boolean,
      default: false
    },
    defaultHomePage: {
      type: String,
      default: '/dashboard/workplace'
    }
  },
  setup (props) {
    const route = useRoute()
    const { i18n: t } = injectProProvider()
    const menuState = injectMenuState()
    const { isMobile } = menuState
    const cacheListLength = computed(() => (props.store?.cacheList?.length || 0))
    const activeKey = computed(() => {
      return menuState.selectedKeys && menuState.selectedKeys.value[menuState.selectedKeys.value.length - 1]
    })

    const sideWidth = computed(() =>
      (menuState.sideWidth &&
        menuState.sideWidth.value &&
        !isMobile.value &&
        props.fixed &&
        `calc(100% - ${menuState.sideWidth.value}px)`) ||
      '100%'
    )
    const spin = ref(false)

    const { refresh, close, closeAll, closeLeft, closeRight, closeOther } = useMultiTab()

    function handleActiveKeyChange (key: string): void {
      menuState.selectedKeys && (menuState.selectedKeys.value = [key])
    }

    async function handleReloadPage (key?: string) {
      spin.value = true
      await refresh(key)
      spin.value = false
    }

    function handleCloseAll () {
      closeAll()
    }

    function handleEdit (target: string, action: string): void {
      if (action === 'remove') close(target)
    }

    return {
      t,
      activeKey,
      route,
      spin,
      sideWidth,
      cacheListLength,

      handleActiveKeyChange,
      handleReloadPage,
      handleCloseAll,
      closeLeft,
      closeRight,
      closeOther,
      handleEdit
    }
  }
})
</script>

<style scoped lang="less">
@import "../base-layouts/basic-layout";

@multi-tab-height: 62px;

.ant-pro-multi-tab-wrap {
  background: @component-background;
}

.ant-pro-multi-tab-wrap :deep(.ant-tabs-bar) {
  padding-left: 16px;
}

.ant-pro-multi-tab-fixed {
  width: 100%;
  height: @multi-tab-height;
  background: transparent;
}

.ant-pro-multi-tab-wrap-fixed {
  position: fixed;
  top: @pro-layout-header-height;
  right: 0;
  z-index: 9;
  width: 100%;
  height: @multi-tab-height;
  transition: width 0.2s;
}

.ant-pro-multi-tab-dropdown-menu-btn {
  margin-right: 8px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: @primary-color;
  }
}

.ant-pro-multi-tab-reload-btn {
  margin-left: 8px;
  color: @text-color-secondary;
  font-size: 12px;

  &:hover {
    color: @primary-color;
  }
}
</style>
