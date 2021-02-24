<template>
  <div :class="{[prefixedCls]: true,  wide: wide, }">
    <div :class="childClassNames">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue'
import { useProProvider } from '../pro-provider'

export default defineComponent({
  name: 'GridContent',
  props: {
    contentWidth: {
      type: String,
      default: ''
    },
    prefixCls: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // 响应式处理
    const { getPrefixCls, contentWidth } = toRefs(useProProvider())
    const prefixedCls = props.prefixCls || getPrefixCls.value('grid-content')
    const wide = computed(() => (props.contentWidth || contentWidth.value) === 'Fixed')
    const childClassNames = ref(`${prefixedCls}-children`)

    return {
      prefixedCls,
      wide,
      childClassNames
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

@pro-layout-grid-content-prefix-cls: ~'@{ant-prefix}-pro-grid-content';

.@{pro-layout-grid-content-prefix-cls} {
  width: 100%;

  &.wide {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
