<template>
  <a-row :gutter="24" type="flex">
    <a-col v-bind="gridLayout" style="margin-bottom: 24px;">
      <chart-card
        :bordered="false"
        :loading="loading"
        :content-height="46"
      >
        <template #title>{{ $t('dashboard.analysis.total-sales') }}</template>
        <template #action>
          <a-tooltip :title="$t('dashboard.analysis.introduce')">
            <info-circle-outlined/>
          </a-tooltip>
        </template>
        <template #total>
          <yuan :value="126560"/>
        </template>
        <trend flag="up" style="margin-right: 16px;">
          {{ $t('dashboard.analysis.week') }}
          <span class="trendText">12%</span>
        </trend>
        <trend flag="down">
          {{ $t('dashboard.analysis.day') }}
          <span class="trendText">11%</span>
        </trend>
        <template #footer>
          <field
            :label="$t('dashboard.analysis.day-sales')"
            :value="`${numberFormat(12423,'0,0')}`"
          />
        </template>
      </chart-card>
    </a-col>
    <a-col v-bind="gridLayout" style="margin-bottom: 24px;">
      <chart-card
        :bordered="false"
        :loading="loading"
        :content-height="46"
      >
        <template #title>{{ $t('dashboard.analysis.visits') }}</template>
        <template #action>
          <a-tooltip :title="$t('dashboard.analysis.introduce')">
            <info-circle-outlined/>
          </a-tooltip>
        </template>
        <template #total>
          <yuan :value="numberFormat(8846,'0,0')"/>
        </template>
        <template #footer>
          <field
            :label="$t('dashboard.analysis.day-visits')"
            :value="`${numberFormat(12423,'0,0')}`"
          />
        </template>
      </chart-card>
    </a-col>
    <a-col v-bind="gridLayout" style="margin-bottom: 24px;">
      <chart-card
        :bordered="false"
        :loading="loading"
        :content-height="46"
      >
        <template #title>{{ $t('dashboard.analysis.payments') }}</template>
        <template #action>
          <a-tooltip :title="$t('dashboard.analysis.introduce')">
            <info-circle-outlined/>
          </a-tooltip>
        </template>
        <template #total>
          <yuan :value="numberFormat(6560,'0,0')"/>
        </template>
        <template #footer>
          <field :label="$t('dashboard.analysis.conversion-rate')" value="60%"/>
        </template>
      </chart-card>
    </a-col>
    <a-col v-bind="gridLayout" style="margin-bottom: 24px;">
      <chart-card
        :bordered="false"
        :loading="loading"
        :content-height="46"
        total="78%"
      >
        <template #title>{{ $t('dashboard.analysis.operational-effect') }}</template>
        <template #action>
          <a-tooltip :title="$t('dashboard.analysis.introduce')">
            <info-circle-outlined/>
          </a-tooltip>
        </template>
        <template #footer>
          <div style=" overflow: hidden; white-space: nowrap;">
            <trend flag="up" style="margin-right: 16px;">
              {{ $t('dashboard.analysis.week') }}
              <span class="trendText">12%</span>
            </trend>
            <trend flag="down">
              {{ $t('dashboard.analysis.day') }}
              <span class="trendText">11%</span>
            </trend>
          </div>
        </template>
      </chart-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ChartCard from './chart-card.vue'
import Yuan from './yuan.vue'
import Trend from './trend.vue'
import Field from './field.vue'
import { VisitData } from '@/types/api/dashboard'
import { injectProProvider } from '@/components'
import { numberFormat } from '@/utils'

const gridLayout = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6
}

export default defineComponent({
  name: 'IntroduceRow',
  components: {
    ChartCard,
    Yuan,
    Trend,
    Field
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array as PropType<VisitData[]>,
      default: () => []
    }
  },
  setup () {
    const { i18n: t } = injectProProvider()
    return {
      gridLayout,
      t,

      numberFormat
    }
  }
})
</script>
