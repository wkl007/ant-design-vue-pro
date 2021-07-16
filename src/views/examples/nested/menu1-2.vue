<template>
  <div style="padding: 20px; background-color: #e6f7ff; border: 1px solid #91d5ff;">
    <h2>Menu 1-2</h2>
    <router-view/>
  </div>
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
