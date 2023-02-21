import { createApp } from 'vue';
import { createPinia } from 'pinia';
import dayjs from '@/plugins/dayjs';

import App from './App.vue';
import router from './router';

// import './assets/main.css';
import '@/styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(dayjs);

app.mount('#app');
