<template>
  <grid-content>
    <a-row :gutter="24">
      <a-col :md="24" :lg="7">
        <a-card :bordered="false">
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img :src="userInfo.avatar" alt="">
            </div>
            <div class="username">{{ userInfo.nickname }}</div>
            <div class="bio">{{ userInfo.extra.signature }}</div>
          </div>
          <div class="account-center-detail">
            <p>
              <i class="title"></i>
              {{ userInfo.extra.title }}
            </p>
            <p>
              <i class="group"></i>
              {{ userInfo.extra.group }}
            </p>
            <p>
              <i class="address"></i>
              <span>
                {{ (userInfo.extra.geographic || { province: { label: '' } }).province.label }}
              </span>
              <span>
                {{ (userInfo.extra.geographic || { city: { label: '' } }).city.label }}
              </span>
            </p>
          </div>
          <a-divider/>
          <div class="account-center-tags">
            <div class="tagsTitle">标签</div>
            <div>
              <template
                v-for="tag in (userInfo.extra.tags||[]).concat(newTags)"
                :key="tag.key"
              >
                <a-tag
                  :closable="tag.key === '-1'"
                  :close="() => handleTagClose(tag)"
                >
                  {{ tag.label }}
                </a-tag>
              </template>
              <a-input
                v-if="tagInputVisible"
                ref="tagInput"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="tagInputValue"
                @change="handleInputChange"
                @blur="handleTagInputConfirm"
                @keyup.enter="handleTagInputConfirm"
              />
              <a-tag
                v-else
                style="background: #fff; border-style: dashed;"
                @click="showTagInput"
              >
                <plus-outlined/>
                New Tag
              </a-tag>
            </div>
          </div>
          <a-divider :dashed="true"/>
          <div class="account-center-team">
            <div class="teamTitle">团队</div>
            <a-spin :spinning="projects.loading">
              <a-row :gutter="36" class="members">
                <a-col
                  :lg="24"
                  :xl="12"
                  v-for="item in projects.dataSource"
                  :key="item.id"
                >
                  <a :href="item.href">
                    <a-avatar size="small" :src="item.logo"/>
                    {{ item.member }}
                  </a>
                </a-col>
              </a-row>
            </a-spin>
          </div>
        </a-card>
      </a-col>
      <a-col :md="24" :lg="17">
        <a-card
          style="width: 100%;"
          :bordered="false"
          :tab-list="tabListNoTitle"
          :active-tab-key="titleActiveKey"
          @tabChange="handleTabChange"
        >
          <applications v-if="titleActiveKey==='app'"/>
          <articles v-else-if="titleActiveKey==='article'"/>
          <projects v-else-if="titleActiveKey==='project'"/>
        </a-card>
      </a-col>
    </a-row>
  </grid-content>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import { GridContent } from '@/components'
import Applications from './components/applications.vue'
import Articles from './components/articles.vue'
import Projects from './components/projects.vue'
import { useFetchData } from '@/hooks'
import { wrap } from '@/hooks/useFetchData'
import DashboardServer from '@/api/dashboard'
import { ProjectNoticeResp } from '@/types/api/dashboard'

interface TagType {
  key: string;
  label: string;
}

export default defineComponent({
  name: 'Center',
  components: {
    GridContent,
    Applications,
    Articles,
    Projects
  },
  setup () {
    const store = useStore()
    const tagInput = ref()
    const state = reactive({
      newTags: [] as TagType[],

      tagInputVisible: false,
      tagInputValue: '',

      tabListNoTitle: [
        {
          key: 'article',
          tab: '文章(8)'
        },
        {
          key: 'app',
          tab: '应用(8)'
        },
        {
          key: 'project',
          tab: '项目(8)'
        }
      ],
      titleActiveKey: 'article'
    })

    const { context: projects } = useFetchData(wrap<ProjectNoticeResp>(DashboardServer.getProjectNotice))

    /* const { context } = useFetchData(
       () => {
         return DashboardServer.getProjectNotice().then(res => {
           return {
             data: res,
             total: 100
           }
         })
       }
     ) */

    function handleTabChange (key: string): void {
      state.titleActiveKey = key
    }

    function handleTagClose (removeTag: string): void {
      state.newTags = state.newTags.filter(tag => tag.label !== removeTag)
    }

    function showTagInput (): void {
      state.tagInputVisible = true
      nextTick(() => {
        tagInput.value.focus()
      })
    }

    function handleInputChange (e: Event): void {
      state.tagInputValue = (e.target as HTMLInputElement).value
    }

    function handleTagInputConfirm (): void {
      const inputValue = state.tagInputValue
      const oldTags: string[] = state.newTags.map(tag => tag.label)
      let tags = state.newTags
      if (inputValue && !oldTags.includes(inputValue)) {
        tags = [
          ...tags,
          {
            key: '-1',
            label: inputValue
          }
        ]
      }
      state.newTags = tags
      state.tagInputVisible = false
      state.tagInputValue = ''
    }

    return {
      userInfo: computed(() => store.getters.userInfo),
      tagInput,
      projects,
      ...toRefs(state),

      handleTabChange,
      handleTagClose,
      handleInputChange,
      handleTagInputConfirm,
      showTagInput
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.account-center-avatarHolder {
  margin-bottom: 24px;
  text-align: center;

  & > .avatar {
    width: 104px;
    height: 104px;
    margin: 0 auto;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .username {
    margin-bottom: 4px;
    color: @text-color;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
}

.account-center-detail {
  p {
    position: relative;
    margin-bottom: 8px;
    padding-left: 26px;
  }

  i {
    position: absolute;
    top: 4px;
    left: 0;
    width: 14px;
    height: 14px;
    background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
  }

  .title {
    background-position: 0 0;
  }

  .group {
    background-position: 0 -22px;
  }

  .address {
    background-position: 0 -44px;
  }
}

.account-center-tags {
  .ant-tag {
    margin-bottom: 8px;
  }
}

.account-center-team {
  .members {
    a {
      display: block;
      height: 24px;
      margin: 12px 0;
      overflow: hidden;
      color: @text-color;
      line-height: 24px;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;

      &:hover {
        color: @primary-color;
      }
    }
  }
}

.tagsTitle,
.teamTitle {
  margin-bottom: 12px;
  color: @text-color;
  font-weight: 500;
}
</style>
