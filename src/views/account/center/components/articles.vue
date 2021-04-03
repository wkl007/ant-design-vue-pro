<template>
  <a-list
    size="large"
    rowKey="id"
    itemLayout="vertical"
    :loading="context.loading"
    :dataSource="context.dataSource"
  >
    <template #renderItem="{item}">
      <a-list-item>
        <template #actions>
          <icon-text type="star" :text="item.star"/>
          <icon-text type="like" :text="item.like"/>
          <icon-text type="message" :text="item.message"/>
        </template>
        <a-list-item-meta>
          <template #title>
            <a href="https://vue.ant.design/">{{ item.title }}</a>
          </template>
          <template #description>
            <span>
              <a-tag>Ant Design</a-tag>
              <a-tag>设计语言</a-tag>
              <a-tag>蚂蚁金服</a-tag>
            </span>
          </template>
        </a-list-item-meta>
        <article-list-content
          :content="item.content"
          :owner="item.owner"
          :avatar="item.avatar"
          :href="item.href"
          :updateAt="item.updatedAt"
        />
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticleListContent from './article-list-content.vue'
import IconText from './icon-text.vue'
import { useFetchData } from '@/hooks'
import ListServer from '@/api/list'

export default defineComponent({
  name: 'Articles',
  components: {
    ArticleListContent,
    IconText
  },
  setup () {
    const { context, reload } = useFetchData(() => ListServer.getFakeList({ count: 16 }).then(res => ({
      data: res,
      total: 16
    })))

    return {
      context,

      reload
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";
</style>
