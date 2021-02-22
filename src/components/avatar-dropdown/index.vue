<template>
  <a-dropdown
    v-if="userInfo.nickname"
    class="ant-pro-dropdown ant-pro-dropdown-action"
    placement="bottomRight"
    overlayClassName="pro-components-header-dropdown-index-container"
  >
    <span>
      <a-avatar
        size="small"
        :src="userInfo.avatar"
        class="ant-pro-header-account-avatar"
      />
      <span
        class="ant-pro-header-account-name anticon"
      >
        {{ userInfo.nickname }}
      </span>
    </span>
    <template #overlay>
      <a-menu
        class="ant-pro-dropdown-menu"
        @click="handleMenuClick"
      >
        <template v-if="menu">
          <a-menu-item key="center">
            <user-outlined/>
            个人中心
          </a-menu-item>
          <a-menu-item key="settings">
            <setting-outlined/>
            个人设置
          </a-menu-item>
          <a-menu-divider/>
        </template>
        <a-menu-item key="logout">
          <logout-outlined/>
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import UserServer from '@/api/user'

export default defineComponent({
  name: 'AvatarDropdown',
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    },
    menu: {
      type: Boolean,
      default: true
    }
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const { t } = useI18n()

    function resetRouter () {
      const { allowRouters } = store.getters
      allowRouters.forEach(({ name }: { name: string }) => {
        router.removeRoute(name)
      })
    }

    function goPage (path: string): void {
      if (!path) return
      router.push({ path })
    }

    async function handleLogout (): Promise<void> {
      try {
        await UserServer.logout()
        await store.dispatch('setLoginStatus', 0)
        await store.dispatch('setAccessToken', '')
        await store.dispatch('setUserInfo', {})
        resetRouter()
        await store.dispatch('setAllowRouters', [])
        await router.replace({ path: '/user/login' })
      } catch (e) {}
    }

    function handleMenuClick ({ key }: { key: string }): void {
      switch (key) {
        case 'center':
          goPage('/account/center')
          break
        case 'settings':
          goPage('/account/settings')
          break
        case 'logout':
          handleLogout()
          break
      }
    }

    return {
      t,
      handleMenuClick
    }
  }
})
</script>

<style lang="less">
@import "../header-dropdown";
</style>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.ant-pro-header-account-name {
  vertical-align: unset;
}

.ant-pro-header-account-avatar {
  margin: 12px 8px 12px 0;
  color: @primary-color;
  vertical-align: top;
  background: hsla(0, 0%, 100%, 0.85);
}
</style>
