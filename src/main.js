import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(faPhone, fas, fab);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(AOS.init({
    once:true,
}))

app.use(router)

app.mount('#app')

