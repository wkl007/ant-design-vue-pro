<template>
  <a-config-provider :locale="locale">
    <router-view/>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import images from '@/assets/images'

export default defineComponent({
  name: 'App',
  setup () {
    provide('images', reactive(images))
    return {
      locale: reactive(zhCN)
    }
  }
})
</script>
