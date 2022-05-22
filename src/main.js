import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createPinia } from 'pinia'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue-3'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from './App.vue'


import router from './router'

const app = createApp(App)



// app.use(createPinia())
app.use(router)

app.mount('#app')
app.use(BootstrapVue3)

// Optionally install the BootstrapVue icon components plugin

