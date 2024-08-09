import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue';

const pinia = createPinia()
const app = createApp(App)

app.use(Quasar)
app.use(pinia)
app.mount('#app')