<template>
  <div class="base-view">
    <div class="view-left">
      <a-form layout="vertical">
        <a-form-item
          label="邮箱"
          v-bind="validateInfos.email"
        >
          <a-input
            v-model:value="modelRef.email"
            placeholdre="邮箱"
          />
        </a-form-item>
        <a-form-item
          label="昵称"
          v-bind="validateInfos.nickname"
        >
          <a-input
            v-model:value="modelRef.nickname"
            placeholdre="昵称"
          />
        </a-form-item>
        <a-form-item
          label="个人简介"
        >
          <a-textarea
            v-model:value="modelRef.bio"
            rows="4"
            placeholder="您的自我介绍"
          />
        </a-form-item>
        <a-form-item label="国家/地区">
          <a-select
            value="中国"
            placeholder="国家/地区"
          >
            <a-select-option
              value="中国"
            >
              中国
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="省市区"
          v-bind="validateInfos.address"
        >
          <a-cascader
            :options="areas"
            v-model:value="modelRef.address"
            placeholder="省市区"
          />
        </a-form-item>
        <a-form-item
          label="电话号"
          v-bind="validateInfos.phoneNumber"
        >
          <a-input
            v-model:value="modelRef.phoneNumber"
            placeholder="电话号"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            @click="handleSubmit"
          >
            更新信息
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="view-right">
      <div class="avatar">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        />
      </div>
      <a-upload>
        <div class="button-view">
          <a-button>
            <upload-outlined/>
            Change
          </a-button>
        </div>
      </a-upload>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useForm } from 'ant-design-vue/es/form'
import data from '@/assets/data'

export default defineComponent({
  name: 'Base',
  setup () {
    const modelRef = reactive({
      email: 'antdesign@alipay.com',
      nickname: 'Serati Ma',
      bio: undefined,
      country: undefined,
      province: undefined,
      address: undefined,
      phoneNumber: ''
    })
    const rulesRef = reactive({
      email: [{ required: true, trigger: ['change', 'blur'] }],
      nickname: [{ required: true, trigger: ['change', 'blur'] }],
      address: [{ required: true, trigger: ['change', 'blur'] }],
      phoneNumber: [{ required: true, trigger: ['change', 'blur'] }]
    })
    const { validateInfos, validate } = useForm(modelRef, rulesRef)

    async function handleSubmit (): Promise<void> {
      try {
        const res = await validate()
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    }

    return {
      areas: data.areas,
      modelRef,
      validateInfos,
      handleSubmit
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.base-view {
  display: flex;
  padding-top: 12px;

  .view-left {
    min-width: 224px;
    max-width: 448px;
  }

  .view-right {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    max-width: 448px;
    padding: 20px;

    .avatar-title {
      height: 22px;
      margin-bottom: 8px;
      color: @heading-color;
      font-size: @font-size-base;
      line-height: 22px;
    }

    .avatar {
      width: 144px;
      height: 144px;
      margin-bottom: 12px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .button-view {
      width: 144px;
      text-align: center;
    }
  }
}

@media screen and (max-width: @screen-xl) {
  .base-view {
    flex-direction: column-reverse;

    .right-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 448px;
      padding: 20px;

      .avatar-title {
        display: none;
      }
    }
  }
}
</style>
