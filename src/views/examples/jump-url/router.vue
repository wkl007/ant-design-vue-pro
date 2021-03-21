<template>
  <page-container title="路由跳转示例">
    <a-card :bordered="false">
      <a-row :gutter="16">
        <a-col :sm="24" :md="12">
          <a-card title="router-link">
            <router-link :to="'/dashboard/workplace'">工作台</router-link>
            <br />
            <router-link :to="{ path: '/dashboard/welcome' }">欢迎页</router-link>
            <br />
            <router-link :to="{ path: '/dashboard/workplace', query: { userId: '123' } }">
              工作台(带参数)
            </router-link>
            <br />
            <router-link :to="{ path: '/dashboard/workplace', hash: '#sddd' }">
              工作台(带hash)
            </router-link>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Router'
})
</script>
