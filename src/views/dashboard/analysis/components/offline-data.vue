<template>
  <a-card
    :loading="loading"
    :bordered="false"
    style="margin-top: 32px;"
    class="offline-card"
  >
    <a-tabs
      :active-key="activeKey"
      @change="handleTabChange"
    >
      <a-tab-pane
        v-for="item in offlineData"
        :key="item.name"
      >
        <template #tab>
          <a-row
            :gutter="8"
            style="width: 70px; margin: 8px 0;"
            type="flex"
          >
            <a-col>
              <number-info
                :title="item.name"
                :sub-title="t('dashboard.analysis.conversion-rate')"
                :gap="2"
                :total="`${item.cvr * 100}%`"
                :theme="activeKey !== item.name ? 'light' : undefined"
              />
            </a-col>
          </a-row>
        </template>
        <div style="padding: 0 24px;">
          <v-dual-axes :data="offlineChartData"/>
        </div>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import NumberInfo from './number-info.vue'
import { OfflineChartData, OfflineData } from '@/types/api/dashboard'
import { VDualAxes } from '@/components'

export default defineComponent({
  name: 'OfflineData',
  components: {
    NumberInfo,
    VDualAxes
  },
  props: {
    activeKey: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    offlineData: {
      type: Array as PropType<OfflineData[]>,
      default: () => []
    },
    offlineChartData: {
      type: Array as PropType<OfflineChartData[]>,
      default: () => []
    },
    handleTabChange: {
      type: Function as PropType<(e: Event) => void>,
      default: () => []
    }
  },
  setup () {
    const { t } = useI18n()

    return {
      t
    }
  }
})
</script>
