<template>
  <a-config-provider :locale="locale">
    <router-view/>
  </a-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import images from '@/assets/images'

export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()
    const i18n = useI18n()
    const lang = computed(() => store.getters.lang)
    if (lang.value) store.dispatch('setLang', lang.value)
    const locale = computed(() => i18n.getLocaleMessage(i18n.locale.value).antd)

    provide('images', reactive(images))
    return {
      locale
    }
  }
})
</script>
