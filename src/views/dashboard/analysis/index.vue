<template>
  <grid-content>
    <introduce-row
      :loading="state.loading"
      :data="state.chartData.visitData"
    />
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
      </div>
    </a-card>
  </grid-content>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { GridContent, VBullet, VColumn, VDualAxes, VPie, VTinyColumn } from '@/components'
import { IntroduceRow } from './components'
import DashboardServer from '@/api/dashboard'
import { ChartDataResp } from '@/types/api/dashboard'

export default defineComponent({
  name: 'Analysis',
  components: {
    GridContent,
    VTinyColumn,
    VBullet,
    VColumn,
    VPie,
    VDualAxes,
    IntroduceRow
  },
  setup () {
    const state = reactive({
      loading: false,
      chartData: {} as ChartDataResp
    })

    async function getChartData () {
      try {
        state.loading = true
        state.chartData = await DashboardServer.getChartData()
        state.loading = false
      } catch (e) {
        state.loading = false
      }
    }

    onMounted(() => {
      getChartData()
    })

    return {
      state
    }
  }
})
</script>
