<template>
  <a-layout-content :class="classNames">
    <slot/>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { useProProvider } from '../pro-provider'

export default defineComponent({
  name: 'WrapContent',
  setup () {
    const { getPrefixCls } = toRefs(useProProvider())
    const prefixCls = getPrefixCls.value('basic-layout')
    const classNames = ref({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-has-header`]: true
    })
    return {
      classNames
    }
  }
})
</script>
