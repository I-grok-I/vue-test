import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import uis from './components/UI/index.js'
// import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)

uis.forEach(ui => app.component(ui.name, ui))

app.mount('#app')
