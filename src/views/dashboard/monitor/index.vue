<template>
  <grid-content>
    <a-row :gutter="24">
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 24px;">
        <a-card
          :title="t('dashboard.monitor.trading-activity')"
          :bordered="false"
          style="height: 100%;"
        >
          <a-row>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic
                :title="t('dashboard.monitor.total-transactions')"
                suffix="元"
                :value="numberFormat(124543233,'0,0')"
              />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic :title="t('dashboard.monitor.sales-target')" value="92%"/>
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic-countdown
                :title="t('dashboard.monitor.remaining-time')"
                :value="new Date().getTime() + 3900000"
                format="HH:mm:ss:SSS"
              />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic
                :title="t('dashboard.monitor.total-transactions-per-second')"
                suffix="元"
                :value="numberFormat(234,'0,0')"
              />
            </a-col>
          </a-row>
          <div class="map-chart">
            <v-map/>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          :title="t('dashboard.monitor.activity-forecast')"
          style="margin-bottom: 24px;"
          :bordered="false"
        >
          <a-statistic title="目标评估" value="有望达到预期"/>
          <v-tiny-area :data="activeData"/>
          <div class="active-chart-legend">
            <span>00:00</span>
            <span>12:00</span>
            <span>23:00</span>
          </div>
        </a-card>
        <a-card
          :title="t('dashboard.monitor.efficiency')"
          style="margin-bottom: 24px;"
          :body-style="{ textAlign: 'center' }"
          :bordered="false"
        >
          <v-gauge/>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24" style="margin-bottom: 24px;">
        <a-card
          :title="t('dashboard.monitor.proportion-per-category')"
          :bordered="false"
          class="pie-card"
        >
          <a-row style="padding: 50px 0;">
            <a-col :span="8">
              <v-ring-progress :percent="0.28" :color="['#60C0FF','#E8EDF3']"/>
            </a-col>
            <a-col :span="8">
              <v-ring-progress :percent="0.2" :color="['#66F4E3','#E8EDF3']"/>
            </a-col>
            <a-col :span="8">
              <v-ring-progress :percent="0.32" :color="['#2FC25B','#E8EDF3']"/>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" style="margin-bottom: 24px;">
        <a-card
          :title="t('dashboard.monitor.popular-searches')"
          :loading="context.loading"
          :bordered="false"
          :body-style="{ overflow: 'hidden' }"
        >
          <v-word-cloud :data="context.dataSource"/>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" style="margin-bottom: 24px;">
        <a-card
          :title="t('dashboard.monitor.resource-surplus')"
          :body-style="{ textAlign: 'center', fontSize: 0 }"
          :bordered="false"
        >
          <v-liquid/>
        </a-card>
      </a-col>
    </a-row>
  </grid-content>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { GridContent, VGauge, VLiquid, VMap, VRingProgress, VTinyArea, VWordCloud } from '@/components'
import { useFetchData } from '@/hooks'
import DashboardServer from '@/api/dashboard'
import { numberFormat } from '@/utils'

function fixedZero (val: number) {
  return val < 10 ? `0${val}` : val
}

function getActiveData () {
  const activeData = []
  for (let i = 0; i < 24; i += 1) {
    activeData.push(Math.floor(Math.random() * 200) + i * 50)
  }
  return activeData
}

function useLoopData () {
  const timer = ref<number | undefined>(undefined)
  const requestRef = ref<number | undefined>(undefined)
  const activeData = ref<any>(getActiveData())

  const loopData = () => {
    requestRef.value = requestAnimationFrame(() => {
      timer.value = setTimeout(() => {
        activeData.value = getActiveData()
        nextTick(() => {
          loopData()
        })
      }, 1000)
    })
  }

  const clear = () => {
    clearTimeout(timer.value)
    if (requestRef.value) {
      cancelAnimationFrame(requestRef.value)
    }
  }

  onMounted(() => {
    loopData()

    // cancel
    onUnmounted(() => {
      clear()
    })
  })

  return {
    clear,
    activeData
  }
}

export default defineComponent({
  name: 'Monitor',
  components: {
    GridContent,
    VTinyArea,
    VGauge,
    VRingProgress,
    VWordCloud,
    VLiquid,
    VMap
  },
  setup () {
    const { t } = useI18n()
    const { context } = useFetchData(
      () => DashboardServer.getTags().then(res => {
        return {
          data: res.list,
          total: 100
        }
      }),
      { loading: false }
    )

    const { activeData } = useLoopData()

    return {
      t,
      context,
      activeData,

      numberFormat
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.active-chart-legend {
  position: relative;
  height: 20px;
  margin-top: 8px;
  font-size: 0;
  line-height: 20px;

  span {
    display: inline-block;
    width: 33.33%;
    font-size: 12px;
    text-align: center;

    &:first-child {
      text-align: left;
    }

    &:last-child {
      text-align: right;
    }
  }
}

.map-chart {
  position: relative;
  width: 100%;
  height: 452px;
  padding-top: 24px;
  text-align: center;
}

.pie-card ::v-deep(.pie-stat) {
  font-size: 24px !important;
}
</style>
