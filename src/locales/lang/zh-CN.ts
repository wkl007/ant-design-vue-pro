import antd from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment/locale/zh-cn'
import routes from './routes/zh-CN'

const locales = {
  localeName: 'zhCN',
  momentLocaleName: 'zh-cn',
  antd,
  moment,
  ...routes
}

export default locales
