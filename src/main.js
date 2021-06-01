import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router';
import store from '../vuex/store';

createApp(App)
  .use(router)
  .mount('#app');
