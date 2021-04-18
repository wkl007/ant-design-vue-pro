<template>
  <a-list :split="false">
    <a-tooltip>
      <a-list-item>
        <span style="opacity: 1;">
         {{ i18n('app.setting.transitionname') }}
        </span>
        <template #actions>
          <a-select
            size="small"
            :value="transitionName"
            style="width: 120px;"
            @select="handleChange('transition',$event)"
          >
            <a-select-option value="null">
              Null
            </a-select-option>
            <a-select-option value="slide-fadein-up">
              Slide Up
            </a-select-option>
            <a-select-option value="slide-fadein-right">
              Slide Right
            </a-select-option>
            <a-select-option value="fadein">
              Fade In
            </a-select-option>
            <a-select-option value="zoom-fadein">
              Zoom
            </a-select-option>
          </a-select>
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip>
      <a-list-item>
        <span style="opacity: 1;">
          {{ i18n('app.setting.multitab') }}
        </span>
        <template #actions>
          <a-switch
            size="small"
            :checked="multiTab"
            @change="handleChange('multiTab', $event)"
          />
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      placement="left"
      :title="i18n('app.setting.multitab.fixed.hit')"
    >
      <a-list-item>
        <span :style="{opacity:!multiTab ? 0.5 : 1 }">
          {{ i18n('app.setting.multitab.fixed') }}
        </span>
        <template #actions>
          <a-switch
            size="small"
            :disabled="!multiTab&&!fixedHeader"
            :checked="multiTabFixed"
            @change="handleChange('multiTabFixed', $event)"
          />
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      placement="left"
      :title="layout === 'mix' ? '' : i18n('app.setting.layout.mix.hint')"
    >
      <a-list-item>
        <span style="opacity: 1;">
          {{ i18n('app.setting.weakmode') }}
        </span>
        <template #actions>
          <a-switch
            size="small"
            :checked="false"
            :disabled="true"
          />
        </template>
      </a-list-item>
    </a-tooltip>
  </a-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { injectProProvider } from '@/components'
import { Layout } from '@/types/store/app'

export default defineComponent({
  name: 'LayoutChangeOther',
  props: {
    layout: {
      type: String as PropType<Layout>,
      default: 'side'
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    transitionName: {
      type: String,
      default: ''
    },
    multiTab: {
      type: Boolean,
      default: true
    },
    multiTabFixed: {
      type: Boolean,
      default: false
    },
    weakMode: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup (props, { emit }) {
    const { i18n } = injectProProvider()

    /** 选择更改 */
    function handleChange (type: string, value: string): void {
      emit('change', { type, value })
    }

    return {
      i18n,
      handleChange
    }
  }
})
</script>
