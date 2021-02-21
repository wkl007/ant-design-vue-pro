<template>
  <left-menu-layout v-if="layout==='left'"/>
  <basic-layout v-else/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftMenuLayout from './left-menu-layout.vue'
import BasicLayout from './basic-layout.vue'
import { injectMenuState } from '@/hooks/useMenuState'

export default defineComponent({
  name: 'GlobalLayout',
  components: {
    LeftMenuLayout,
    BasicLayout
  },
  setup () {
    return {
      ...injectMenuState()
    }
  }
})
</script>
