<template>
  <a-list item-layout="horizontal">
    <a-list-item>
      <a-list-item-meta>
        <template v-slot:title>
          <a>风格配色</a>
        </template>
        <template v-slot:description>
          <span>整体风格配色设置</span>
        </template>
      </a-list-item-meta>
      <template v-slot:actions>
        <a-switch
          checkedChildren="暗色"
          unCheckedChildren="白色"
          :disabled="true"
          :checked="navTheme==='dark'"
        />
      </template>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template v-slot:title>
          <a>主题色</a>
        </template>
        <template v-slot:description>
          <span>
            页面风格配色：
            <a>{{ colorFilter(primaryColor) }}</a>
          </span>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useStore } from 'vuex'

const themeMap: { [key: string]: string } = {
  dark: '暗色',
  light: '白色',
  realDark: '暗黑模式'
}

const colorList = [
  {
    key: '薄暮',
    color: '#f5222d'
  },
  {
    key: '火山',
    color: '#fa541c'
  },
  {
    key: '日暮',
    color: '#faad14'
  },
  {
    key: '明青',
    color: '#13c2c2'
  },
  {
    key: '极光绿',
    color: '#52c41a'
  },
  {
    key: '拂晓蓝（默认）',
    color: '#1890ff'
  },
  {
    key: '极客蓝',
    color: '#2f54eb'
  },
  {
    key: '酱紫',
    color: '#722ed1'
  }
]

function themeFilter (theme: string): string {
  return themeMap[theme]
}

function colorFilter (color: string): string | undefined {
  const c = colorList.find(o => o.color === color)
  return c && c.key
}

export default defineComponent({
  name: 'Custom',
  setup () {
    const store = useStore()

    return {
      navTheme: computed(() => store.getters.navTheme),
      primaryColor: computed(() => store.getters.primaryColor),

      themeFilter,
      colorFilter
    }
  }
})
</script>
