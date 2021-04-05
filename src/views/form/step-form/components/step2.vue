<template>
  <div class="steps">
    <a-alert
      closable
      show-icon
      message="确认转账后，资金将直接打入对方账户，无法退回。"
      style="margin-bottom: 24px;"
    />
    <a-form
      class="step-form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 19 }"
      hide-required-mark
    >
      <a-descriptions :column="1">
        <a-descriptions-item label="转账账号">
          123456@163.com
        </a-descriptions-item>
        <a-descriptions-item label="收款账户">
          123456@163.com
        </a-descriptions-item>
        <a-descriptions-item label="收款人姓名">
          小三
        </a-descriptions-item>
        <a-descriptions-item label="转账金额">
          <a-statistic :value="100" suffix="元"/>
        </a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin: 24px 0;"/>
      <a-form-item label="支付密码" v-bind="validateInfos.password">
        <a-input
          v-model:value="modelRef.password"
          autocomplete="off"
          style="width: 80%;"
          type="password"
          placeholder="请输入付款密码"
        />
      </a-form-item>
      <a-form-item
        style="margin-bottom: 8px;"
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: {
            span: 19,
            offset: 5,
          },
        }"
        label=""
      >
        <a-button type="primary" :loading="state.loading" @click="handleSubmit">提交</a-button>
        <a-button style="margin-left: 8px;" @click="handlePrev">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'

export default defineComponent({
  name: 'Step2',
  emits: ['next', 'prev'],
  setup (props, { emit }) {
    const state = reactive({
      loading: false
    })
    const modelRef = reactive({
      password: undefined
    })

    const rulesRef = reactive({
      password: [{ required: true, message: '需要支付密码才能进行支付' }]
    })

    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)

    async function handleSubmit (e: Event) {
      try {
        e.preventDefault()
        state.loading = true
        await validate()
        const password = toRaw(modelRef).password
        emit('next')
        state.loading = false
      } catch (e) {
        state.loading = false
        console.log(e)
      }
    }

    function handlePrev (e: Event): void {
      e.preventDefault()
      emit('prev')
    }

    return {
      state,
      modelRef,
      validateInfos,

      resetFields,
      handleSubmit,
      handlePrev
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.step-form {
  max-width: 500px;
  margin: 40px auto 0;

  ::v-deep(&.ant-form) {
    @media (max-width: 575px) {
      .ant-form-item .ant-form-item-label {
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left;
      }

      .ant-form-item .ant-form-item-label > label {
        margin: 0;
      }

      .ant-form-item .ant-form-item-label > label::after {
        display: none;
      }

      .ant-form-rtl.ant-form-item .ant-form-item-label {
        text-align: right;
      }

      .ant-form-item {
        flex-wrap: wrap;
      }

      .ant-form-item .ant-form-item-control,
      .ant-form-item .ant-form-item-label {
        flex: 0 0 100%;
        max-width: 100%;
      }

      .ant-col-xs-24.ant-form-item-label {
        padding: 0 0 8px;
        line-height: 1.5715;
        white-space: normal;
        text-align: left;
      }

      .ant-col-xs-24.ant-form-item-label > label {
        margin: 0;
      }

      .ant-col-xs-24.ant-form-item-label > label::after {
        display: none;
      }

      .ant-form-rtl.ant-col-xs-24.ant-form-item-label {
        text-align: right;
      }
    }
  }
}

.step-form-style-desc {
  padding: 0 56px;
  color: @text-color-secondary;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  h3 {
    margin: 0 0 12px 0;
    color: @text-color-secondary;
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px 0;
    color: @text-color-secondary;
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
