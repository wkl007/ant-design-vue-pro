<template>
  <a-card
    :loading="loading"
    :bordered="bordered"
    :body-style="{ padding: '20px 24px 8px 24px' }"
  >
    <div class="chart-card">
      <div :class="['chart-top',{'chart-top-margin':!$slots.default&&!$slots.footer}]">
        <div class="avatar">
          <slot name="avatar"/>
        </div>
        <div class="mate-wrap">
          <div class="meta">
            <span v-if="title" class="title">
              {{ title }}
            </span>
            <span v-else>
              <slot name="title"/>
            </span>
            <span class="action">
              <slot name="action"/>
            </span>
          </div>
          <div v-if="total" class="total">{{ total }}</div>
          <div v-else-if="$slots.total" class="total">
            <slot name="total"/>
          </div>
        </div>
      </div>
      <div
        v-if="$slots.default"
        class="content"
        :style="{ height: contentHeight ? `${contentHeight}px` : 'auto' }"
      >
        <div :class="contentHeight ? 'content-fixed' : ''">
          <slot/>
        </div>
      </div>
      <div v-if="$slots.footer" :class="['footer', { footerMargin: !!$slots.default }]">
        <slot name="footer"/>
      </div>
    </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChartCard',
  props: {
    total: {
      type: [Number, String],
      default: ''
    },
    contentHeight: {
      type: Number,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    bordered: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.chart-card {
  position: relative;

  .chart-top {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .chart-top-margin {
    margin-bottom: 12px;
  }

  .chart-top-has-margin {
    margin-bottom: 20px;
  }

  .meta-wrap {
    float: left;
  }

  .avatar {
    position: relative;
    top: 4px;
    float: left;
    margin-right: 20px;

    img {
      border-radius: 100%;
    }
  }

  .meta {
    height: 22px;
    color: @text-color-secondary;
    font-size: @font-size-base;
    line-height: 22px;
  }

  .action {
    position: absolute;
    top: 4px;
    right: 0;
    line-height: 1;
    cursor: pointer;
  }

  .total {
    height: 38px;
    margin-top: 4px;
    margin-bottom: 0;
    overflow: hidden;
    color: @heading-color;
    font-size: 30px;
    line-height: 38px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .content {
    position: relative;
    width: 100%;
    margin-bottom: 12px;
  }

  .content-fixed {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .footer {
    margin-top: 8px;
    padding-top: 9px;
    border-top: 1px solid @border-color-split;

    & > * {
      position: relative;
    }
  }

  .footer-margin {
    margin-top: 20px;
  }
}
</style>
