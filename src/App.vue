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
import { useMenuState, MenuStateSymbol } from '@/hooks/useMenuState'
import images from '@/assets/images'

export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()
    const i18n = useI18n()

    // 语言设置
    const lang = computed(() => store.getters.lang)
    if (lang.value) store.dispatch('setLang', lang.value)
    const locale = computed(() => i18n.getLocaleMessage(i18n.locale.value).antd)

    // 媒体查询设置
    const colSize = useMediaQuery()
    const isMobile = computed(() => colSize.value === 'sm' || colSize.value === 'xs')

    // 菜单状态管理
    const menuState = useMenuState({
      collapsed: isMobile.value,
      openKeys: [],
      selectedKeys: [],
      isMobile
    })

    // 主题
    const theme = computed(() => store.getters.navTheme)

    // 主题设置
    watch(
      theme,
      () => {
        console.log(theme.value)
        if (theme.value === 'realDark') {
          document
            .getElementsByTagName('html')[0]
            .setAttribute('data-pro-theme', 'antdv-pro-theme-dark')
        } else {
          document
            .getElementsByTagName('html')[0]
            .setAttribute('data-pro-theme', 'antdv-pro-theme-light')
        }
      },
      { immediate: true }
    )

    provide('images', reactive(images))
    provide('isMobile', isMobile)
    provide(MenuStateSymbol, menuState)
    provide('isRealDark', computed(() => theme.value === 'realDark'))

    return {
      locale
    }
  }
})
</script>
