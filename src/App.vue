<template>
  <a-config-provider :locale="locale">
    <router-view/>
  </a-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { MENU_STATE_STORE_KEY, useMenuState } from '@/hooks/useMenuState'
import { useMultiTabStateProvider } from '@/components'
import images from '@/assets/images'

export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()
    const i18n = useI18n()

    // 多标签
    const multiTabState = useMultiTabStateProvider()

    // 语言设置
    const lang = computed(() => store.getters.lang)
    if (lang.value) store.dispatch('setLang', lang.value)
    const locale = computed(() => i18n.getLocaleMessage(i18n.locale.value).antd)

    // 媒体查询设置
    const colSize = useMediaQuery()
    const isMobile = computed(() => colSize.value === 'sm' || colSize.value === 'xs')

    // 菜单状态管理
    const menuState = useMenuState(
      {
        collapsed: isMobile.value,
        openKeys: [] as string[],
        selectedKeys: [] as string[],
        isMobile
      },
      multiTabState
    )

    // 主题
    const theme = computed(() => store.getters.navTheme)

    // 主题设置
    watch(
      theme,
      () => {
        if (theme.value === 'realDark') {
          document
            .getElementsByTagName('html')[0]
            .setAttribute('theme', 'dark')
        } else {
          document
            .getElementsByTagName('html')[0]
            .setAttribute('theme', 'light')
        }
      },
      { immediate: true }
    )

    provide('images', reactive(images))
    provide('isMobile', isMobile)
    provide(MENU_STATE_STORE_KEY, menuState)
    provide('isRealDark', computed(() => theme.value === 'realDark'))

    return {
      locale
    }
  }
})
</script>
