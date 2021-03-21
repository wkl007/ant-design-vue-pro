<template>
  <router-view v-slot="{Component}">
    <multi-tab-store-consumer>
      <component v-if="Component" :is="Component"/>
      <slot v-else/>
    </multi-tab-store-consumer>
    <!--<component v-else :is="Component"/>-->
  </router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { MultiTabStoreConsumer } from '@/components'
import { injectMenuState } from '@/hooks/useMenuState'

export default defineComponent({
  name: 'RouteView',
  components: {
    MultiTabStoreConsumer
  },
  setup () {
    const { multiTab } = injectMenuState()

    return {
      multiTab
    }
  }
})
</script>
