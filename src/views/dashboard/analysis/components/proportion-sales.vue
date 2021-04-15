<template>
  <a-card
    class="sales-card"
    style="height: 100%;"
    :loading="loading"
    :bordered="false"
    :title="t('dashboard.analysis.the-proportion-of-sales')"
  >
    <template #extra>
      <div class="sales-card-extra">
        <slot name="dropdownGroup"/>
        <div class="sales-type-radio">
          <a-radio-group :value="salesType" @change="handleChangeSalesType">
            <a-radio-button value="all">
              {{ t('dashboard.analysis.channel.all') }}
            </a-radio-button>
            <a-radio-button value="online">
              {{ t('dashboard.analysis.channel.online') }}
            </a-radio-button>
            <a-radio-button value="stores">
              {{ t('dashboard.analysis.channel.stores') }}
            </a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </template>
    <div>
      <h4 style="margin-top: 8px; margin-bottom: 32px;">
        {{ t('dashboard.analysis.sales') }}
      </h4>
      <v-pie :height="340" :data="salesPieData"/>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SalesData } from '@/types/api/dashboard'
import { injectProProvider, VPie } from '@/components'

type SalesType = 'all' | 'online' | 'stores' | string;

export default defineComponent({
  name: 'ProportionSales',
  components: {
    VPie
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    salesType: {
      type: String as PropType<SalesType>,
      required: true,
      validator: (value: SalesType) => {
        return ['all', 'online', 'stores'].indexOf(value) !== -1
      }
    },
    salesPieData: {
      type: Array as PropType<SalesData[]>,
      default: () => []
    },
    handleChangeSalesType: {
      type: Function as PropType<(e?: Event) => void>,
      default: () => null
    }
  },
  setup () {
    const { i18n: t } = injectProProvider()

    return {
      t
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

    &.current-date {
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
