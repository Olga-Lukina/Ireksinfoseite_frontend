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
            class="h-16 mb-2"
            src="@/assets/images/logos.svg"
            alt="ireks-logo"
        /></router-link>
      </li>
      <li>
        <router-link to="/register"
          ><img src="@/assets/images/register.svg" alt="register"
        /></router-link>
      </li>
      <li v-if="$store.state.user">
        <router-link to="/dashboard">
          {{ $store.state.user.name }}
        </router-link>
      </li>
    </ul>
  </div>
  <router-view :key="$route.params" />
</template>

<script>
export default {};
</script>

<style scoped></style>
