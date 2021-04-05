<template>
  <page-container class="advance-form" title="高级表单">
    <template #content>高级表单常见于一次性输入和提交大批量数据的场景。</template>
    <repository-form ref="repositoryForm" class="antd-pro-pages-form-advanced-form-style-card"/>
    <task-form ref="taskForm" class="antd-pro-pages-form-advanced-form-style-card"/>
    <member-list/>
    <footer-toolbar>
      <span class="popover-wrapper">
        <a-popover
          title="表单校验信息"
          overlay-class-name="antd-pro-pages-forms-style-errorPopover"
          trigger="click"
          :get-popup-container="triggerNode => triggerNode.parentNode"
        >
          <template #content>
            <template v-for="item in state.errors" :key="item.key">
              <li
                class="antd-pro-pages-forms-style-errorListItem"
                @click="handleErrorClick(item.key)"
              >
                <close-circle-outlined class="antd-pro-pages-forms-style-errorIcon"/>
                <div class="">{{ item.message }}</div>
                <div class="antd-pro-pages-forms-style-errorField">
                  {{ item.fieldLabel }}
                </div>
              </li>
            </template>
          </template>
          <span>
            <span
              class="antd-pro-pages-forms-style-errorIcon"
              v-if="state.errors.length && state.errors.length > 0"
            >
              <close-circle-outlined/>
              {{ state.errors.length }}
            </span>
          </span>
        </a-popover>
      </span>
      <a-button type="primary" @click="handleSubmit">{{ t('submit') }}</a-button>
    </footer-toolbar>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, ref, RendererElement, reactive, toRaw } from 'vue'
import scrollIntoView from 'scroll-into-view-if-needed'
import { injectProProvider, FooterToolbar } from '@/components'
import RepositoryForm from './components/repository-form.vue'
import TaskForm from './components/task-form.vue'
import MemberList from './components/member-list.vue'
import { validateInfos } from '@ant-design-vue/use/es/useForm'

export interface ErrorItem {
  key: string;
  message?: string;
  fieldLabel?: string;
}

const fieldLabels: Record<string, string> = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型'
}

export default defineComponent({
  name: 'AdvanceForm',
  components: {
    RepositoryForm,
    TaskForm,
    MemberList,
    FooterToolbar
  },
  setup () {
    const { i18n: t } = injectProProvider()
    const state = reactive({
      errors: [] as ErrorItem[]
    })
    const repositoryForm = ref<RendererElement | null>(null)
    const taskForm = ref<RendererElement | null>(null)

    function errorList (errs: validateInfos): void {
      state.errors = Object.keys(toRaw(errs)).map(key => ({
        key: key,
        message: errs[key].help,
        fieldLabel: fieldLabels[key]
      }))
    }

    async function handleSubmit (e: Event) {
      try {
        await Promise.all([repositoryForm.value?.validate(), taskForm.value?.validate()])
      } catch (e) {
        const errs: validateInfos = Object.assign(
          {},
          repositoryForm.value?.validateInfos,
          taskForm.value?.validateInfos
        )
        errorList(errs)
      }
    }

    function handleErrorClick (key: string) {
      const node = document.querySelector(`[data-validate-id=${key}]`)
      if (node) {
        scrollIntoView(node, {
          scrollMode: 'if-needed',
          block: 'center'
        })
      }
    }

    return {
      t,
      state,
      repositoryForm,
      taskForm,

      handleErrorClick,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.antd-pro-pages-form-advanced-form-style-card {
  margin-bottom: 24px;

  ::v-deep(.@{ant-prefix}-form-item-control-wrapper) {
    width: 100%;
  }
}

.card {
  margin-bottom: 24px;
}

.popover-wrapper {
  ::v-deep(.antd-pro-pages-forms-style-errorPopover .ant-popover-inner-content) {
    min-width: 256px;
    max-height: 290px;
    padding: 0;
    overflow: auto;
  }
}

.antd-pro-pages-forms-style-errorIcon {
  margin-right: 24px;
  color: #f5222d;
  cursor: pointer;
  user-select: none;

  .anticon {
    margin-right: 4px;
  }
}

.antd-pro-pages-forms-style-errorListItem {
  padding: 8px 16px;
  list-style: none;
  border-bottom: 1px solid @border-color-split;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6f7ff;
  }

  .antd-pro-pages-forms-style-errorIcon {
    float: left;
    margin-top: 4px;
    margin-right: 12px;
    padding-bottom: 22px;
    color: #f5222d;
  }

  .antd-pro-pages-forms-style-errorField {
    margin-top: 2px;
    color: @text-color-secondary;
    font-size: 12px;
  }
}
</style>
