<template>
  <a-list
    rowKey="id"
    class="cover-card-list"
    :loading="context.loading"
    :data-source="context.dataSource"
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card class="projects-card" hoverable>
          <template #cover>
            <img :src="item.cover" :alt="item.title"/>
          </template>

          <a-card-meta :title="item.title">
            <template #description>
              {{ item.description }}
            </template>
          </a-card-meta>
          <div class="card-item-content">
            <span>{{ dateFromNow(item.updatedAt) }}</span>
            <div class="avatar-list">
              <avatar-list size="small">
                <avatar-list-item
                  v-for="member in item.members"
                  :key="member"
                  :src="member.avatar"
                  :tips="member.name"
                />
              </avatar-list>
            </div>
          </div>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AvatarList, AvatarListItem } from '@/components'
import { useFetchData } from '@/hooks'
import { dateFromNow } from '@/utils'
import ListServer from '@/api/list'

export default defineComponent({
  name: 'Projects',
  components: {
    AvatarList,
    AvatarListItem
  },
  setup () {
    const { context, reload } = useFetchData(() => ListServer.getFakeList({ count: 16 }).then(res => ({
      data: res,
      total: 16
    })))

    return {
      context,

      reload,
      dateFromNow
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.cover-card-list {
  .projects-card {
    ::v-deep(.ant-card-meta-title) {
      margin-bottom: 4px;

      & > a {
        display: inline-block;
        max-width: 100%;
        color: @heading-color;
      }
    }

    ::v-deep(.ant-card-meta-description) {
      height: 44px;
      overflow: hidden;
      line-height: 22px;
    }

    &:hover {
      ::v-deep(.ant-card-meta-title) {
        > a {
          color: @primary-color;
        }
      }
    }
  }

  .card-item-content {
    display: flex;
    height: 20px;
    margin-top: 16px;
    margin-bottom: -4px;
    line-height: 20px;

    & > span {
      flex: 1;
      color: @text-color-secondary;
      font-size: 12px;
    }

    .avatar-ist {
      flex: 0 1 auto;
    }
  }

  .card-list {
    margin-top: 24px;
  }

  ::v-deep(.ant-list) {
    .ant-list-item-content-single {
      max-width: 100%;
    }
  }
}
</style>
