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
            <h3 class="mb-8 text-3xl text-center">Register</h3>

            <Form action="post" @submit="register" :validation-schema="schema">
              <Field
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="person_name"
                placeholder="Name"
                value
              />
              <ErrorMessage name="person_name" class="text-red-600" />

              <Field
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="person_surname"
                placeholder="Surname"
                value
              />
              <ErrorMessage name="person_surname" class="text-red-600" />

              <Field
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="telephone"
                placeholder="Telephone"
                value
              />
              <ErrorMessage name="telephone" class="text-red-600" />

              <Field
                type="email"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="email_addr"
                placeholder="E-mail"
                value
              />
              <ErrorMessage name="email_addr" class="text-red-600" />

              <Field
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="companyname"
                placeholder="Companyname"
                value
              />
              <ErrorMessage name="companyname" class="text-red-600" />

              <Field
                type="text"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="jobposition"
                placeholder="Jobposition"
                value
              />
              <ErrorMessage name="jobposition" class="text-red-600" />
              <Field
                type="password"
                class="block w-full p-3 mb-4 border rounded border-grey-light"
                name="new_password"
                placeholder="Password"
                value
              />
              <ErrorMessage name="new_password" class="text-red-600" />
              <input
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

              <div class="flex items-center justify-between my-4">
                <div>
                  <Field
                    name="acceptTerms"
                    type="checkbox"
                    :value="true"
                    class="w-4 h-4 mr-2"
                    :class="{ 'is-invalid': errors.acceptTerms }"
                  />
                  <label for="acceptTerms" class="w-4 h-4"
                    >Accept Terms & Conditions</label
                  >
                </div>

                <div class=" text-red-850">
                  <router-link to="/login">| Login</router-link>
                </div>
              </div>
              <ErrorMessage name="acceptTerms" class="text-red-600" />
            </Form>
            <ul id="errors" class="mt-5 " style="color: red">
              <li v-for="error in errors" :key="error">
                {{ error }}
              </li>
            </ul>
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
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    async register(values) {
      console.log(values.person_name);
      try {
        const data = await axios.post('http://localhost/api/register', {
          name: values.person_name,
          surname: values.person_surname,
          telephone: values.telephone,
          email: values.email_addr,
          companyname: values.companyname,
          jobposition: values.jobposition,
          password: values.new_password,
          password_confirmation: values.password_confirmation,
        });
        localStorage.setItem('token', data.data.token);
        this.$store.commit('SET_LOGGED_IN', true);
        this.$store.commit('SET_USER_DATA', data.data.user);
        this.GStore.flashMessage = 'You are successfully registerd';
        setTimeout(() => {
          this.GStore.flashMessage = '';
        }, 3000);
        this.$router.go(-1);
      } catch (e) {
        this.errors = formatErrorMessages(e);
      }
    },
  },
  setup() {
    const schema = Yup.object().shape({
      person_name: Yup.string()
        .required()
        .label('Name'),
      person_surname: Yup.string()
        .required()
        .label('Surname'),
      telephone: Yup.string()
        .required()
        .label('Your telephone'),
      email_addr: Yup.string()
        .email()
        .required()
        .label('Email Address'),
      companyname: Yup.string()
        .required()
        .label('Your companyname'),
      jobposition: Yup.string()
        .required()
        .label('Your jobposition'),
      new_password: Yup.string()
        .min(5)
        .required()
        .label('Your Password'),
      password_confirmation: Yup.string()
        .min(5)
        .required()
        .label('Your password confirmation'),
      acceptTerms: Yup.string()
        .required()
        .label('Accept terms'),
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
