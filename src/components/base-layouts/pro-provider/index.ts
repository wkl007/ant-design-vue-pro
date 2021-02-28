import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { App, computed, ComputedRef, inject, PropType, provide, RenderFunction, SetupContext, toRefs } from 'vue'
import type { ContentWidth } from '@/types/store/app'

export interface ProProviderProps {
  prefixCls: string;
}

export interface ProProviderData {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  i18n: (t: string) => string;
  contentWidth: ComputedRef<ContentWidth>;
}

export const ProConfigSymbol = 'proGlobalConfig'

/**
 * 提供 i18n contentWidth getPrefixCls 供全局使用
 */
const ProProvider = {
  name: 'ProProvider',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro'
    }
  },
  setup (props: ProProviderProps, { slots }: SetupContext): RenderFunction | void {
    const store = useStore()
    const { t } = useI18n()
    const { prefixCls } = toRefs(props)
    const contentWidth = computed(() => store.getters.contentWidth)

    // 获取类名
    function getPrefixCls (suffixCls?: string, customizePrefixCls?: string): string {
      if (customizePrefixCls) return customizePrefixCls
      return suffixCls ? `${prefixCls.value}-${suffixCls}` : prefixCls.value
    }

    const proConfigProvider = {
      i18n: t,
      contentWidth,
      getPrefixCls
    }

    provide(ProConfigSymbol, proConfigProvider)

    return () => slots.default?.()
  },
  install (app: App): void {
    app.component(ProProvider.name, ProProvider)
  }
}

/**
 * 获取 i18n contentWidth getPrefixCls
 */
export function injectProProvider (): ProProviderData {
  return inject(ProConfigSymbol, {} as ProProviderData)
}

export default ProProvider