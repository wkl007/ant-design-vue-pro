<template>
  <div class="field">
    <span v-if="label" class="label">
      {{ label }}
    </span>
    <span v-else>
      <slot name="label"/>
    </span>
    <span v-if="value" class="number">
      {{ value }}
    </span>
    <span v-else>
      <slot name="value"/>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Field',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.field {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .label,
  .number {
    font-size: @font-size-base;
    line-height: 22px;
  }

  .number {
    margin-left: 8px;
    color: @heading-color;
  }
}
</style>
