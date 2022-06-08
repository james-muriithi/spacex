import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

import './index.css';

const app = createApp(App)

// libraries
app.use(router);

// components

app.mount('#app')
