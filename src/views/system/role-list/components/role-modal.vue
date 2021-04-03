<template>
  <a-modal
    title="权限编辑"
    :visible="visible"
    :width="600"
    centered
    @ok="handleSubmit"
    @cancel="()=>{
      resetFields()
      $emit('cancel')
    }"
  >
    <a-form layout="vertical">
      <a-form-item
        label="唯一编号"
        v-show="modelRef.id>0"
        v-bind="validateInfos.id"
      >
        <a-input :value="modelRef.id" disabled/>
      </a-form-item>
      <a-form-item
        label="角色名称"
        v-bind="validateInfos.name"
      >
        <a-input v-model:value="modelRef.name"/>
      </a-form-item>
      <a-form-item label="角色权限表">
        <p
          v-for="permission in rolePermissions"
          :key="permission.id"
          style="margin-left: 12px;"
        >
          <span :style="{ marginRight: '8px' }">{{ permission.name }}:</span>
          <template
            v-for="tag in tags"
            :key="tag.key"
          >
            <a-checkable-tag
              :checked="permission.actions.indexOf(tag.key) > -1"
              @change="checked => handleChange(permission.actions, tag, checked)"
            >
              {{ tag.describe }}
            </a-checkable-tag>
          </template>
        </p>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, PropType, watchEffect, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { Role } from '@/types/api/user'
import { Action, Permission } from '@/types/store/user'

type Tag = {
  key: string;
  describe: string;
}
const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 13 }
  }
}

export default defineComponent({
  name: 'RoleModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    model: {
      type: Object as PropType<Role>,
      default: () => {}
    }
  },
  emits: ['cancel'],
  setup (props) {
    const modelRef = reactive<Role>({
      id: undefined,
      name: undefined,
      describe: undefined,
      permissions: []
    })
    const rulesRef = reactive({
      id: [{ required: true }],
      name: [{ required: true }]
    })

    const rolePermissions = ref<Permission[]>([
      { id: 'roleManage', name: '角色管理', actions: [Action.ADD, Action.UPDATE] },
      { id: 'userManage', name: '用户管理', actions: [Action.ADD, Action.UPDATE, Action.QUERY] }
    ])
    const tags: Tag[] = [
      { key: 'add', describe: '新增' },
      { key: 'update', describe: '修改' },
      { key: 'delete', describe: '删除' },
      { key: 'query', describe: '查询' },
      { key: 'import', describe: '导入' },
      { key: 'export', describe: '导出' }
    ]
    const selectedTags = ref<string[]>([])

    const { validateInfos, resetFields } = useForm(modelRef, rulesRef)

    function handleSubmit (): void {}

    function handleChange (actions: Action[], tag: Tag, checked: boolean): void {
      if (checked) {
        actions.push(tag.key as Action)
      } else {
        const index = actions.findIndex(item => item === tag.key)
        actions.splice(index, 1)
      }
    }

    return {
      ...formLayout,
      tags,
      rolePermissions,

      selectedTags,
      modelRef,

      validateInfos,
      resetFields,
      handleSubmit,
      handleChange
    }
  }
})
</script>
