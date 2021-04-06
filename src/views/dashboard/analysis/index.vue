<template>
  <page-container>
    <a-card>
      <v-tiny-column/>
      <v-bullet/>
      <v-column/>
      <v-pie/>
      <v-dual-axes/>
      <div
        class="map-wrapper"
        style="position: relative; width: 100%; height: 300px;"
      >
        <v-map/>
      </div>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VTinyColumn, VBullet, VColumn, VPie, VDualAxes, VMap } from '@/components'

export default defineComponent({
  name: 'Analysis',
  components: {
    VTinyColumn,
    VBullet,
    VColumn,
    VPie,
    VDualAxes,
    VMap
  }
})
</script>
