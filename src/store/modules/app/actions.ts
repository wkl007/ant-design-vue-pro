import type { ActionTree } from 'vuex'
import type { RootState } from '@/types/store'
import type { AppState, Lang } from '@/types/store/app'
import * as types from './mutationTypes'
import { saveStorage } from '@/utils/cache'
import { APP_LANG } from '@/utils/constants'

export const actions: ActionTree<AppState, RootState> = {
  /**
   * 设置语言
   * @param commit
   * @param lang
   */
  setLang ({ commit }, lang: Lang) {
    commit(types.SET_LANG, saveStorage(APP_LANG, lang))
  }
}
