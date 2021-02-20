import type { AppState, Lang } from '@/types/store/app'
import { loadStorage } from '@/utils/cache'
import { APP_LANG } from '@/utils/constants'

export const state: AppState = {
  lang: loadStorage(APP_LANG, 'zh-CN') as Lang,
  device: 'desktop',
  layout: 'side',
  navTheme: 'dark',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixedSidebar: false,
  menu: { locale: false },
  splitMenus: false,
  title: 'Admin Pro',
  primaryColor: '#1890ff',
  colorWeak: false,
  transitionName: '',
  multiTab: true,
  multiTabFixed: false
}
