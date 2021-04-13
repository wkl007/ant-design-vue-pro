<template>
  <div :class="className" :title="typeof $slots.default === 'string' ? $slots.default : ''">
    <span><slot/></span>
    <span v-if="flag" :class="flag">
      <caret-up-outlined v-if="flag === 'up'"/>
      <caret-down-outlined v-else/>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Trend',
  props: {
    colorful: {
      type: Boolean,
      default: true
    },
    flag: {
      type: String as PropType<'up' | 'down'>,
      validator: function (value: string) {
        return ['up', 'down'].indexOf(value) !== -1
      }
    },
    reverseColor: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const className = {
      trendItem: true,
      trendItemGrey: false, // !props.colorful,
      reverseColor: false
    }

    return {
      className
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.trendItem {
  display: inline-block;
  font-size: @font-size-base;
  line-height: 22px;

  .up,
  .down {
    position: relative;
    top: 1px;
    margin-left: 4px;

    i {
      font-size: 12px;
      transform: scale(0.83);
    }
  }

  .up {
    color: @red-6;
  }

  .down {
    top: -1px;
    color: @green-6;
  }

  &.trendItemGrey .up,
  &.trendItemGrey .down {
    color: @text-color;
  }

  &.reverseColor .up {
    color: @green-6;
  }

  &.reverseColor .down {
    color: @red-6;
  }
}
</style>
