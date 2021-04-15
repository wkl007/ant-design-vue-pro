<template>
  <grid-content>
    <introduce-row
      :loading="state.loading"
      :data="state.chartData.visitData"
    />
    <sales-card
      :range-picker-value="state.rangePickerValue"
      :sales-data="state.chartData.salesData"
      :is-active="isActive"
      :handle-range-picker-change="handleRangePickerChange"
      :loading="state.loading"
      :select-date="selectDate"
    />
    <a-row
      :gutter="24"
      type="flex"
      style="margin-top: 24px;"
    >
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <top-search
          :loading="state.loading"
          :visit-data="state.chartData.visitData2"
          :search-data="state.chartData.searchData"
        >
          <template #dropdownGroup>
            <span class="iconGroup">
              <a-dropdown placement="bottomRight">
                <template #overlay>
                  <a-menu>
                    <a-menu-item>操作一</a-menu-item>
                    <a-menu-item>操作二</a-menu-item>
                  </a-menu>
                </template>
                <ellipsis-outlined/>
              </a-dropdown>
            </span>
          </template>
        </top-search>
      </a-col>
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <proportion-sales
          :loading="state.loading"
          :sales-type="state.salesType"
          :sales-pie-data="salesPieData"
          :handle-change-sales-type="handleChangeSalesType"
        >
          <template #dropdownGroup>
            <span class="icon-group">
              <a-dropdown placement="bottomRight">
                <template #overlay>
                  <a-menu>
                    <a-menu-item>操作一</a-menu-item>
                    <a-menu-item>操作二</a-menu-item>
                  </a-menu>
                </template>
                <ellipsis-outlined/>
              </a-dropdown>
            </span>
          </template>
        </proportion-sales>
      </a-col>
    </a-row>
    <offline-data
      style="margin-top: 24px;"
      :active-key="state.activeKey"
      :loading="state.loading"
      :offline-data="state.chartData.offlineData"
      :offline-chart-data="state.chartData.offlineChartData"
      :handle-tab-change="handleTabChange"
    />
  </grid-content>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRaw } from 'vue'
import moment, { Moment } from 'moment'
import { GridContent, VDualAxes, VPie } from '@/components'
import { IntroduceRow, SalesCard, TopSearch, ProportionSales, OfflineData } from './components'
import DashboardServer from '@/api/dashboard'
import { ChartDataResp } from '@/types/api/dashboard'
import { fixedZero } from '@/utils'

type TimeDistanceType = 'today' | 'week' | 'month' | 'year' | string;

function getTimeDistance (type: TimeDistanceType): [Moment, Moment] {
  const now = new Date()
  const oneDay = 1000 * 60 * 60 * 24
  if (type === 'today') {
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    return [moment(now), moment(now.getTime() + (oneDay - 1000))]
  }

  if (type === 'week') {
    let day = now.getDay()
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)

    if (day === 0) {
      day = 6
    } else {
      day -= 1
    }

    const beginTime = now.getTime() - day * oneDay

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))]
  }
  const year = now.getFullYear()

  if (type === 'month') {
    const month = now.getMonth()
    const nextDate = moment(now).add(1, 'months')
    const nextYear = nextDate.year()
    const nextMonth = nextDate.month()

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000)
    ]
  }

  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)]
}

export default defineComponent({
  name: 'Analysis',
  components: {
    GridContent,
    IntroduceRow,
    SalesCard,
    TopSearch,
    ProportionSales,
    OfflineData
  },
  setup () {
    const state = reactive({
      loading: false,
      chartData: {} as ChartDataResp,
      activeKey: 'Stores 0',
      salesType: 'all',
      rangePickerValue: getTimeDistance('year')
    })

    const salesPieData = computed(() => {
      const { salesTypeData, salesTypeDataOnline, salesTypeDataOffline } = state.chartData
      let salesPieData = []
      if (state.salesType === 'all') {
        salesPieData = salesTypeData
      } else {
        salesPieData = state.salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline
      }
      return salesPieData
    })

    async function getChartData (): Promise<any> {
      try {
        state.loading = true
        state.chartData = await DashboardServer.getChartData()
        state.loading = false
      } catch (e) {
        state.loading = false
      }
    }

    function handleRangePickerChange (rangePickerValue: [Moment, Moment]): void {
      state.rangePickerValue = rangePickerValue
    }

    function selectDate (type: TimeDistanceType): void {
      state.rangePickerValue = getTimeDistance(type)
      // const val = toRaw(state.rangePickerValue)
    }

    function isActive (type: TimeDistanceType): string {
      const value = getTimeDistance(type)
      if (!state.rangePickerValue[0] || !state.rangePickerValue[1]) {
        return ''
      }
      if (state.rangePickerValue[0].isSame(value[0], 'day') && state.rangePickerValue[1].isSame(value[1], 'day')) {
        return 'current-date'
      }
      return ''
    }

    function handleChangeSalesType (e: any | Event): void {
      state.salesType = e.target.value
    }

    function handleTabChange (key: string): void {
      state.activeKey = key
    }

    onMounted(() => {
      getChartData()
    })

    return {
      state,
      salesPieData,

      isActive,
      selectDate,
      handleRangePickerChange,
      handleTabChange,
      handleChangeSalesType
    }
  }
})
</script>
