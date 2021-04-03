<template>
  <grid-content>
    <a-card
      :bordered="false"
      :body-style="{padding:'16px 0',height:'100%'}"
      :style="{ height: '100%' }"
    >
      <div class="account-settings-info-main">
        <div class="account-settings-info-left">
          <a-menu
            type="inner"
            :mode="mode"
            :style="{ border: '0', width: isMobile ? '100%' : 'auto' }"
            v-model:selectedKeys="selectedKeys"
            @click="handleMenuClick"
          >
            <a-menu-item key="/account/settings/base">
              {{ t('pages.account.settings.base.title') }}
            </a-menu-item>
            <a-menu-item key="/account/settings/security">
              {{ t('pages.account.settings.security.title') }}
            </a-menu-item>
            <a-menu-item key="/account/settings/custom">
              {{ t('pages.account.settings.custom.title') }}
            </a-menu-item>
            <a-menu-item key="/account/settings/binding">
              {{ t('pages.account.settings.binding.title') }}
            </a-menu-item>
            <a-menu-item key="/account/settings/notification">
              {{ t('pages.account.settings.notification.title') }}
            </a-menu-item>
          </a-menu>
        </div>
        <div class="account-settings-info-right">
          <div class="account-settings-info-title">
            <span>{{ t(`${$route.meta.title}`) }}</span>
          </div>
          <router-view/>
        </div>
      </div>
    </a-card>
  </grid-content>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, watch, inject, ref, computed } from 'vue'
import { GridContent, injectProProvider } from '@/components'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'Settings',
  components: {
    GridContent
  },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const { i18n: t } = injectProProvider()
    const isMobile = inject('isMobile', ref(false))
    const state = reactive<{ selectedKeys: string[] }>({
      selectedKeys: []
    })

    function updateCurrentSelectMenu () {
      if (!route.matched) return
      const allMatched = route.matched.concat()
      state.selectedKeys = allMatched.map(item => item.path)
    }

    function handleMenuClick ({ key }: { key: string }): void {
      if (!key) return
      router.push({ path: key })
    }

    onMounted(() => {
      updateCurrentSelectMenu()
    })

    watch(
      () => route.fullPath,
      () => updateCurrentSelectMenu()
    )

    return {
      ...toRefs(state),
      t,
      isMobile,
      mode: computed(() => (isMobile.value ? 'horizontal' : 'vertical')),

      handleMenuClick
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

.account-settings-info-main {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;

  &.mobile {
    display: block;

    .account-settings-info-left {
      width: 100%;
      height: 50px;
      overflow-x: auto;
      overflow-y: scroll;
      border-right: unset;
      border-bottom: 1px solid @border-color-split;
    }

    .account-settings-info-right {
      padding: 20px 40px;
    }
  }

  .account-settings-info-left {
    width: 224px;
    border-right: 1px solid @border-color-split;
  }

  .account-settings-info-right {
    flex: 1 1;
    padding: 8px 40px;

    .account-settings-info-title {
      margin-bottom: 12px;
      color: @text-color;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }

    .account-settings-info-view {
      padding-top: 12px;
    }
  }
}

@media screen and (max-width: 768px) {
  .account-settings-info-main {
    flex-direction: column;

    .account-settings-info-left {
      width: 100%;
      border-right: none;
    }
  }
}
</style>
