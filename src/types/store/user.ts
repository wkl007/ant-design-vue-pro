export enum Action {
  ADD = 'add',
  DELETE = 'delete',
  UPDATE = 'update',
  QUERY = 'query',
  IMPORT = 'import',
  EXPORT = 'export',
}

export interface Permission {
  /* 权限ID */
  id: string | number;
  /* 权限归属的角色 */
  roleId?: string | number;
  /* 权限名称 */
  name: string;
  /* 权限显示的名字 */
  label?: string;
  /* 权限拥有的操作 [增,删,改,查] */
  actions?: Action[];
}

export interface UserInfo {
  username: string;
  nickname: string;
  avatar: string;
  roles?: Array<string>;
  extra: {
    [key: string]: any;
  }
}

export interface UserState {
  loginStatus: number;
  accessToken: string;
  userInfo: UserInfo;
  allowRouters: []
}
