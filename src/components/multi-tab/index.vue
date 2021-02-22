<template>
  <div>多页标签</div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed, inject } from 'vue'

export default defineComponent({
  name: 'MultiTab'
})
</script>

<style scoped lang="less">
@import "../base-layouts/basic-layout";

@multi-tab-height: 62px;

.ant-pro-multi-tab-wrap {
  background: @component-background;
}

.ant-pro-multi-tab-wrap :deep(.ant-tabs-bar) {
  padding-left: 16px;
}

.ant-pro-multi-tab-fixed {
  width: 100%;
  height: @multi-tab-height;
  background: transparent;
}

.ant-pro-multi-tab-wrap-fixed {
  position: fixed;
  top: @pro-layout-header-height;
  right: 0;
  z-index: 9;
  width: 100%;
  height: @multi-tab-height;
  transition: width 0.2s;
}

.ant-pro-multi-tab-dropdown-menu-btn {
  margin-right: 8px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: @primary-color;
  }
}

.ant-pro-multi-tab-reload-btn {
  margin-left: 8px;
  color: @text-color-secondary;
  font-size: 12px;

  &:hover {
    color: @primary-color;
  }
}
</style>
