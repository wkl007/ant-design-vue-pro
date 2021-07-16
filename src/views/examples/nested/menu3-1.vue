<template>
  <div style="padding: 20px; background-color: #e6f7ff; border: 1px solid #91d5ff;">
    <h2>Menu 3-1</h2>
    <div style="padding: 24px;">
      <strong>嵌套路由页面内容</strong>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectProProvider } from '@/components'

export default defineComponent({
  name: 'Menu3-1',
  setup () {
    const { i18n } = injectProProvider()
    return {
      i18n
    }
  }
})
</script>
