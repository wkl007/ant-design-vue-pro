<template>
  <div class="step1">
    <a-form
      layout="horizontal"
      class="step-form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 19 }"
    >
      <a-form-item label="付款账户" v-bind="validateInfos.payAccount">
        <a-select v-model:value="modelRef.payAccount" placeholder="ant-design@alipay.com">
          <a-select-option value="ant-design@alipay.com">ant-design@alipay.com</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="收款账户" v-bind="validateInfos.receiverAccount">
        <receiver-account
          v-model:model-value="modelRef.receiverAccount"
          :select-style="{ width: '100px' }"
          :input-style="{ width: 'calc(100% - 100px)' }"
        />
      </a-form-item>
      <a-form-item label="收款人姓名" v-bind="validateInfos.receiverName">
        <a-input v-model:value="modelRef.receiverName" placeholder="请输入收款人姓名"/>
      </a-form-item>
      <a-form-item label="转账金额" v-bind="validateInfos.amount">
        <a-input v-model:value="modelRef.amount" prefix="￥" placeholder="请输入金额"/>
      </a-form-item>
      <a-form-item
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: { span: 19, offset: 5 },
        }"
      >
        <a-button type="primary" @click="handleSubmit">
          下一步
        </a-button>
      </a-form-item>
    </a-form>
    <a-divider/>
    <div class="step-form-style-desc">
      <h3>说明</h3>
      <h4>转账到支付宝账户</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
      <h4>转账到银行卡</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
import ReceiverAccount, { ReceiverAccountType } from './receiver-account.vue'

export default defineComponent({
  name: 'Step1',
  components: {
    ReceiverAccount
  },
  emits: ['next'],
  setup (props, { emit }) {
    const modelRef = reactive({
      payAccount: undefined,
      receiverAccount: {
        type: 'alipay',
        number: undefined
      },
      receiverName: undefined,
      account: undefined
    })
    const rulesRef = reactive({
      payAccount: [{ required: true, message: '请选择付款账户' }],
      receiverAccount: [
        { validator: receiverAccount, trigger: 'change' }
      ],
      receiverName: [{ required: true, message: '请输入收款人姓名' }],
      amount: [
        {
          required: true,
          message: '请输入转账金额'
        },
        {
          pattern: /^(\d+)((?:\.\d+)?)$/,
          message: '请输入合法金额数字'
        }
      ]
    })

    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)

    function receiverAccount (rule: any, value: ReceiverAccountType): Promise<string | void> {
      return new Promise<string | void>((resolve, reject) => {
        const checkValue = toRaw(value)
        if (checkValue && checkValue.number) {
          resolve()
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('请输入收款账号')
        }
      })
    }

    async function handleSubmit (e: Event) {
      try {
        e.preventDefault()
        await validate()
        emit('next')
      } catch (err) {
        console.log(err)
      }
    }

    return {
      labelCol: { lg: { span: 7 }, sm: { span: 7 } },
      wrapperCol: { lg: { span: 10 }, sm: { span: 17 } },
      modelRef,
      validateInfos,

      resetFields,
      handleSubmit
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
