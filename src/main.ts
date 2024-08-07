import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@/presets/aura'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'
import Button from 'primevue/button'

import './style.css'
import { createDatabase } from './database'
import App from './App.vue'
import router from './router'

const database = await createDatabase()
const app = createApp(App)
app.use(router)
app.use(database)
app.use(PrimeVue, { unstyled: true, pt: Aura })
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Select', Select)
app.component('Button', Button)
app.mount('#app')
