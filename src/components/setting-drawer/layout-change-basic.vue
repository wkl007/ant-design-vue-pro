<template>
  <a-list :split="false">
    <a-tooltip>
      <a-list-item>
        <span style="opacity: 1;">
          {{ i18n('app.setting.content-width') }}
        </span>
        <template #actions>
          <a-select
            size="small"
            :value="contentWidth"
            @select="handleChange('contentWidth',$event)"
          >
            <a-select-option
              v-if="layout === 'side'"
              value="Fixed"
            >
              {{ i18n('app.setting.content-width.fixed') }}
            </a-select-option>
            <a-select-option value="Fluid">
              {{ i18n('app.setting.content-width.fluid') }}
            </a-select-option>
          </a-select>
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      placement="left"
      :title="layout === 'mix' ? i18n('app.setting.fixedheader.hint') : ''"
    >
      <a-list-item>
        <span style="opacity: 1;">
          {{ i18n('app.setting.fixedheader') }}
        </span>
        <template #actions>
          <a-switch
            size="small"
            :checked="!!fixedHeader"
            :disabled="layout === 'mix'"
            @change="handleChange('fixedHeader', $event)"
          />
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      placement="left"
      :title="layout === 'top' ? i18n('app.setting.fixedsidebar.hint') : ''"
    >
      <a-list-item>
        <span style="opacity: 1;">
          {{ i18n('app.setting.fixedsidebar') }}
        </span>
        <template #actions>
          <a-switch
            size="small"
            :disabled="layout === 'top'"
            :checked="!!fixedSidebar"
            @change="handleChange('fixSidebar', $event)"
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
          {{ i18n('app.setting.split.menus') }}
        </span>
        <template #actions>
          <a-switch
            size="small"
            :disabled="layout !== 'mix'"
            :checked="!!splitMenus"
            @change="handleChange('splitMenus', $event)"
          />
        </template>
      </a-list-item>
    </a-tooltip>
  </a-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { injectProProvider } from '@/components'
import { ContentWidth, Layout } from '@/types/store/app'

export default defineComponent({
  name: 'LayoutChangeBasic',
  props: {
    contentWidth: {
      type: String as PropType<ContentWidth>,
      default: 'Fluid'
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    fixedSidebar: {
      type: Boolean,
      default: false
    },
    splitMenus: {
      type: Boolean,
      default: false
    },
    layout: {
      type: String as PropType<Layout>,
      default: 'side'
    }
  },
  emits: ['change'],
  setup (props, { emit }) {
    const { i18n } = injectProProvider()

    // 选择更改
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
