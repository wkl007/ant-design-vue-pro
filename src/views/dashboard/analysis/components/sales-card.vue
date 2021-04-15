<template>
  <a-card
    :loading="loading"
    :bordered="false"
    :body-style="loading ? {} : { padding: 0 }"
  >
    <div class="sales-card">
      <a-tabs
        size="large"
        :tab-bar-style="{ marginBottom: '24px' }"
      >
        <template #tabBarExtraContent>
          <div class="sales-extra-wrap">
            <div class="sales-extra">
              <a :class="isActive('today')" @click="() => selectDate('today')">
                {{ t('dashboard.analysis.all-day') }}
              </a>
              <a :class="isActive('week')" @click="() => selectDate('week')">
                {{ t('dashboard.analysis.all-week') }}
              </a>
              <a :class="isActive('month')" @click="() => selectDate('month')">
                {{ t('dashboard.analysis.all-month') }}
              </a>
              <a :class="isActive('year')" @click="() => selectDate('year')">
                {{ t('dashboard.analysis.all-year') }}
              </a>
            </div>
            <a-range-picker
              style="width: 256px;"
              :value="rangePickerValue"
              @change="handleRangePickerChange"
            />
          </div>
        </template>
        <a-tab-pane key="sales" :tab="t('dashboard.analysis.sales')">
          <a-row type="flex">
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="sales-bar">
                <h4>{{ t('dashboard.analysis.sales-trend') }}</h4>
                <v-column/>
              </div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="sales-rank">
                <h4 class="ranking-title">
                  {{ t('dashboard.analysis.sales-ranking') }}
                </h4>
                <ul class="ranking-list">
                  <li v-for="(item, index) in state.rankingListData" :key="index">
                    <span :class="['ranking-item-number', { active: index < 3 }]">
                      {{ index + 1 }}
                    </span>
                    <span class="ranking-item-title" :title="item.title">
                      {{ item.title }}
                    </span>
                    <span class="ranking-item-value">
                      {{ numberFormat(item.total, '0,0') }}
                    </span>
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
        <a-tab-pane key="views" :tab="t('dashboard.analysis.visits')">
          <a-row type="flex">
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="sales-bar">
                <h4>{{ t('dashboard.analysis.visits-trend') }}</h4>
                <v-column/>
              </div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="sales-rank">
                <h4 class="ranking-title">
                  {{ t('dashboard.analysis.visits-ranking') }}
                </h4>
                <ul class="ranking-list">
                  <li v-for="(item, index) in state.rankingListData" :key="index">
                    <span :class="['ranking-item-number', { active: index < 3 }]">
                      {{ index + 1 }}
                    </span>
                    <span class="ranking-item-title" :title="item.title">
                      {{ item.title }}
                    </span>
                    <span class="ranking-item-value">
                      {{ numberFormat(item.total, '0,0') }}
                    </span>
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, PropType, onMounted, computed } from 'vue'
import { injectProProvider, VColumn } from '@/components'
import { numberFormat } from '@/utils'
import { useStore } from 'vuex'

export interface RankingDataItem {
  title: string;
  total: number | string;
}

export default defineComponent({
  name: 'SalesCard',
  components: {
    VColumn
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Function as PropType<(type: string) => void>,
      default: () => undefined
    },
    selectDate: {
      type: Function as PropType<(type: string) => void>,
      default: () => undefined
    },
    handleRangePickerChange: {
      type: Function,
      default: () => undefined
    },
    rangePickerValue: {
      type: Array,
      default: () => []
    },
    salesData: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const store = useStore()
    const { i18n: t } = injectProProvider()
    const lang = computed(() => store.getters.lang)

    const state = reactive({
      rankingListData: [] as RankingDataItem[]
    })

    function generatorRankingData () {
      state.rankingListData = []
      for (let i = 0; i < 7; i += 1) {
        state.rankingListData.push({
          title: t('dashboard.analysis.test'),
          total: 323234
        })
      }
    }

    onMounted(() => {
      generatorRankingData()
    })

    watch(
      () => lang.value,
      (val) => {
        generatorRankingData()
      }
    )

    return {
      t,
      state,

      numberFormat
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.icon-group {
  i {
    margin-left: 16px;
    color: @text-color-secondary;
    cursor: pointer;
    transition: color 0.32s;

    &:hover {
      color: @text-color;
    }
  }
}

.ranking-list {
  margin: 25px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    margin-top: 16px;
    zoom: 1;

    &::before,
    &::after {
      display: table;
      content: ' ';
    }

    &::after {
      clear: both;
      height: 0;
      font-size: 0;
      visibility: hidden;
    }

    span {
      color: @text-color;
      font-size: 14px;
      line-height: 22px;
    }

    .ranking-item-number {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: 1.5px;
      margin-right: 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background-color: @tag-default-bg;
      border-radius: 20px;

      &.active {
        color: #fff;
        background-color: #314659;
      }
    }

    .ranking-item-title {
      flex: 1;
      margin-right: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.sales-extra {
  display: inline-block;
  margin-right: 24px;

  a {
    margin-left: 24px;
    color: @text-color;

    &:hover {
      color: @primary-color;
    }

    &.currentDate {
      color: @primary-color;
    }
  }
}

.sales-card {
  .sales-bar {
    padding: 0 0 32px 32px;
  }

  .sales-rank {
    padding: 0 32px 32px 72px;
  }

  ::v-deep(.ant-tabs-bar) {
    padding-left: 16px;

    .ant-tabs-nav .ant-tabs-tab {
      padding-top: 16px;
      padding-bottom: 14px;
      line-height: 24px;
    }
  }

  ::v-deep(.ant-tabs-extra-content) {
    padding-right: 24px;
    line-height: 55px;
  }

  ::v-deep(.ant-card-head) {
    position: relative;
  }

  ::v-deep(.ant-card-head-title) {
    align-items: normal;
  }
}

.sales-card-extra {
  height: inherit;
}

.sales-type-radio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}

.offline-card {
  ::v-deep(&) {
    .ant-tabs-ink-bar {
      bottom: auto;
    }

    .ant-tabs-bar {
      border-bottom: none;
    }

    .ant-tabs-nav-container-scrolling {
      padding-right: 10px;
      padding-left: 10px;
    }

    .ant-tabs-tab-prev-icon::before {
      position: relative;
      left: 6px;
    }

    .ant-tabs-tab-next-icon::before {
      position: relative;
      right: 6px;
    }

    .ant-tabs-tab-active h4 {
      color: @primary-color;
    }
  }
}

.trend-text {
  margin-left: 8px;
  color: @heading-color;
}

@media screen and (max-width: @screen-lg) {
  .sales-extra {
    display: none;
  }

  .ranking-list {
    li {
      span:first-child {
        margin-right: 8px;
      }
    }
  }
}

@media screen and (max-width: @screen-md) {
  .ranking-title {
    margin-top: 16px;
  }

  .sales-card .sales-bar {
    padding: 16px;
  }
}

@media screen and (max-width: @screen-sm) {
  .sales-extra-wrap {
    display: none;
  }

  .sales-card {
    ::v-deep(.ant-tabs-content) {
      padding-top: 30px;
    }
  }
}
</style>
