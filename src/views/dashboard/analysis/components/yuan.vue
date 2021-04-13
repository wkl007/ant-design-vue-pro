<template>
  <span>{{ formatYuan(value) }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { numberFormat } from '@/utils'

export default defineComponent({
  name: 'Yuan',
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  },
  setup () {
    function formatYuan (value: string | number): string {
      return `¥ ${numberFormat(value, '0,0')}`
    }

    return {
      formatYuan
    }
  }
})
</script>
