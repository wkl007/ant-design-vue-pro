<template>
  <div class="main">
    <a-form
      layout="vertical"
      :model="form"
    >
      <a-tabs
        :active-key="activeKey"
        :tab-bar-style="{ textAlign: 'center', borderBottom: 'unset' }"
        @change="handleTabClick"
      >
        <a-tab-pane :key="0" tab="账号密码登录">
          <a-alert
            v-if="isLoginError"
            type="error"
            show-icon
            style="margin-bottom: 24px;"
            message="账户或密码错误"
          />
          <a-form-item v-bind="validateInfos.username">
            <a-input
              size="large"
              v-model:value="form.username"
              placeholder="账户: admin"
            >
              <template #prefix>
                <user-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input-password
              size="large"
              v-model:value="form.password"
              placeholder="密码: admin or ant.design"
            >
              <template #prefix>
                <lock-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </template>
            </a-input-password>
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane :key="1" tab="手机号登录">
          <a-form-item v-bind="validateInfos.mobile">
            <a-input
              size="large"
              v-model:value="form.mobile"
              placeholder="手机号"
            >
              <template #prefix>
                <mobile-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
              </template>
            </a-input>
          </a-form-item>
          <a-row :gutter="16">
            <a-col :span="16">
              <a-form-item v-bind="validateInfos.captcha">
                <a-input
                  size="large"
                  v-model:value="form.captcha"
                  placeholder="验证码"
                >
                  <template #prefix>
                    <mail-outlined :style="{ color: 'rgba(0,0,0,.25)' }"/>
                  </template>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-button
                size="large"
                block
              >
                获取验证码
              </a-button>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>

      <a-form-item>
        <a-checkbox
          v-model:checked="form.rememberMe"
        >
          自动登录
        </a-checkbox>
        <router-link
          to="/user/login"
          class="forge-password"
          style="float: right;"
        >
          忘记密码
        </router-link>
      </a-form-item>
      <a-form-item style="margin-top: 24px;">
        <a-button
          size="large"
          type="primary"
          class="login-button"
          :loading="loading"
          html-type="submit"
          block
        >
          登录
        </a-button>
      </a-form-item>
      <div class="user-login-other">
        <span>其他登录方式</span>
        <a>
          <alipay-circle-outlined class="item-icon"/>
        </a>
        <a>
          <taobao-circle-outlined class="item-icon"/>
        </a>
        <a>
          <weibo-circle-outlined class="item-icon"/>
        </a>
        <router-link
          class="register"
          to="/user/register"
        >
          注册账户
        </router-link>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useForm } from '@ant-design-vue/use'

export default defineComponent({
  name: 'login',
  setup () {
    const state = reactive({
      activeKey: 0,
      loading: false,
      isLoginError: false
    })
    const form = reactive({
      rememberMe: true,
      username: '',
      password: '',
      mobile: '',
      captcha: ''
    })
    const rules = reactive({
      rememberMe: undefined,
      username: [
        { required: true, message: '请输入帐户名' }
      ],
      password: [
        { required: true, message: '请输入密码' }
      ],
      mobile: [
        { required: true, pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
      ],
      captcha: [
        { required: true, message: '请输入验证码' }
      ]
    })
    const { validateInfos, validateField, validate, resetFields } = useForm(form, rules)

    // tab点击
    function handleTabClick (key: number): void {
      state.activeKey = key
      resetFields()
    }

    return {
      ...toRefs(state),
      form,
      validateInfos,
      handleTabClick
    }
  }
})
</script>

<style scoped lang="less">
.main {
  .user-login-other {
    margin-top: 24px;
    line-height: 22px;
    text-align: left;

    .item-icon {
      margin-left: 16px;
      color: rgba(0, 0, 0, 0.2);
      font-size: 24px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
