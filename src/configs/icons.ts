import type { App } from 'vue'
import {
  AppstoreAddOutlined,
  CheckCircleOutlined,
  FormOutlined,
  HeartOutlined,
  HistoryOutlined,
  HomeOutlined,
  TableOutlined,
  UnorderedListOutlined,
  WarningOutlined
} from '@ant-design/icons-vue'

/**
 * Icon 按需加载配置
 * @param app
 */
export function setupIcons (app: App<Element>): void {
  app.component(AppstoreAddOutlined.displayName, AppstoreAddOutlined)
  app.component(CheckCircleOutlined.displayName, CheckCircleOutlined)
  app.component(FormOutlined.displayName, FormOutlined)
  app.component(HeartOutlined.displayName, HeartOutlined)
  app.component(HistoryOutlined.displayName, HistoryOutlined)
  app.component(HomeOutlined.displayName, HomeOutlined)
  app.component(TableOutlined.displayName, TableOutlined)
  app.component(UnorderedListOutlined.displayName, UnorderedListOutlined)
  app.component(WarningOutlined.displayName, WarningOutlined)
}
