<template>
  <div
    :class="['number-info',{[`number-info-${theme}`]:theme}]"
  >
    <div
      v-if="title"
      class="number-info-title"
      :title="title"
    >
      {{ title }}
    </div>
    <div
      v-else-if="$slots.title"
      class="number-info-title"
    >
      <slot name="title"/>
    </div>
    <div
      v-if="subTitle"
      class="number-info-sub-title"
      :title="subTitle"
    >
      {{ subTitle }}
    </div>
    <div
      v-else-if="$slots.subTitle"
      class="number-info-sub-title"
    >
      <slot name="subTitle"/>
    </div>
    <div
      class="number-info-value"
      :style="{marginTop:gap?`${gap}px`:'none'}"
    >
      <span>
        {{ total }}
        <em
          v-if="suffix"
          class="suffix"
        >
          {{ suffix }}
        </em>
      </span>
      <span
        v-if="subTotal||status"
        class="sub-total"
      >
        {{ subTotal }}
        <caret-up-outlined v-if="status === 'up'"/>
        <caret-down-outlined v-else/>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type StatusType = 'up' | 'down' | string;

type ThemeType = 'light' | 'dark' | string;

export default defineComponent({
  name: 'NumberInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    total: {
      type: [String, Number] as PropType<string | number>,
      default: 0
    },
    status: {
      type: String as PropType<StatusType>,
      default: 'up',
      validator: (value: StatusType) => {
        return ['up', 'down'].indexOf(value) !== -1
      }
    },
    theme: {
      type: String as PropType<ThemeType>,
      default: 'light'
    },
    gap: {
      type: Number,
      default: 0
    },
    subTotal: {
      type: [Number, String],
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.number-info {
  .suffix {
    margin-left: 4px;
    color: @text-color;
    font-size: 16px;
    font-style: normal;
  }

  .number-info-title {
    margin-bottom: 16px;
    color: @text-color;
    font-size: @font-size-lg;
    transition: all 0.3s;
  }

  .number-info-sub-title {
    height: 22px;
    overflow: hidden;
    color: @text-color-secondary;
    font-size: @font-size-base;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .number-info-value {
    margin-top: 4px;
    overflow: hidden;
    font-size: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;

    & > span {
      display: inline-block;
      height: 32px;
      margin-right: 32px;
      color: @heading-color;
      font-size: 24px;
      line-height: 32px;
    }

    .sub-total {
      margin-right: 0;
      color: @text-color-secondary;
      font-size: @font-size-lg;
      vertical-align: top;

      i {
        margin-left: 4px;
        font-size: 12px;
        transform: scale(0.82);
      }

      ::v-deep(&) {
        .anticon-caret-up {
          color: @red-6;
        }

        .anticon-caret-down {
          color: @green-6;
        }
      }
    }
  }
}

.number-info-light {
  .number-info-value {
    & > span {
      color: @text-color;
    }
  }
}
</style>
