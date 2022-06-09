import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

import PageSection from "@/components/PageSection.vue";
import './index.css';

const app = createApp(App)

// libraries
app.use(router);

// components
app.component('PageSection', PageSection)

app.mount('#app')
