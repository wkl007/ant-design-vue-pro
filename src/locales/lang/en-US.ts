import antd from 'ant-design-vue/es/locale/en_US'
import moment from 'moment/locale/eu'
import routes from './routes/en-US'

const locales = {
  localeName: 'enUS',
  momentLocaleName: 'eu',
  antd,
  moment,

  ...routes
}

export default locales
