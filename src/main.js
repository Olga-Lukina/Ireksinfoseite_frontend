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
    // set user data
    async register(state, userData) {
      const data = axios.post('http://localhost/api/register', userData);
      localStorage.setItem('token', data.data.token);
    },
    async login(state, userData) {
      const data = axios.post('http://localhost/api/login', userData);
      localStorage.setItem('token', data.data.token);
    },
    // automatic login
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
    // logout
    CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload();
    },
  },
  // if logged in..
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
  actions: {
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
  },
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
