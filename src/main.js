import { createApp } from 'vue'
import App from './App.vue'
//Importamos la constante router de router.js
import router from './Router'

createApp(App)
.use(router) //Añadimos este .use
.mount('#app')

