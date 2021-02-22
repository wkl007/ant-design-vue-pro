<template>
  <pro-provider
    :i18n="t"
    :content-width="contentWidth"
  >
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
        <div class="basic-layout">
          <router-view/>
        </div>
      </a-layout>
    </a-layout>
  </pro-provider>
</template>

<script>
import { defineComponent, computed, inject, ref } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import SideMenu from '@/components/base-layouts/side-menu/index.vue'
import HeaderView from '@/components/base-layouts/header-view/index.vue'
import AvatarDropdown from '@/components/avatar-dropdown/index.vue'
import SelectLang from '@/components/select-lang/index.vue'
import { injectMenuState, getMenuInfo, filterMenu } from '@/hooks/useMenuState'

export default defineComponent({
  name: 'BasicLayout',
  components: {
    SideMenu,
    HeaderView,
    AvatarDropdown,
    SelectLang
  },
  setup () {
    const store = useStore()
    const { t } = useI18n()
    const menuState = injectMenuState()
    const menus = computed(() => getMenuInfo(filterMenu(store.getters.allowRouters)).menus)

    const hasTopMenu = computed(() => menuState.layout.value === 'top')

    const userInfo = computed(() => store.getters.userInfo)

    return {
      t,
      ...menuState,
      menus,
      hasTopMenu,
      userInfo
    }
  }
})
</script>

<style lang="less">
@import "~@/components/base-layouts/basic-layout.less";
</style>
