import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/style.css'

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';  
import Home from "./components/customerList.vue"

const routes = [
    {path : '/', component : Home}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
createApp(App).use(router).mount('#app');

