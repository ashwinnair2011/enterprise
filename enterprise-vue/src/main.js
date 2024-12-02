import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './auth'; // Import auth.js to trigger its initialization

const app = createApp(App);
app.use(router);
app.mount('#app');