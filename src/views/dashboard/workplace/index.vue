<template>
  <div>
    <div class="operation-wrapper">
      <a-radio-group v-model:value="locale">
        <a-radio-button key="en" value="en-US">English</a-radio-button>
        <a-radio-button key="cn" value="zh-CN">中文</a-radio-button>
      </a-radio-group>
    </div>
    <div>
      <a-empty/>
      <div class="example">
        {{ t('pages.home') }}
        {{ $t('pages.home') }}
      </div>
      <div class="example">
        <a-pagination :total="50" show-size-changer/>
      </div>
      <div class="example">
        <a-select show-search style="width: 200px;">
          <a-select-option value="jack">jack</a-select-option>
          <a-select-option value="lucy">lucy</a-select-option>
        </a-select>
        <a-date-picker :value="moment()"/>
        <a-time-picker :value="moment()"/>
        <a-range-picker style="width: 200px;"/>
      </div>
      <div class="example">
        <a-calendar :fullscreen="false" :value="moment()"/>
      </div>
    </div>
    <a-menu>
      <a-menu-item key="mail" @mouseenter="handleEnter">
        <mail-outlined/>
        Navigation One
      </a-menu-item>
    </a-menu>
    <grid-content>
      <a-button>grid-content</a-button>
    </grid-content>
    <footer-toolbar>
      <template #extra>
        <a-button>
          222
        </a-button>
      </template>
      <a-button>
        1111
      </a-button>
    </footer-toolbar>
    <page-container/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import GridContent from '@/components/base-layouts/grid-content/index.vue'
import FooterToolbar from '@/components/base-layouts/footer-toolbar/index.vue'

export default defineComponent({
  name: 'Workplace',
  components: {
    GridContent,
    FooterToolbar
  },
  setup () {
    const { t } = useI18n()
    const store = useStore()
    const locale = ref(store.getters.lang)
    watch(locale, async val => {
      await store.dispatch('setLang', val)
    })

    function handleEnter (e: any) {
      console.log(e)
    }

    return {
      t,
      locale,
      moment,
      handleEnter
    }
  }
})
</script>
