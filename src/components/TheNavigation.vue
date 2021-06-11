<template>
  <div class="container mx-auto">
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
        <router-link to="/register"
          ><img src="@/assets/images/register.svg" alt="register"
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
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped></style>
