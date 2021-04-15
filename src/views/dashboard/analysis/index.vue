<template>
  <grid-content>
    <introduce-row
      :loading="state.loading"
      :data="state.chartData.visitData"
    />
    <sales-card/>
    <a-card>
      <v-pie/>
      <v-dual-axes/>
    </a-card>
  </grid-content>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { GridContent, VDualAxes, VPie } from '@/components'
import { IntroduceRow, SalesCard } from './components'
import DashboardServer from '@/api/dashboard'
import { ChartDataResp } from '@/types/api/dashboard'

export default defineComponent({
  name: 'Analysis',
  components: {
    GridContent,
    VPie,
    VDualAxes,
    IntroduceRow,
    SalesCard
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
