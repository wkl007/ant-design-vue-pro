import type { UserState } from '@/types/store/user'
import { loadCookie, loadStorage } from '@/utils/cache'
import { ACCESS_TOKEN, LOGIN_STATUS } from '@/utils/constants'

export const state: UserState = {
  loginStatus: Number(loadCookie(LOGIN_STATUS, '0')),
  accessToken: loadStorage(ACCESS_TOKEN, '') as string,
  userInfo: {
    username: '',
    nickname: '',
    avatar: '',
    role: undefined,
    extra: {}
  },
  allowRouters: []
}
