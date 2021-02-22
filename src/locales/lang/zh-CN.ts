import antd from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment/locale/zh-cn'
import pages from './pages/zh-CN'
import routes from './routes/zh-CN'
import components from './components/zh-CN'

const locales = {
  localeName: 'zhCN',
  momentLocaleName: 'zh-cn',
  antd,
  moment,
  ...pages,
  ...routes,
  ...components
}

export default locales
