<template>
  <a-input-group compact>
    <a-select v-model:value="value.type" :style="selectStyle">
      <a-select-option value="alipay">支付宝</a-select-option>
      <a-select-option value="bank">银行账户</a-select-option>
    </a-select>
    <a-input v-model:value="value.number" :style="inputStyle"/>
  </a-input-group>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, PropType } from 'vue'

export type PayType = 'bank' | 'alipay';

export interface ReceiverAccountType {
  type: PayType | string;
  number: string | number;
}

export default defineComponent({
  name: 'ReceiverAccount',
  props: {
    modelValue: {
      type: Object as PropType<ReceiverAccountType>,
      default: () => {
        return {
          type: 'alipay',
          number: undefined
        }
      }
    },
    selectStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => {
        return {
          width: '130px'
        }
      }
    },
    inputStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => {
        return {
          width: 'calc(100% - 130px)'
        }
      }
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const value = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        emit('update:modelValue', value)
      }
    })

    return {
      value
    }
  }
})
</script>
