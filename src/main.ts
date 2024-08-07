import { createApp } from 'vue'

import './style.css'
import { createDatabase } from './database'
import App from './App.vue'
import router from './router'

const database = await createDatabase()
const app = createApp(App)
app.use(router)
app.use(database)
app.mount('#app')
