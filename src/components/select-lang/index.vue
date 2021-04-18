<template>
  <a-dropdown
    class="ant-pro-dropdown ant-pro-dropdown-action" placement="bottomRight"
  >
    <global-outlined/>
    <template #overlay>
      <a-menu
        class="ant-pro-dropdown-menu"
        :selected-keys="[currentLang]"
        @click="handleMenuClick"
      >
        <a-menu-item
          v-for="locale in locales"
          :key="locale"
          :disabled="!languageSupports[locale]"
        >
          <span role="img" :aria-label="languageLabels[locale]">
            {{ languageIcons[locale] }}
          </span>
          {{ languageLabels[locale] }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { locales } from '@/locales'

const languageLabels = {
  'zh-CN': '简体中文',
  'zh-TW': '繁体中文',
  'en-US': 'English',
  'pt-BR': 'Português'
}
const languageIcons = {
  'zh-CN': '🇨🇳',
  'zh-TW': '🇭🇰',
  'en-US': '🇺🇸',
  'pt-BR': '🇧🇷'
}
const languageSupports = {
  'zh-CN': true,
  'zh-TW': false,
  'en-US': true,
  'pt-BR': false
}

interface MenuClick {
  item: Record<string, unknown>;
  key: string;
  keyPath: string;
}

export default defineComponent({
  name: 'SelectLang',
  setup () {
    const store = useStore()
    const currentLang = computed(() => store.getters.lang)

    /** 菜单选择 */
    function handleMenuClick ({ key }: MenuClick): void {
      store.dispatch('setLang', key)
    }

    return {
      currentLang,
      locales,
      languageLabels,
      languageIcons,
      languageSupports,

      handleMenuClick
    }
  }
})
</script>
