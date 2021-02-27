<template>
  <router-view v-slot="{Component}">
    <multi-tab-store-producer v-if="multiTab">
      <component :is="Component"/>
    </multi-tab-store-producer>
    <component v-else :is="Component"/>
  </router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { MultiTabStoreProducer } from '@/components/multi-tab/index'
import { injectMenuState } from '@/hooks/useMenuState'

export default defineComponent({
  name: 'RouteView',
  components: {
    MultiTabStoreProducer
  },
  setup () {
    const { multiTab } = injectMenuState()

    return {
      multiTab
    }
  }
})
</script>
