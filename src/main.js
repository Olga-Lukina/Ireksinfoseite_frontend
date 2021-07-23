import { createApp, reactive } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import router from './router';
import { createStore } from 'vuex';
import axios from 'axios';

// using reactiv method for flash massages
const GStore = reactive({ flashMessage: '' });

export const store = createStore({
  state: {
    user: null,
    loggedIn: false,
  },
  mutations: {
    SET_LOGGED_IN(state, isLoggedIn) {
      state.loggedIn = isLoggedIn;
    },
    // set user data
    // automatic login

    // logout
    SET_USER_DATA(state, user) {
      state.user = user;
    },
  },

  getters: {
    loggedIn(state) {
      return state.loggedIn;
    },
    isAdmin(state) {
      return state.user.role_id === 1;
    },
  },
  actions: {
    // holding user data
    async autoLogin({ commit }) {
      if (localStorage.getItem('token')) {
        try {
          const data = await axios.get('http://localhost/api/me', {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          });
          commit('SET_USER_DATA', data.data);
          commit('SET_LOGGED_IN', true);
        } catch (err) {
          alert(err.message);
        }
      }
    },
    async logout({ commit }) {
      try {
        const data = await axios.post(
          'http://localhost/api/logout',
          {},
          {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        );
        localStorage.removeItem('token');
        commit('SET_USER_DATA', null);
        commit('SET_LOGGED_IN', false);
      } catch (err) {
        alert(err.message);
      }
    },
  },
});

createApp(App)
  .use(router)
  .use(store)
  .provide('GStore', GStore)
  .mount('#app');
