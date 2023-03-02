import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BackToTop from 'vue-backtotop'

import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(BackToTop)
app.mount('#app')
