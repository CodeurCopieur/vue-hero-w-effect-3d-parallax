import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// config router
import router from './router'
import { rain } from './rain.js'

const app = createApp(App);

app.use(router)
setTimeout(()=> {
  rain();
}, 10)
app.mount('#app')
