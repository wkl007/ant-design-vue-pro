import type { VNodeChild } from 'vue'
import { RouteMeta, RouteRecordRaw } from 'vue-router'

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
