<template>
  <a-alert type="success">
    <template #message>
      <h2>Menu 3</h2>
      <router-view v-slot="{Component}">
        <component :is="Component"/>
      </router-view>
    </template>
  </a-alert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProProvider } from '@/components/base-layouts/pro-provider'

export default defineComponent({
  name: 'Menu3',
  setup () {
    const { i18n } = useProProvider()
    return {
      i18n
    }
  }
})
</script>
