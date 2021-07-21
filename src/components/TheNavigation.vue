<template>
  <div class="container mx-auto">
    <div
      class="p-4 m-4 text-center text-white bg-green-600 flashMessage"
      v-if="GStore.flashMessage"
    >
      {{ GStore.flashMessage }}
    </div>
    <ul
      class="flex items-center justify-center px-4 pt-4 space-x-10 m:space-x-24 "
    >
      <li>
        <router-link to="/location"
          ><img src="@/assets/images/location.svg" alt="location"
        /></router-link>
      </li>
      <li>
        <router-link to="/"
          ><img
            class="h-12 mb-4"
            src="@/assets/images/logos.svg"
            alt="ireks-logo"
        /></router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link to="/login"
          ><img src="@/assets/images/login.svg" alt="login"
        /></router-link>
      </li>
      <button v-else type="button" class="logoutButton" @click="logout">
        <img src="@/assets/images/logout.svg" alt="logout" />
      </button>
      <li v-if="loggedIn" class="font-black uppercase text-red-850">
        <router-link to="/">
          {{ $store.state.user.name }}
        </router-link>
      </li>
    </ul>
  </div>
  <router-view :key="$route.params" />
</template>

<script>
import { authComputed } from '../helpers.js';
export default {
  inject: ['GStore'],
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.GStore.flashMessage = 'You are logged out';
      setTimeout(() => {
        this.GStore.flashMessage = '';
      }, 3000);
    },
  },
};
</script>

<style scoped></style>
