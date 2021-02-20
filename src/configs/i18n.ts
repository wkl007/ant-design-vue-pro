import type { App } from 'vue'
import { i18n } from '@/locales'

/**
 * i18n 导入
 * @param app
 */
export function setupI18n (app: App<Element>): void {
  app.use(i18n)
}
