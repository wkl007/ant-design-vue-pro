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
    <a-form v-bind="formLayout">
      <a-form-item label="编号" disabled="" v-bind="validateInfos.id">
        <a-input
          disabled
          v-model:value="modelRef.id"
          placeholder="编号"
        />
      </a-form-item>
      <a-form-item label="权限名称" v-bind="validateInfos.name">
        <a-input
          v-model:value="modelRef.name"
          placeholder="权限名称"
        />
      </a-form-item>
      <a-form-item label="显示名称" v-bind="validateInfos.label">
        <a-input
          v-model:value="modelRef.label"
          placeholder="显示名称"
        />
      </a-form-item>
      <a-form-item label="操作类型">
        <a-select
          v-model:value="modelRef.actions"
          placeholder="操作类型"
          mode="tags"
          style="width: 100%;"
        >
          <a-select-option
            v-for="action in permissionActions"
            :key="action"
          >
            {{ action }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { Permission } from '@/types/store/user'

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
const permissionActions = ['add', 'delete', 'update', 'query', 'import', 'export']

export default defineComponent({
  name: 'PermissionModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    model: {
      type: Object as PropType<Permission>,
      default: () => {}
    }
  },
  emits: ['ok', 'cancel'],
  setup () {
    const modelRef = reactive<Permission>({
      id: -1,
      name: undefined,
      label: undefined,
      actions: []
    })
    const rulesRef = reactive({
      // 注意如果数据类型不相同，一定要指定数据类型 `type` 否则会校验失败
      id: [{ required: true, message: '编码必须填写', type: 'number' }],
      name: [{ required: true, message: '权限名称必须填写' }],
      label: [{ required: true, message: '显示名称必须填写' }]
    })

    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)

    function handleSubmit (): void {}

    return {
      formLayout,
      permissionActions,
      modelRef,
      validateInfos,

      resetFields,
      handleSubmit
    }
  }
})
</script>
