<template>
  <page-container :title="t(`${route.meta.title}`)">
    <template #content>
      {{ t('form.baseForm.basic.description') }}
    </template>
    <a-card :bordered="false">
      <a-form hide-required-mark :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item :label="t('form.baseForm.title.label')" v-bind="validateInfos.title">
          <a-input
            v-model:value="modelRef.title"
            :placeholder="t('form.baseForm.title.placeholder')"
          />
        </a-form-item>
        <a-form-item :label="t('form.baseForm.date.label')" v-bind="validateInfos.date">
          <a-range-picker
            v-model:value="modelRef.date"
            :placeholder="[
              t('form.baseForm.placeholder.start'),
              t('form.baseForm.placeholder.end'),
            ]"
            :style="{ width: '100%' }"
          />
        </a-form-item>
        <a-form-item :label="t('form.baseForm.goal.label')" v-bind="validateInfos.goal">
          <a-textarea
            v-model:value="modelRef.goal"
            :placeholder="t('form.baseForm.goal.placeholder')"
            :style="{ minHeight: 32 }"
            :rows="4"
          />
        </a-form-item>
        <a-form-item :label="t('form.baseForm.standard.label')" v-bind="validateInfos.standard">
          <a-textarea
            v-model:value="modelRef.standard"
            :placeholder="t('form.baseForm.standard.placeholder')"
            :style="{ minHeight: 32 }"
            :rows="4"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.client">
          <template #label>
            <span>{{ t('form.baseForm.client.label') }}</span>
            <em class="optional">
              {{ t('form.baseForm.form.optional') }}
              <a-tooltip :title="t('form.baseForm.label.tooltip')">
                <info-circle-outlined/>
              </a-tooltip>
            </em>
          </template>
          <a-input
            v-model:value="modelRef.client"
            :placeholder="t('form.baseForm.client.placeholder')"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.invites">
          <template #label>
            <span>{{ t('form.baseForm.invites.label') }}</span>
            <em class="optional">
              {{ t('form.baseForm.form.optional') }}
            </em>
          </template>
          <a-input
            v-model:value="modelRef.invites"
            :placeholder="t('form.baseForm.invites.placeholder')"
          />
        </a-form-item>
        <a-form-item v-bind="validateInfos.weight">
          <template #label>
            <span>{{ t('form.baseForm.weight.label') }}</span>
            <em class="optional">
              {{ t('form.baseForm.form.optional') }}
            </em>
          </template>
          <a-input
            v-model="modelRef.weight"
            :placeholder="t('form.baseForm.weight.placeholder')"
          />
        </a-form-item>
        <a-form-item :label="t('form.baseForm.public.label')" v-bind="validateInfos.public">
          <div>
            <a-radio-group v-model:value="modelRef.public">
              <a-radio value="1">{{ t('form.baseForm.radio.public') }}</a-radio>
              <a-radio value="2">{{ t('form.baseForm.radio.partially-public') }}</a-radio>
              <a-radio value="3">{{ t('form.baseForm.radio.private') }}</a-radio>
            </a-radio-group>
            <a-form-item :style="{ marginBottom: 0 }" v-bind="validateInfos.publicUsers">
              <div
                :style="{
                  margin: '8px 0',
                  display: modelRef.public === '2' ? 'block' : 'none',
                }"
              >
                <a-select
                  v-model:value="modelRef.publicUsers"
                  mode="multiple"
                  :placeholder="t('form.baseForm.publicUsers.placeholder')"
                >
                  <a-select-option value="1">{{ t('form.baseForm.option.A') }}</a-select-option>
                  <a-select-option value="2">{{ t('form.baseForm.option.B') }}</a-select-option>
                  <a-select-option value="3">{{ t('form.baseForm.option.C') }}</a-select-option>
                </a-select>
                <span>{{ t('form.baseForm.label.help') }}</span>
              </div>
            </a-form-item>
          </div>
        </a-form-item>
        <a-form-item
          v-bind="{
            wrapperCol: {
              xs: { span: 24, offset: 0 },
              sm: { span: 10, offset: 7 },
            },
          }"
          :style="{ marginTop: 32 }"
        >
          <a-space>
            <a-button type="primary" :loading="state.submitting" @click="handleSubmit">
              {{ t('form.baseForm.form.submit') }}
            </a-button>
            <a-button>{{ t('form.baseForm.form.save') }}</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </a-card>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import moment from 'moment'
import { useRoute } from 'vue-router'
import { useForm } from '@ant-design-vue/use'
import { message } from 'ant-design-vue'
import { injectProProvider } from '@/components'
import FormServer from '@/api/form'

export default defineComponent({
  name: 'BaseForm',
  setup () {
    const route = useRoute()
    const { i18n: t } = injectProProvider()
    const state = reactive({
      submitting: false
    })
    const modelRef = reactive({
      title: undefined,
      date: [],
      goal: undefined,
      standard: undefined,
      client: undefined,
      invites: undefined,
      weight: null,
      public: '1',
      publicUsers: []
    })

    const rulesRef = reactive({
      title: [{ required: true, message: () => t('form.baseForm.title.required') }],
      date: [{ required: true, message: () => t('form.baseForm.date.required'), type: 'array' }],
      goal: [{ required: true, message: () => t('form.baseForm.goal.required') }],
      standard: [{ required: true, message: () => t('form.baseForm.standard.required') }]
    })
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)

    async function handleSubmit (e: Event): Promise<void> {
      try {
        e.preventDefault()
        state.submitting = true
        await validate()
        const res = await FormServer.saveBasicFormData({
          title: modelRef.title,
          date: [
            moment(modelRef.date[0]).format('YYYY-MM-DD hh:mm:ss'),
            moment(modelRef.date[1]).format('YYYY-MM-DD hh:mm:ss')
          ],
          goal: modelRef.goal,
          standard: modelRef.standard
        })
        console.log(res)
        state.submitting = false
        message.success('提交成功')
      } catch (e) {
        state.submitting = false
      }
    }

    return {
      t,
      route,
      state,
      labelCol: { lg: { span: 7 }, sm: { span: 7 } },
      wrapperCol: { lg: { span: 10 }, sm: { span: 17 } },
      modelRef,
      validateInfos,

      handleSubmit,
      resetFields
    }
  }
})
</script>
