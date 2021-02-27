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

//  TODO 用 symbol 类型是最好的，但由于热更新会导致 symbol 更新，导致获取不到正确的 provide 值
export const ProConfigSymbol = 'proGlobalConfig'

const ProProvider = {
  name: 'ProProvider',
  props: {
    prefixCls: {
      type: String as PropType<string>,
      default: 'ant-pro'
    }
  },
  setup (props: ProProviderProps, { slots }: SetupContext): RenderFunction | void {
    const store = useStore()
    const { t } = useI18n()
    const { prefixCls } = toRefs(props)
    const contentWidth = computed(() => store.getters.contentWidth)

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

export function injectProProvider (): ProProviderData {
  return inject(ProConfigSymbol, {} as ProProviderData)
}

export default ProProvider
