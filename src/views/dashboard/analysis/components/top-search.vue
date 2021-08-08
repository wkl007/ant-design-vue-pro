<template>
  <a-card
    style="height: 100%;"
    :loading="loading"
    :bordered="false"
    :title="t('dashboard.analysis.online-top-search')"
  >
    <template #extra>
      <slot name="dropdownGroup"/>
    </template>
    <a-row :gutter="68" type="flex">
      <a-col :sm="12" :xs="24" style="margin-bottom: 24px;">
        <number-info
          :gap="8"
          :total="numberFormat(12321,'0,0')"
          status="up"
          :sub-total="17.1"
        >
          <template #subTitle>
            <span>
              {{ t('dashboard.analysis.search-users') }}
              <a-tooltip :title="t('dashboard.analysis.introduce')">
                <info-circle-outlined style="margin-left: 8px;"/>
              </a-tooltip>
            </span>
          </template>
        </number-info>
        <div class="area-wrapper" style="height: 45px;">
          <v-tiny-area
            :data="state.areaData"
            :height="45"
          />
        </div>
      </a-col>
      <a-col :sm="12" :xs="24" style="margin-bottom: 24px;">
        <number-info
          :total="2.7"
          status="down"
          :sub-total="26.2"
          :gap="8"
        >
          <template #subTitle>
            <span>
              {{ t('dashboard.analysis.per-capita-search') }}
              <a-tooltip :title="t('dashboard.analysis.introduce')">
                <info-circle-outlined style="margin-left: 8px;"/>
              </a-tooltip>
            </span>
          </template>
        </number-info>
        <div class="area-wrapper" style="height: 45px;">
          <v-tiny-area
            :data="state.areaData"
            :height="45"
          />
        </div>
      </a-col>
    </a-row>
    <a-table
      size="small"
      :row-key="record => record.index"
      :columns="state.columns"
      :data-source="searchData"
      :pagination="{
        style: { marginBottom: 0 },
        pageSize: 5,
      }"
    >
      <template #keywordRender="{ text }">
        <a href="/">{{ text }}</a>
      </template>
      <template #rangeRender="{ text, record }">
        <trend :flag="record.status === 1 ? 'down' : 'up'">
          <span style="margin-right: 4px;">{{ text }}%</span>
        </trend>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { SearchData, VisitData2 } from '@/types/api/dashboard'
import { VTinyArea } from '@/components'
import Trend from './trend.vue'
import NumberInfo from './number-info.vue'
import { numberFormat } from '@/utils'
import { TableColumn } from '@/types'

export default defineComponent({
  name: 'TopSearch',
  components: {
    VTinyArea,
    Trend,
    NumberInfo
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    visitData: {
      type: Array as PropType<VisitData2[]>,
      default: () => []
    },
    searchData: {
      type: Array as PropType<SearchData[]>
    }
  },
  setup (props) {
    const { t } = useI18n()

    const columns: TableColumn[] = [
      {
        align: 'center',
        title: t('dashboard.analysis.table.rank'),
        dataIndex: 'index',
        key: 'index'
      },
      {
        align: 'center',
        title: t('dashboard.analysis.table.search-keyword'),
        dataIndex: 'keyword',
        key: 'keyword',
        scopedSlots: { customRender: 'keywordRender' }
      },
      {
        align: 'center',
        title: t('dashboard.analysis.table.users'),
        dataIndex: 'count',
        key: 'count',
        sorter: (a: any, b: any) => a.count.length - b.count.length,
        class: 'alignRight'
      },
      {
        align: 'center',
        title: t('dashboard.analysis.table.weekly-range'),
        dataIndex: 'range',
        key: 'range',
        sorter: (a: Record<string, number>, b: Record<string, number>) => a.range - b.range,
        scopedSlots: { customRender: 'rangeRender' }
      }
    ]
    const state = reactive({
      columns,
      areaData: computed(() => props.visitData.map(item => item.y))
    })

    return {
      t,
      state,

      numberFormat
    }
  }
})
</script>
