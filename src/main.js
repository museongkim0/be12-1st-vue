import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'


//@@@@@@@@@@@@
import '/files/css/app.css';  // CSS 파일 import
import '/files/css/css2.css'; 
import '/files/js/app.js';
//@@@@@@@@@


const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');