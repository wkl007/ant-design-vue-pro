<template>
  <page-container :title="t('pages.nested.menu1.title')">
    <a-alert type="success">
      <template #message>
        <h2>Menu 1</h2>
        <router-view v-slot="{Component}">
          <component :is="Component"/>
        </router-view>
      </template>
    </a-alert>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProProvider } from '@/components/base-layouts/pro-provider'

export default defineComponent({
  name: 'Menu1',
  setup () {
    const { i18n: t } = useProProvider()
    return {
      t
    }
  }
})
</script>
