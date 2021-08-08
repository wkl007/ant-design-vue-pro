<template>
  <div :class="prefixCls">
    <template
      v-for="(item,index) in list"
      :key="index"
    >
      <layout-block
        :theme="item.key"
        :checked="item.key === value"
        :disabled="item.disabled"
        :title="t(item.title)"
        @click="handleChange(item.disabled,item.key)"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { injectProProvider } from '@/components'
import LayoutBlock from './layout-block.vue'

export default defineComponent({
  name: 'BlockCheckbox',
  props: {
    value: {
      type: String,
      default: ''
    },
    list: {
      type: Array as PropType<Array<{ key: string; title: string; }>>,
      default: (): Array<{ key: string; title: string; }> => []
    }
  },
  components: {
    LayoutBlock
  },
  emits: ['change'],
  setup (props, { emit }) {
    const { t } = useI18n()
    const { getPrefixCls } = injectProProvider()
    const prefixCls = getPrefixCls('setting-drawer-block-checkbox')

    /** 更改 */
    function handleChange (disabled: boolean, key: string): void {
      if (disabled) return
      emit('change', key)
    }

    return {
      t,
      prefixCls,
      handleChange
    }
  }
})
</script>
