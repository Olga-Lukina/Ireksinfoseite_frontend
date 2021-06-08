import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router';
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    async register(state, accountData) {
      try {
        const data = await axios.post(
          'http://localhost/api/register',
          accountData
        );
        localStorage.setItem('token', data.data.token);
      } catch (err) {
        alert(err.message);
      }
    },
    async me(state) {
      if (localStorage.getItem('token')) {
        try {
          const data = await axios.get('http://localhost/api/me', {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          });
          state.user = data.data;
        } catch (err) {
          alert(err.message);
        }
      }
    },
  },
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
