import { ref } from 'vue'
import { createI18n } from 'vue-i18n'
import moment from 'moment'
import type { Lang } from '@/types/store/app'
import zhCN from './lang/zh-CN'

export const locales: Array<Lang> = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR']

// 默认语言
export const defaultLang: Lang = 'zh-CN'

// 用于缓存记录已加载的语言化内容
const loadedLanguages = ref<Array<Lang>>([defaultLang])

export const i18n = createI18n({
  missingWarn: false,
  fallbackWarn: false,
  locale: defaultLang,
  messages: {
    'zh-CN': zhCN
  }
})

/**
 * 设置html语言及i18n语言
 * @param lang
 */
function setI18nLanguage (lang: Lang): Lang {
  i18n.global.locale = lang
  const HTML = document.querySelector('html')
  HTML && HTML.setAttribute('lang', lang)
  return lang
}

/**
 * 切换语言
 * @param lang
 */
export function loadLanguageAsync (lang: Lang = defaultLang): Promise<Lang> {
  return new Promise<Lang>(resolve => {
    const currentLocale = i18n.global
    if (currentLocale.locale === lang) return resolve(lang)
    if (loadedLanguages.value.includes(lang)) return resolve(setI18nLanguage(lang))
    return import(/* webpackChunkName: "lang-[request]" */`./lang/${lang}`).then(res => {
      const loadedLang = res.default
      // 设置i18n语言
      currentLocale.setLocaleMessage(lang, loadedLang)
      // 设置moment语言
      moment.updateLocale(loadedLang.momentLocaleName, loadedLang.moment)
      // 保存
      loadedLanguages.value.push(lang)
      return resolve(setI18nLanguage(lang))
    })
  })
}
