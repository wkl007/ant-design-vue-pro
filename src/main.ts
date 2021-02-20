import { createApp } from 'vue'
import App from '@/App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupAntd } from '@/configs/antd'
import { setupIcons } from '@/configs/icons'
import '@/configs/interceptor'
import '@/configs/registerServiceWorker'

import '@/assets/styles/index.less'

const app = createApp(App)

setupRouter(app) // vue-router
setupStore(app) // vuex
setupAntd(app) // antd
setupIcons(app) // icons

app.mount('#app')
