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
            <h3 class="mb-8 text-3xl text-center">Register</h3>

            <form action="post" @submit.prevent="register">
              <input
                v-model="name"
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="name"
                placeholder="Name"
                value
              />

              <input
                v-model="surname"
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="surname"
                placeholder="Surname"
                value
              />
              <input
                v-model="telephone"
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="telephone"
                placeholder="Telephone"
                value
              />

              <input
                v-model="email"
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="email"
                placeholder="E-mail"
                value
              />
              <input
                v-model="companyname"
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="companyname"
                placeholder="Companyname"
                value
              />
              <input
                v-model="jobposition"
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="jobposition"
                placeholder="Jobposition"
                value
              />

              <input
                v-model="password"
                type="password"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="Password"
                placeholder="Password"
                value
              />
              <input
                v-model="password_confirmation"
                type="password"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="password_confirmation"
                placeholder="Password confirmation"
                value
              />

              <button
                type="submit"
                name="button"
                class="w-full py-3 my-1 text-center text-white rounded bg-red-850 border-1 hover:bg-red-700 "
              >
                Send
              </button>

              <div class="mt-4 text-lg text-center text-red-850">
                {{ error }}
              </div>

              <div class="flex items-center justify-between my-4">
                <div class="flex items-center">
                  <input
                    class="mr-2"
                    type="checkbox"
                    name="save"
                    value="save"
                  />
                  <label for="save" class="select-none">save</label>
                </div>

                <div class=" text-red-850">
                  <router-link to="/login">login</router-link>
                </div>
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
      // form state
      formData: {
        name: '',
        surname: '',
        telephone: '',
        email: '',
        companyname: '',
        jobposition: '',
        password: '',
        password_confirmation: '',
        // state
        errors: null,
        acceptTerms: null,
      },
    };
  },
  methods: {
    async register() {
      try {
        const data = await axios.post('http://localhost/api/register', {
          name: this.name,
          surname: this.surname,
          telephone: this.telephone,
          email: this.email,
          companyname: this.companyname,
          jobposition: this.jobposition,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });
        localStorage.setItem('token', data.data.token);
        this.$store.commit('SET_LOGGED_IN', true);
        this.$store.commit('SET_USER_DATA', data.data.user);
        this.GStore.flashMessage = 'You are successfully registerd';
        setTimeout(() => {
          this.GStore.flashMessage = '';
        }, 3000);
        this.$router.go(-1);
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
