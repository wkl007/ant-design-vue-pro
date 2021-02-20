import type { App } from 'vue'
import {
  AlipayCircleOutlined,
  AppstoreAddOutlined,
  CheckCircleOutlined,
  CopyrightOutlined,
  FormOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  TableOutlined,
  TaobaoCircleOutlined,
  UnorderedListOutlined,
  UserOutlined,
  WarningOutlined,
  WeiboCircleOutlined
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
}
