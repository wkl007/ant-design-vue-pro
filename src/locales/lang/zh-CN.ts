import antd from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment/locale/zh-cn'
import globals from './globals/zh-CN'
import pages from './pages/zh-CN'
import routes from './routes/zh-CN'
import components from './components/zh-CN'

const locales = {
  localeName: 'zhCN',
  momentLocaleName: 'zh-cn',
  antd,
  moment,
  ...globals,
  ...pages,
  ...routes,
  ...components
}

export default locales
