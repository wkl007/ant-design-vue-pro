import type { VNodeChild } from 'vue'
import { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface MenuRouteMeta {
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string | VNodeChild | JSX.Element;
  authority?: string | string[];
}

export type MenuDataItem = {
  children?: Array<MenuDataItem>;
  meta?: MenuRouteMeta & RouteMeta
} & RouteRecordRaw
