<template>
   <div class="home">
    <CategoriesListing />
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
import CategoriesListing from '@/views/CategoriesListing.vue'

export default {
  name: "home",
  components: {
    CategoriesListing
  },
  data() {
    return {
      categories: store.categories
    };
  }
};
</script>
