<template>
   <div class="home">
    <CategoryGrid :categories='categories'/>
  </div>
</template>
<script>
import store from "@/store";
import CategoryGrid from '@/components/CategoryGrid.vue'
export default {
  data() {
    return {
    };
  },
  components: {
    CategoryGrid
  },
  
  computed: {
    categories() {
      return store.categories.filter(
        category => category.parentslug === this.$route.params.slug
      );
    }
  }
};


</script>
