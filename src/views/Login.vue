<template>
  <div class="bg-gray-200 border-2 border-gray-200 home rounded-t-3xl">
    <div class="container mx-auto">
      <div
        class="p-4 m-4 text-center text-white bg-green-600 flashMessage"
        v-if="GStore.flashMessage"
      >
        {{ GStore.flashMessage }}
      </div>
      <div class="flex flex-col m-4 bg-grey-lighter">
        <div
          class="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto"
        >
          <div
            class="w-full px-6 py-8 text-black rounded shadow-md rounded-t-3xl"
          >
            <h3 class="mb-8 text-3xl text-center">Login</h3>

            <Form @submit="login" :validation-schema="schema">
              <Field
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="email_addr"
                placeholder="E-mail"
                value
              />
              <ErrorMessage name="email_addr" class="text-red-600" />
              <Field
                type="password"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="new_password"
                placeholder="Password"
                value
              />
              <ErrorMessage name="new_password" class="text-red-600" />
              <button
                type="submit"
                name="button"
                class="w-full py-3 my-1 text-center text-white rounded bg-red-850 border-1 hover:bg-red-700 bg-green hover:bg-green-dark focus:outline-none"
              >
                Login
              </button>
              <div class="mt-6 text-red-850">
                <router-link to="/register">Register</router-link>
              </div>
            </Form>
            <ul id="errors" class="mt-5 " style="color: red">
              <li v-for="error in errors" :key="error">
                {{ error }}
              </li>
            </ul>
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
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import { formatErrorMessages } from '../helpers';
export default {
  inject: ['GStore'],
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    async login(values) {
      try {
        const data = await axios.post('http://localhost/api/login', {
          email: values.email_addr,
          password: values.new_password,
        });
        localStorage.setItem('token', data.data.token);
        this.$store.commit('SET_LOGGED_IN', true);
        this.$store.commit('SET_USER_DATA', data.data.user);

        this.GStore.flashMessage = 'You are successfully logged in';
        setTimeout(() => {
          this.GStore.flashMessage = '';
        }, 3000);
        this.$router.go(-1);
      } catch (e) {
        this.errors = formatErrorMessages(e);
      }
    },
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const schema = Yup.object().shape({
      email_addr: Yup.string()
        .email()
        .required()
        .label('Email Address'),
      new_password: Yup.string()
        .min(5)
        .required()
        .label('Your Password'),
    });

    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }

    return {
      schema,
      onSubmit,
    };
  },
};
</script>

<style scoped></style>
