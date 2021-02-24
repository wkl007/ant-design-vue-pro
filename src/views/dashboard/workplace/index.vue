<template>
  <page-container>
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
    <container
      lock-axis="y"
      drag-class="ant-pro-table-drag-ghost"
      drop-class="ant-pro-table-drop-ghost"
      @drop="({removedIndex,addedIndex})=>move(removedIndex,addedIndex)"
    >
      <draggable
        v-for="(item,index) in list"
        :key="index"
      >
        <div>{{ item.label }}</div>
      </draggable>
    </container>
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
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import moment from 'moment'
import FooterToolbar from '@/components/base-layouts/footer-toolbar/index.vue'
import { Container, Draggable } from '@/components/draggable'

export default defineComponent({
  name: 'Workplace',
  components: {
    FooterToolbar,
    Container,
    Draggable
  },
  setup () {
    const { t } = useI18n()
    const store = useStore()
    const locale = ref(store.getters.lang)
    const list = reactive([
      {
        key: 1,
        label: '描述'
      },
      {
        key: 2,
        label: '服务调用次数'
      },
      {
        key: 3,
        label: '状态'
      },
      {
        key: 4,
        label: '规则名称'
      },
      {
        key: 5,
        label: '上次调度时间'
      },
      {
        key: 6,
        label: '操作'
      }
    ])

    watch(locale, async val => {
      await store.dispatch('setLang', val)
    })

    function move (removedIndex: number, addedIndex: number) {
      const currentItem = list[removedIndex]
      list.splice(removedIndex, 1)
      if (addedIndex === 0) {
        // 头部添加
        list.unshift(currentItem)
      } else {
        // 添加元素
        list.splice(addedIndex, 0, currentItem)
      }
    }

    return {
      t,
      locale,
      list,
      moment,
      move
    }
  }
})
</script>
