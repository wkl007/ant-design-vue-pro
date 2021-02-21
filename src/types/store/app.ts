export type Lang = 'zh-CN' | 'zh-TW' | 'en-US' | 'pt-BR';

export type Device = 'desktop' | 'tablet' | 'mobile';

export type Layout = 'mix' | 'side' | 'left' | 'top';

export type MenuTheme = 'dark' | 'light';

export type ContentWidth = 'Fluid' | 'Fixed';

export interface AppState {
  /**
   * 语言
   */
  lang: Lang;
  /**
   * 设备类型
   */
  device: Device;
  /**
   * 导航模式
   */
  layout: Layout;
  /**
   * 菜单风格
   */
  navTheme: MenuTheme | 'realDark';
  /**
   * 内容区域宽度
   */
  contentWidth: ContentWidth;
  /**
   * 固定 header
   */
  fixedHeader: boolean;
  /**
   * 固定侧边菜单
   */
  fixedSidebar: boolean;
  /**
   * 菜单相关
   */
  menu: { locale?: boolean; defaultOpenAll?: boolean };
  /**
   * 自动分割菜单，只对 'mix' | 'side' 布局生效
   */
  splitMenus: boolean;
  /**
   * 标题
   */
  title: string;
  /**
   * 主题色
   */
  primaryColor: string;
  /**
   * 色弱模式
   */
  colorWeak: boolean;
  /**
   * 路由动画
   */
  transitionName: string;
  /**
   * 多标签
   */
  multiTab: boolean;
  /**
   * 固定多标签
   */
  multiTabFixed: boolean;
}
