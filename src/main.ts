import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@/presets/aura'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import ConfirmPopup from 'primevue/confirmpopup'
import ConfirmationService from 'primevue/confirmationservice'

import './style.css'
import { createDatabase } from './database'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(PrimeVue, { unstyled: true, pt: Aura })
app.use(ConfirmationService)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('Select', Select)
app.component('Button', Button)
app.component('DatePicker', DatePicker)
app.component('ConfirmPopup', ConfirmPopup)
;(async () => {
  const database = await createDatabase()
  app.use(database)
  app.mount('#app')
})()
