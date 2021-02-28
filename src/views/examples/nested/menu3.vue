<template>
  <page-container :title="t('pages.nested.menu1.title')">
    <a-alert type="success">
      <template #message>
        <h2>Menu 3</h2>
        <router-view v-slot="{Component}">
          <component :is="Component"/>
        </router-view>
      </template>
    </a-alert>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectProProvider } from '@/components'

export default defineComponent({
  name: 'Menu3',
  setup () {
    const { i18n: t } = injectProProvider()
    return {
      t
    }
  }
})
</script>
