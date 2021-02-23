<template>
  <a-alert type="success">
    <template #message>
      <h2>Menu 1-2-1</h2>
      <div style="padding: 24px;">
        <strong>嵌套路由页面内容</strong>
      </div>
    </template>
  </a-alert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProProvider } from '@/components/base-layouts/pro-provider'

export default defineComponent({
  name: 'Menu1-2-1',
  setup () {
    const { i18n } = useProProvider()
    return {
      i18n
    }
  }
})
</script>
