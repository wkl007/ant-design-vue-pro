<template>
  <page-container :title="t('pages.nested.menu1.title')">
    <a-alert type="success">
      <template #message>
        <h2>Menu 2</h2>
        <div style="padding: 24px;">
          <strong>嵌套路由页面内容</strong>
        </div>
      </template>
    </a-alert>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProProvider } from '@/components/base-layouts/pro-provider'

export default defineComponent({
  name: 'Menu2',
  setup () {
    const { i18n: t } = useProProvider()
    return {
      t
    }
  }
})
</script>
