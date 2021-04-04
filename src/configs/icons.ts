import type { App } from 'vue'
import {
  AlipayCircleOutlined,
  AppstoreAddOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  ColumnHeightOutlined,
  CopyrightOutlined,
  DingdingOutlined,
  DownloadOutlined,
  DownOutlined,
  EditOutlined,
  EllipsisOutlined,
  FormOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LeftOutlined,
  LikeOutlined,
  LinkOutlined,
  LockOutlined,
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageFilled,
  MobileOutlined,
  PlusOutlined,
  ReloadOutlined,
  RightOutlined,
  SettingOutlined,
  ShareAltOutlined,
  StarTwoTone,
  TableOutlined,
  TaobaoCircleOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
  WarningOutlined,
  WeiboCircleOutlined
} from '@ant-design/icons-vue'

/**
 * Icon 按需加载配置
 * @param app
 */
export function setupIcons (app: App<Element>): void {
  const iconList = [AlipayCircleOutlined, AppstoreAddOutlined, CheckCircleOutlined, CloseCircleOutlined, CloseOutlined, CloudDownloadOutlined, CloudOutlined, ColumnHeightOutlined, CopyrightOutlined, DingdingOutlined, DownloadOutlined, DownOutlined, EditOutlined, EllipsisOutlined, FormOutlined, FullscreenExitOutlined, FullscreenOutlined, GlobalOutlined, HeartOutlined, HistoryOutlined, HomeOutlined, InfoCircleOutlined, LeftOutlined, LikeOutlined, LinkOutlined, LockOutlined, LogoutOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, MessageFilled, MobileOutlined, PlusOutlined, ReloadOutlined, RightOutlined, SettingOutlined, ShareAltOutlined, StarTwoTone, TableOutlined, TaobaoCircleOutlined, UnorderedListOutlined, UploadOutlined, UserOutlined, WarningOutlined, WeiboCircleOutlined]

  iconList.forEach(icon => {
    app.component(icon.name, icon)
  })
}
