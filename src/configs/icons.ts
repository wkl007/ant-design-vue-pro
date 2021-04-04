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
  EllipsisOutlined,
  FormOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
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
  StarTwoTone,
  TableOutlined,
  TaobaoCircleOutlined,
  UnorderedListOutlined,
  UploadOutlined,
  UserOutlined,
  WarningOutlined,
  WeiboCircleOutlined,
  EditOutlined,
  ShareAltOutlined,
  InfoCircleOutlined
} from '@ant-design/icons-vue'

/**
 * Icon 按需加载配置
 * @param app
 */
export function setupIcons (app: App<Element>): void {
  app.component(AppstoreAddOutlined.displayName, AppstoreAddOutlined)
  app.component(CheckCircleOutlined.displayName, CheckCircleOutlined)
  app.component(CopyrightOutlined.displayName, CopyrightOutlined)
  app.component(FormOutlined.displayName, FormOutlined)
  app.component(HeartOutlined.displayName, HeartOutlined)
  app.component(HistoryOutlined.displayName, HistoryOutlined)
  app.component(HomeOutlined.displayName, HomeOutlined)
  app.component(TableOutlined.displayName, TableOutlined)
  app.component(UnorderedListOutlined.displayName, UnorderedListOutlined)
  app.component(WarningOutlined.displayName, WarningOutlined)
  app.component(UserOutlined.displayName, UserOutlined)
  app.component(LockOutlined.displayName, LockOutlined)
  app.component(MobileOutlined.displayName, MobileOutlined)
  app.component(MailOutlined.displayName, MailOutlined)
  app.component(AlipayCircleOutlined.displayName, AlipayCircleOutlined)
  app.component(TaobaoCircleOutlined.displayName, TaobaoCircleOutlined)
  app.component(WeiboCircleOutlined.displayName, WeiboCircleOutlined)
  app.component(MenuFoldOutlined.displayName, MenuFoldOutlined)
  app.component(MenuUnfoldOutlined.displayName, MenuUnfoldOutlined)
  app.component(GlobalOutlined.displayName, GlobalOutlined)
  app.component(SettingOutlined.displayName, SettingOutlined)
  app.component(LogoutOutlined.displayName, LogoutOutlined)
  app.component(CloseOutlined.displayName, CloseOutlined)
  app.component(ReloadOutlined.displayName, ReloadOutlined)
  app.component(EllipsisOutlined.displayName, EllipsisOutlined)
  app.component(LinkOutlined.displayName, LinkOutlined)
  app.component(LeftOutlined.displayName, LeftOutlined)
  app.component(RightOutlined.displayName, RightOutlined)
  app.component(CloudDownloadOutlined.displayName, CloudDownloadOutlined)
  app.component(CloudOutlined.displayName, CloudOutlined)
  app.component(DownOutlined.displayName, DownOutlined)
  app.component(DownloadOutlined.displayName, DownloadOutlined)
  app.component(PlusOutlined.displayName, PlusOutlined)
  app.component(ColumnHeightOutlined.displayName, ColumnHeightOutlined)
  app.component(FullscreenExitOutlined.displayName, FullscreenExitOutlined)
  app.component(FullscreenOutlined.displayName, FullscreenOutlined)
  app.component(CloseCircleOutlined.displayName, CloseCircleOutlined)
  app.component(DingdingOutlined.displayName, DingdingOutlined)
  app.component(UploadOutlined.displayName, UploadOutlined)
  app.component(StarTwoTone.displayName, StarTwoTone)
  app.component(LikeOutlined.displayName, LikeOutlined)
  app.component(MessageFilled.displayName, MessageFilled)
  app.component(EditOutlined.displayName, EditOutlined)
  app.component(ShareAltOutlined.displayName, ShareAltOutlined)
  app.component(InfoCircleOutlined.displayName, InfoCircleOutlined)
}
