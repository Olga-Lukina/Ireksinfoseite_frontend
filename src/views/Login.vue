<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container">
      <div class="flex flex-col m-4 bg-grey-lighter">
        <div
          class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto"
        >
          <div
            class="w-full px-6 py-8 text-black rounded shadow-md rounded-t-3xl"
          >
            <h3 class="mb-8 text-3xl text-center">Войти</h3>

            <form @submit.prevent="login">
              <input
                v-model="email"
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="email"
                placeholder="E-mail"
                value
              />

              <input
                v-model="password"
                type="password"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="Password"
                placeholder="Пароль"
                value
              />

              <button
                type="submit"
                name="button"
                class="w-full py-3 my-1 text-center text-white rounded bg-red-850 border-1 hover:bg-red-700 bg-green hover:bg-green-dark focus:outline-none"
              >
                Войти
              </button>
              <div class="mt-4 text-lg text-center text-red-850">
                {{ error }}
              </div>
              <div class="mt-6 text-red-850">
                <router-link to="/register">Регистрация</router-link>
              </div>
            </form>
            <div class="mt-4 text-sm text-center text-grey-dark">
              Настоящим подтверждаю, что ознакомился
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                с положением о конфиденциальности
              </a>

              и принимаю его.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  inject: ['GStore'],
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const data = await axios.post('http://localhost/api/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', data.data.token);
        this.$store.commit('SET_LOGGED_IN', true);
        this.$store.commit('SET_USER_DATA', data.data.user);

        this.GStore.flashMessage = 'You are successfully logged in';
        setTimeout(() => {
          this.GStore.flashMessage = '';
        }, 3000);
        this.$router.push({ name: 'Home' });
      } catch (err) {
        if (err.response) {
          this.error = err.response.data.message;
        }
        console.log(err.message);
      }
    },
  },
};
</script>

<style scoped></style>
