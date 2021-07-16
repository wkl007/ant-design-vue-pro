<template>
  <page-container :title="t('pages.nested.menu1.title')">
    <div style="padding: 20px; background-color: #f6ffed; border: 1px solid #b7eb8f;">
      <h2>Menu 1</h2>
      <router-view/>
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectProProvider } from '@/components'

export default defineComponent({
  name: 'Menu1',
  setup () {
    const { i18n: t } = injectProProvider()
    return {
      t
    }
  }
})
</script>
