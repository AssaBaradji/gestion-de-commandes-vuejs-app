import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/style.css'

import { createApp } from 'vue';
import App from './App.vue';  
import router from './router/index'; 

createApp(App).use(router).mount('#app');
