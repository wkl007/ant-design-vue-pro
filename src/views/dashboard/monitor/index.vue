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
            <a-tooltip :title="t('dashboard.monitor.waiting-for-implementation')">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                alt="map"
              />
            </a-tooltip>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          :title="t('dashboard.monitor.activity-forecast')"
          style="margin-bottom: 24px;"
          :bordered="false"
        ></a-card>
        <a-card
          :title="t('dashboard.monitor.efficiency')"
          style="margin-bottom: 24px;"
          :body-style="{ textAlign: 'center' }"
          :bordered="false"
        ></a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24" style="margin-bottom: 24px;">
        <a-card
          :title="t('dashboard.monitor.proportion-per-category')"
          :bordered="false"
          class="pie-card"
        >
          <a-row style="padding: 16px 0;">
            <a-col :span="8"></a-col>
            <a-col :span="8"></a-col>
            <a-col :span="8"></a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" style="margin-bottom: 24px;">
        <a-card
          :title="t('dashboard.monitor.popular-searches')"
          :loading="context.loading"
          :bordered="false"
          :body-style="{ overflow: 'hidden' }"
        ></a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" style="margin-bottom: 24px;">
        <a-card
          :title="t('dashboard.monitor.resource-surplus')"
          :body-style="{ textAlign: 'center', fontSize: 0 }"
          :bordered="false"
        ></a-card>
      </a-col>
    </a-row>
    <a-card>
      <v-tiny-area :data="activeData"/>
    </a-card>
  </grid-content>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { GridContent, injectProProvider, VTinyArea } from '@/components'
import { useFetchData } from '@/hooks'
import DashboardServer from '@/api/dashboard'
import { numberFormat } from '@/utils'

function fixedZero (val: number) {
  return val * 1 < 10 ? `0${val}` : val
}

function getActiveData () {
  const activeData = []
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 200) + i * 50
    })
  }
  return activeData
}

export default defineComponent({
  name: 'Monitor',
  components: {
    GridContent,
    VTinyArea
  },
  setup () {
    const { i18n: t } = injectProProvider()
    const { context } = useFetchData(
      () => DashboardServer.getTags().then(res => {
        return {
          data: res.list,
          total: 100
        }
      }),
      { loading: false }
    )

    return {
      t,
      context,
      activeData: [1, 2, 3, 4, 5],

      numberFormat
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.map-chart {
  height: 452px;
  padding-top: 24px;
  text-align: center;

  img {
    display: inline-block;
    max-width: 100%;
    max-height: 437px;
  }
}

.pie-card ::v-deep(.pie-stat) {
  font-size: 24px !important;
}

@media screen and (max-width: @screen-lg) {
  .map-chart {
    height: auto;
  }
}

</style>
