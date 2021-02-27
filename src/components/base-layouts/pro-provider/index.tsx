import { useStore } from 'vuex'
import {
  App,
  computed,
  ComputedRef,
  inject,
  PropType,
  provide,
  reactive,
  RenderFunction,
  SetupContext,
  toRefs
} from 'vue'
import type { ContentWidth } from '@/types/store/app'

const defaultPrefixCls = 'ant-pro'

export interface ProProviderProps {
  prefixCls: string;
  i18n: (t: string) => string;
}

export interface ProProviderData {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  i18n: (t: string) => string;
  contentWidth: ComputedRef<ContentWidth>;
}

export const defaultProProviderProps: ProProviderData = {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls
    return `${defaultPrefixCls}-${suffixCls}`
  },
  i18n: (t: string): string => t,
  contentWidth: computed(() => 'Fluid')
}

//  TODO 用 symbol 类型是最好的，但由于热更新会导致 symbol 更新，导致获取不到正确的 provide 值
export const ProConfigSymbol = 'proGlobalConfig'

const ProProvider = {
  name: 'ProProvider',
  props: {
    prefixCls: {
      type: String as PropType<string>,
      default: 'ant-pro'
    },
    i18n: {
      type: Function as PropType<(t: string) => string>,
      default: (t: string): string => t
    }
  },
  setup (props: ProProviderProps, { slots }: SetupContext): RenderFunction | void {
    const store = useStore()
    const { prefixCls, i18n } = toRefs(props)
    const contentWidth = computed(() => store.getters.contentWidth)

    function getPrefixCls (suffixCls?: string, customizePrefixCls?: string): string {
      if (customizePrefixCls) return customizePrefixCls
      return suffixCls ? `${prefixCls.value}-${suffixCls}` : prefixCls.value
    }

    const proConfigProvider = {
      i18n,
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
