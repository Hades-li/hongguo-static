import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fontsource/noto-sans-sc/400.css'
import '@fontsource/noto-sans-sc/500.css'
import '@fontsource/noto-sans-sc/700.css'
import '@fontsource/noto-sans-sc/900.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/900.css'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
