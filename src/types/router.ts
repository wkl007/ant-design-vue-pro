import type { VNodeChild } from 'vue'
import { RouteMeta, RouteRecordRaw } from 'vue-router'

export type Target = '_blank' | '_self' | unknown;

export interface MenuRouteMeta {
  /**
   * 图标
   */
  icon?: string | VNodeChild | JSX.Element;
  /**
   * 当前路由在菜单中不展现
   */
  hideInMenu?: boolean;
  /**
   * 当前路由的子级在菜单中不展现
   */
  hideChildrenInMenu?: boolean;
  /**
   * 允许访问的角色
   */
  roles?: Array<string>;
}

export type MenuDataItem = {
  children?: Array<MenuDataItem>;
  meta?: MenuRouteMeta & RouteMeta
} & RouteRecordRaw

export interface MetaRecord {
  icon?: string | VNodeChild | JSX.Element;
  title?: string;
  roles?: Array<string>;

  [key: string]: any;
}

export interface RouteProps {
  key?: string | symbol;
  path: string;
  name?: string | symbol;
  meta?: MetaRecord;
  target?: Target;
  children?: RouteProps[];
  redirect?: any;

  [key: string]: any;
}
