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
        :wid="sideWidth"
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
import { injectMenuState, getMenuInfo, filterMenu } from '@/hooks/useMenuState'

export default defineComponent({
  name: 'BasicLayout',
  components: {
    SideMenu
  },
  setup () {
    const store = useStore()
    const { t } = useI18n()
    const menuState = injectMenuState()
    const menus = computed(() => getMenuInfo(filterMenu(store.getters.allowRouters)).menus)

    const hasTopMenu = computed(() => menuState.layout.value === 'top')

    return {
      t,
      ...menuState,
      menus,
      hasTopMenu
    }
  }
})
</script>

<style lang="less">
@import "~@/components/base-layouts/basic-layout.less";
</style>
