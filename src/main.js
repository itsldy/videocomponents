import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
// import 'video.js/dist/video-js.css';
const app = createApp(App);
app.use(dataV);
app.mount('#app');
