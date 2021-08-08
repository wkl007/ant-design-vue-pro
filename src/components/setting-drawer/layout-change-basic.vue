<template>
  <a-list :split="false">
    <a-tooltip>
      <a-list-item>
        <span style="opacity: 1;">
          {{ t('app.setting.content-width') }}
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
              {{ t('app.setting.content-width.fixed') }}
            </a-select-option>
            <a-select-option value="Fluid">
              {{ t('app.setting.content-width.fluid') }}
            </a-select-option>
          </a-select>
        </template>
      </a-list-item>
    </a-tooltip>

    <a-tooltip
      placement="left"
      :title="layout === 'mix' ? t('app.setting.fixedheader.hint') : ''"
    >
      <a-list-item>
        <span style="opacity: 1;">
          {{ t('app.setting.fixedheader') }}
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
      :title="layout === 'top' ? t('app.setting.fixedsidebar.hint') : ''"
    >
      <a-list-item>
        <span style="opacity: 1;">
          {{ t('app.setting.fixedsidebar') }}
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
      :title="layout === 'mix' ? '' : t('app.setting.layout.mix.hint')"
    >
      <a-list-item>
        <span style="opacity: 1;">
          {{ t('app.setting.split.menus') }}
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
import { useI18n } from 'vue-i18n'
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
    const { t } = useI18n()

    /** 选择更改 */
    function handleChange (type: string, value: string): void {
      emit('change', { type, value })
    }

    return {
      t,
      handleChange
    }
  }
})
</script>
