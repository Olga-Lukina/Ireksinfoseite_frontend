<template>
   <div class="home">
    <CategoryGrid :categories='categories'/>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
import CategoryGrid from '@/components/CategoryGrid.vue'

export default {
  name: "home",
  components: {
    CategoryGrid
  },
  computed: {
    categories() {
      return store.categories.filter(
        category => category.parentslug ===''
      );
    }
  }
};
</script>
