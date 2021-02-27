<template>
  <pro-provider>
    <a-layout class="ant-pro-basic-layout">
      <a-drawer
        v-if="isMobile"
        placement="left"
        :body-style="{ padding: 0, height: '100%' }"
        :width="sideWidth"
        :closable="false"
        :visible="!collapsed"
        @update:visible="updateCollapsed"
      >
        <side-menu
          style="height: 100%;"
          :theme="theme"
          :layout="layout"
          :fixed="fixedSidebar"
          :menus="menus"
          :side-width="sideWidth"
          :split-menus="false"
          :collapsed-button="false"
          :collapsed="false"
          v-model:open-keys="openKeys"
          v-model:selected-keys="selectedKeys"
        />
      </a-drawer>
      <side-menu
        v-else-if="!hasTopMenu"
        :theme="theme"
        :layout="layout"
        :fixed="fixedSidebar"
        :menus="menus"
        :side-width="sideWidth"
        :split-menus="splitMenus"
        :collapsed-button="!splitMenus"
        v-model:collapsed="collapsed"
        v-model:open-keys="openKeys"
        v-model:selected-keys="selectedKeys"
      />
      <a-layout>
        <header-view
          :theme="theme"
          :layout="layout"
          :menus="menus"
          :side-width="sideWidth"
          :has-side-menu="hasSideMenu"
          :fixed-header="fixedHeader"
          :split-menus="splitMenus"
          v-model:collapsed="collapsed"
          v-model:open-keys="openKeys"
          v-model:selected-keys="selectedKeys"
        >
          <div style="text-align: right;">
            <avatar-dropdown :user-info="userInfo"/>
            <select-lang/>
          </div>
        </header-view>
        <multi-tab
          v-if="multiTab"
          :store="multiTabStore"
          :fixed="multiTabFixed"
          :side-width="sideWidth"
        />
        <router-view v-slot="{Component}">
          <transition v-if="Component" :name="transitionName">
            <wrap-content>
              <component :is="Component"/>
            </wrap-content>
          </transition>
        </router-view>
        <global-footer/>
      </a-layout>
    </a-layout>
    <setting-drawer/>
  </pro-provider>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import SideMenu from '@/components/base-layouts/side-menu/index.vue'
import HeaderView from '@/components/base-layouts/header-view/index.vue'
import AvatarDropdown from '@/components/avatar-dropdown/index.vue'
import SelectLang from '@/components/select-lang/index.vue'
import WrapContent from '@/components/base-layouts/wrap-content/index.vue'
import GlobalFooter from '@/components/base-layouts/global-footer/index.vue'
import MultiTab from '@/components/multi-tab/index.vue'
import SettingDrawer from '@/components/setting-drawer/index.vue'
import { filterMenu, getMenuInfo, injectMenuState } from '@/hooks/useMenuState'
import { createMultiTabStoreProducer, MultiTabStoreProducer } from '@/components/multi-tab/index'

const multiTabStore = createMultiTabStoreProducer()

export default defineComponent({
  name: 'BasicLayout',
  components: {
    SideMenu,
    HeaderView,
    AvatarDropdown,
    SelectLang,
    WrapContent,
    GlobalFooter,
    MultiTab,
    SettingDrawer,
    MultiTabStoreProducer
  },
  setup () {
    const store = useStore()
    const menuState = injectMenuState()
    const menus = computed(() => getMenuInfo(filterMenu(store.getters.allowRouters)).menus)

    const hasTopMenu = computed(() => menuState.layout.value === 'top')

    const userInfo = computed(() => store.getters.userInfo)

    return {
      ...menuState,
      menus,
      hasTopMenu,
      userInfo,
      multiTabStore
    }
  }
})
</script>

<style lang="less">
@import "~@/components/base-layouts/basic-layout.less";
</style>
