<template>
  <div :class="classNames">
    <div :class="`${prefixedClassName}-warp`">
      <a-page-header
        :title="title"
        :sub-title="subTitle"
        :breadcrumb="showBreadcrumb ? { routes: breadcrumb, itemRender: customBreadcrumbRender } : null"
        @back="handleBack"
      >
        <template v-if="hasTags" #tags>
          <slot name="tags"/>
        </template>
        <template v-if="hasExtra" #extra>
          <slot name="extra"/>
        </template>
        <template v-if="hasFooter || tabList.length" #footer>
          <slot name="footer">
            <a-tabs v-if="tabList.length > 0" :active-key="tabActiveKey" @change="handleTabChange">
              <a-tab-pane v-for="tab in tabList" :key="tab.key" :tab="tab.tab"/>
            </a-tabs>
          </slot>
        </template>
        <page-header-content
          v-if="hasContent || hasExtraContent"
          :prefix-cls="prefixedClassName"
        >
          <template v-if="hasContent" #content>
            <slot name="content"/>
          </template>
          <template v-if="hasExtraContent" #extraContent>
            <slot name="extraContent"/>
          </template>
        </page-header-content>
      </a-page-header>
    </div>
    <grid-content>
      <div
        v-if="hasChildren"
        :class="`${prefixedClassName}-children-content`"
      >
        <slot/>
      </div>
    </grid-content>
  </div>
</template>

<script lang="ts">
import { createTextVNode, defineComponent, h, PropType, ref, VNode, VNodeChild, withCtx } from 'vue'
import { RouterLink } from 'vue-router'
import { injectProProvider } from '../pro-provider'
import GridContent from '../grid-content/index.vue'
import PageHeaderContent from './page-header-content.vue'
import { injectMenuState } from '@/hooks/useMenuState'

export interface Tab {
  key: string;
  tab: string | VNodeChild
}

export interface Route {
  path: string;
  breadcrumbName: string;
  children: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}

export interface BreadcrumbItemRender {
  route: Route;
  params: Record<any, any>;
  routes: Route[];
  paths: string[];
}

export default defineComponent({
  name: 'PageContainer',
  components: {
    GridContent,
    PageHeaderContent
  },
  props: {
    // 注意：tabList 优先级低于 v-slot:footer
    tabList: {
      type: Array as PropType<any>,
      default: (): Tab[] => []
    },
    // 支持 v-model:tabActiveKey
    tabActiveKey: {
      type: String,
      default: ''
    },
    title: {
      type: [String, Boolean],
      default: false
    },
    subTitle: {
      type: [String, Boolean],
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    back: {
      type: Function,
      default: undefined
    },
    prefixCls: {
      type: String,
      default: 'ant-pro'
    },
    showBreadcrumb: {
      type: Boolean,
      default: true
    }
  },
  emits: ['tab-change', 'update:tab-active-key'],
  setup (props, { attrs, slots, emit }) {
    const { getPrefixCls } = injectProProvider()
    const { breadcrumb } = injectMenuState()
    const prefixedClassName = getPrefixCls('page-container')
    const classNames = ref({
      [prefixedClassName]: true,
      [`${prefixedClassName}-ghost`]: props.ghost
    })
    const { default: hasChildren, extra: hasExtra, footer: hasFooter, content: hasContent, extraContent: hasExtraContent, tags: hasTags } = slots

    // 当未设置 back props 或未监听 @back，不显示 back
    // props 的 back 事件优先级高于 @back，需要注意
    const onBack = props.back || attrs.onBack

    const handleBack =
      (onBack &&
        ((): void => {
          // this.$emit('back')
          // call props back func
          onBack()
        })) ||
      undefined

    function handleTabChange (activeKey: string): void {
      emit('tab-change', activeKey)
      emit('update:tab-active-key', activeKey)
    }

    function customBreadcrumbRender ({ route, params, routes }: BreadcrumbItemRender): VNode {
      const breadcrumbName = route.breadcrumbName
      return (
        (routes.indexOf(route) === routes.length - 1 &&
          h('span',
            null,
            { default: withCtx(() => [createTextVNode(breadcrumbName)]) })
        ) ||
        h(RouterLink,
          { to: { path: route.path || '/', params } },
          { default: withCtx(() => [createTextVNode(breadcrumbName)]) }
        )
      )
    }

    return {
      breadcrumb,
      hasChildren,
      hasExtra,
      hasFooter,
      hasContent,
      hasExtraContent,
      hasTags,
      classNames,
      prefixedClassName,

      handleBack,
      handleTabChange,
      customBreadcrumbRender
    }
  }
})
</script>

<style scoped lang="less">
@import "~@/assets/styles/variables";

@pro-layout-page-container: ~'@{ant-prefix}-pro-page-container';

.@{pro-layout-page-container}-children-content {
  margin: 24px 24px 0;
}

.@{pro-layout-page-container} {
  &-warp {
    background-color: @component-background;

    .@{ant-prefix}-tabs-nav {
      margin: 0;
    }

    // fix antd@4 upgrade PageHeader style.
    .ant-page-header-heading {
      .ant-page-header-heading-title,
      .ant-page-header-heading-extra {
        margin: 4px 0;
      }

      .ant-page-header-heading-sub-title {
        margin: 9px 0;
      }
    }
  }

  &-ghost {
    .@{pro-layout-page-container}-warp {
      background-color: transparent;
    }
  }
}

.@{pro-layout-page-container}-main {
  .@{pro-layout-page-container}-detail {
    display: flex;
  }

  .@{pro-layout-page-container}-row {
    display: flex;
    width: 100%;
  }

  .@{pro-layout-page-container}-title-content {
    margin-bottom: 16px;
  }

  .@{pro-layout-page-container}-title,
  .@{pro-layout-page-container}-content {
    flex: auto;
  }

  .@{pro-layout-page-container}-extraContent,
  .@{pro-layout-page-container}-main {
    flex: 0 1 auto;
  }

  .@{pro-layout-page-container}-main {
    width: 100%;
  }

  .@{pro-layout-page-container}-title {
    margin-bottom: 16px;
  }

  .@{pro-layout-page-container}-logo {
    margin-bottom: 16px;
  }

  .@{pro-layout-page-container}-extraContent {
    min-width: 242px;
    margin-left: 88px;
    text-align: right;
  }
}

@media screen and (max-width: @screen-xl) {
  .@{pro-layout-page-container}-main {
    .@{pro-layout-page-container}-extraContent {
      margin-left: 44px;
    }
  }
}

@media screen and (max-width: @screen-lg) {
  .@{pro-layout-page-container}-main {
    .@{pro-layout-page-container}-extraContent {
      margin-left: 20px;
    }
  }
}

@media screen and (max-width: @screen-md) {
  .@{pro-layout-page-container}-main {
    .@{pro-layout-page-container}-row {
      display: block;
    }

    .@{pro-layout-page-container}-action,
    .@{pro-layout-page-container}-extraContent {
      margin-left: 0;
      text-align: left;
    }
  }
}

@media screen and (max-width: @screen-sm) {
  .@{pro-layout-page-container}-detail {
    display: block;
  }

  .@{pro-layout-page-container}-extraContent {
    margin-left: 0;
  }
}
</style>
