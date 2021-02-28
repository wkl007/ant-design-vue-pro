<template>
  <a-alert type="success">
    <template #message>
      <h2>Menu 1-2</h2>
      <router-view v-slot="{Component}">
        <component :is="Component"/>
      </router-view>
    </template>
  </a-alert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectProProvider } from '@/components'

export default defineComponent({
  name: 'Menu1-2',
  setup () {
    const { i18n } = injectProProvider()
    return {
      i18n
    }
  }
})
</script>
