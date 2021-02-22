import antd from 'ant-design-vue/es/locale/en_US'
import moment from 'moment/locale/eu'
import pages from './pages/en-US'
import routes from './routes/en-US'
import components from './components/en-US'

const locales = {
  localeName: 'enUS',
  momentLocaleName: 'eu',
  antd,
  moment,
  ...pages,
  ...routes,
  ...components
}

export default locales
