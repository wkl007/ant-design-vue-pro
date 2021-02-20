import { createApp } from 'vue'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupAntd } from '@/configs/antd'
import { setupI18n } from '@/configs/i18n'
import { setupIcons } from '@/configs/icons'
import '@/configs/interceptor'
import '@/configs/registerServiceWorker'

import '@/assets/styles/index.less'

const app = createApp(App)

setupRouter(app) // vue-router
setupStore(app) // vuex
setupAntd(app) // antd
setupI18n(app) // i18n
setupIcons(app) // icons

app.mount('#app')
